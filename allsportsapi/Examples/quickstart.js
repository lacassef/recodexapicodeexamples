/**
 * Quickstart: authenticate, fetch live football matches, parse the Event model,
 * and print the scoreboard — with production-grade error handling.
 *
 * What this demonstrates:
 *   - Reading the API key from the environment (never hard-code it).
 *   - The two required headers (X-RapidAPI-Key / X-RapidAPI-Host).
 *   - Handling 200 (data), 204 (route OK but no data), 429 (rate limit) and
 *     5xx (server error) with exponential backoff.
 *   - Safely reading optional/nested fields from an Event.
 *
 * Run (Node 18+, which has a global fetch):
 *     export RAPIDAPI_KEY="your_key_here"
 *     node quickstart.js
 *
 * Switch sports by setting RAPIDAPI_HOST (e.g. basketapi1.p.rapidapi.com) and the
 * path (e.g. /api/basketball/matches/live). See ../README.md for the host table.
 */

const HOST = process.env.RAPIDAPI_HOST || 'footapi7.p.rapidapi.com';
const BASE_URL = `https://${HOST}`;
const API_KEY = process.env.RAPIDAPI_KEY;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * GET an API path and return parsed JSON (or null for 204 / no data).
 * Retries on 429 and 5xx with exponential backoff, honouring Retry-After.
 */
async function get(path, { maxRetries = 4 } = {}) {
  if (!API_KEY) {
    console.error('Set RAPIDAPI_KEY in your environment first.');
    process.exit(1);
  }

  const headers = { 'X-RapidAPI-Key': API_KEY, 'X-RapidAPI-Host': HOST };
  let backoffMs = 1000;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    const res = await fetch(`${BASE_URL}${path}`, { headers });

    if (res.status === 200) return res.json();
    if (res.status === 204) return null; // route valid, no data for these params

    if (res.status === 429 || res.status >= 500) {
      if (attempt === maxRetries) {
        throw new Error(`HTTP ${res.status} after ${maxRetries} attempts`);
      }
      const retryAfter = Number(res.headers.get('retry-after')) * 1000;
      const wait = Number.isFinite(retryAfter) && retryAfter > 0 ? retryAfter : backoffMs;
      console.error(
        `  ${res.status} — retrying in ${wait / 1000}s (attempt ${attempt}/${maxRetries})`,
      );
      await sleep(wait);
      backoffMs *= 2;
      continue;
    }

    // Other 4xx (401/403/404…) are not worth retrying.
    throw new Error(`HTTP ${res.status}`);
  }
  return null;
}

async function main() {
  const data = await get('/api/matches/live');
  const events = data?.events ?? [];

  console.log(`${events.length} live football matches\n`);
  for (const ev of events.slice(0, 20)) {
    const homeScore = ev.homeScore?.current ?? '-';
    const awayScore = ev.awayScore?.current ?? '-';
    const status = ev.status?.description ?? '';
    const tournament = ev.tournament?.name ?? '';
    console.log(
      `${ev.homeTeam.name} ${homeScore} - ${awayScore} ${ev.awayTeam.name}` +
        `  (${status})  · ${tournament}`,
    );
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
