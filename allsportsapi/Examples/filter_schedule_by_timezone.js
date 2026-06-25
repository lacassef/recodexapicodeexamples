/**
 * Filter a day's schedule to a specific time zone — the code companion to the FAQ
 * "Why do schedule endpoints return matches from the previous/next day?" (../FAQ.md).
 *
 * Schedule endpoints are timestamped in UTC and intentionally return a window that
 * spans ~12 h before and after the UTC date, so every time zone is covered. To show a
 * user's *local* day, filter by `event.startTimestamp` against that day's local
 * bounds — and fetch the neighbouring UTC dates that overlap it.
 *
 * The flat per-date feed (/api/matches/{day}/{month}/{year}) has been retired, so we
 * assemble the day *per competition*. Two options (see ../FAQ.md "How do I get all
 * matches on a specific date?"):
 *
 *   1. By category:    /api/{sport}/category/{id}/events/{day}/{month}/{year}
 *                      (football: /api/category/{id}/events/{day}/{month}/{year})
 *   2. By tournament:  /api/{sport}/tournament/{id}/scheduled-events/{YYYY-MM-DD}
 *                      (football, cricket, esport, tennis)
 *
 * This example uses option 1 over a configurable set of categories (default: football
 * category 1 = England). Enumerate categories via /api/{sport}/tournament/categories
 * (see list_all_leagues.js) and extend CATEGORY_IDS to widen coverage.
 *
 * Run (Node 18+):
 *     export RAPIDAPI_KEY="your_key_here"
 *     node filter_schedule_by_timezone.js
 */

const HOST = process.env.RAPIDAPI_HOST || 'footapi7.p.rapidapi.com';
const BASE_URL = `https://${HOST}`;
const API_KEY = process.env.RAPIDAPI_KEY;

// '' for football (footapi7); set to e.g. '/tennis' for another sport (and switch HOST).
const SPORT_PREFIX = process.env.SPORT_PREFIX || '';
// Categories (countries/tours) to assemble the day's schedule from. Comma-separated.
const CATEGORY_IDS = (process.env.CATEGORY_IDS || '1').split(',').map((c) => c.trim()).filter(Boolean);

async function get(path) {
  if (!API_KEY) {
    console.error('Set RAPIDAPI_KEY in your environment first.');
    process.exit(1);
  }
  const headers = { 'X-RapidAPI-Key': API_KEY, 'X-RapidAPI-Host': HOST };
  const res = await fetch(`${BASE_URL}${path}`, { headers });
  if (res.status === 204) return null;
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${path}`);
  return res.json();
}

async function fetchSchedule(day, month, year) {
  // The flat /api/matches/{day}/{month}/{year} feed is retired — union each category's
  // schedule and dedupe. Swap to /api{SPORT_PREFIX}/tournament/{id}/scheduled-events/
  // {YYYY-MM-DD} to drive it by tournament instead. See ../FAQ.md.
  const seen = new Set();
  const events = [];
  for (const catId of CATEGORY_IDS) {
    const data = await get(`/api${SPORT_PREFIX}/category/${catId}/events/${day}/${month}/${year}`);
    for (const ev of data?.events ?? []) {
      if (!seen.has(ev.id)) {
        seen.add(ev.id);
        events.push(ev);
      }
    }
  }
  return events;
}

/** Offset (ms) between a given instant and the wall-clock in `timeZone`. */
function tzOffsetMs(date, timeZone) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone,
    hour12: false,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).formatToParts(date);
  const get = (t) => Number(parts.find((p) => p.type === t).value);
  const asUTC = Date.UTC(get('year'), get('month') - 1, get('day'), get('hour'), get('minute'), get('second'));
  return asUTC - date.getTime();
}

/** UNIX-second bounds [start, end) of the local calendar day in `timeZone`. */
function localDayBounds(year, month, day, timeZone) {
  const naiveUTC = Date.UTC(year, month - 1, day);
  // Resolve twice so DST transitions at midnight are handled correctly.
  let startMs = naiveUTC - tzOffsetMs(new Date(naiveUTC), timeZone);
  startMs = naiveUTC - tzOffsetMs(new Date(startMs), timeZone);
  const endMs = startMs + 24 * 3600 * 1000;
  return [Math.floor(startMs / 1000), Math.floor(endMs / 1000)];
}

async function matchesForLocalDay(year, month, day, timeZone) {
  const [startTs, endTs] = localDayBounds(year, month, day, timeZone);

  // The local day can overlap up to three UTC calendar dates. Fetch all and dedupe.
  const seen = new Set();
  const events = [];
  for (const offset of [-1, 0, 1]) {
    const d = new Date(Date.UTC(year, month - 1, day + offset));
    const dayEvents = await fetchSchedule(d.getUTCDate(), d.getUTCMonth() + 1, d.getUTCFullYear());
    for (const ev of dayEvents) {
      const ts = ev.startTimestamp;
      if (seen.has(ev.id) || ts == null) continue;
      if (ts >= startTs && ts < endTs) {
        seen.add(ev.id);
        events.push(ev);
      }
    }
  }
  events.sort((a, b) => (a.startTimestamp ?? 0) - (b.startTimestamp ?? 0));
  return events;
}

async function main() {
  const timeZone = process.env.TZ_NAME || 'Asia/Tokyo';
  const now = new Date();
  // Use the current date in the target zone as the default.
  const todayParts = new Intl.DateTimeFormat('en-CA', { timeZone, year: 'numeric', month: '2-digit', day: '2-digit' })
    .format(now)
    .split('-')
    .map(Number);
  const year = Number(process.env.YEAR) || todayParts[0];
  const month = Number(process.env.MONTH) || todayParts[1];
  const day = Number(process.env.DAY) || todayParts[2];

  const events = await matchesForLocalDay(year, month, day, timeZone);
  const date = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  console.log(`${events.length} matches on ${date} (${timeZone}) across categories ${CATEGORY_IDS.join(',')}\n`);
  for (const ev of events) {
    const kickoff = new Date(ev.startTimestamp * 1000).toLocaleTimeString('en-GB', {
      timeZone,
      hour: '2-digit',
      minute: '2-digit',
    });
    console.log(`${kickoff}  ${ev.homeTeam.name} vs ${ev.awayTeam.name}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
