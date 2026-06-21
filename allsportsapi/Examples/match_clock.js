/**
 * Match-clock calculator — a runnable version of the FAQ's "Determining the Match
 * Time" algorithm (see ../FAQ.md).
 *
 * Given an event's `status`, `lastPeriod` and `time` fields, it computes:
 *   - how many seconds have elapsed in the current (live) period,
 *   - the "added time" beyond the period's regular duration (time.max),
 *   - a football-style display minute (e.g. "47:23" or "45+2:23"),
 *   - the FAQ's TotalPeriodTime sum across periods.
 *
 * All timestamps are UNIX seconds in UTC. Pass `now` to test deterministically;
 * in production omit it to use the real clock.
 *
 * Run:  node match_clock.js
 */

// Football period -> base minute offset (illustrative; tune per sport/competition).
// A 2nd-half clock shows 45:00+, extra-time halves 90:00+ / 105:00+.
const FOOTBALL_PERIOD_BASE_MINUTES = {
  period1: 0,
  period2: 45,
  period3: 90, // 1st half of extra time
  period4: 105, // 2nd half of extra time
};

const nowSeconds = () => Math.floor(Date.now() / 1000);

/** Seconds elapsed in the currently active period, or null if not live. */
function currentPeriodElapsed(event, now = nowSeconds()) {
  const start = event.time?.currentPeriodStartTimestamp;
  const isLive = event.status?.type === 'inprogress';
  if (isLive && start) return Math.max(0, now - start);
  return null;
}

/** Seconds beyond the period's regular duration (time.max), else 0. */
function addedTimeSeconds(event, now = nowSeconds()) {
  const elapsed = currentPeriodElapsed(event, now);
  if (elapsed === null) return 0;
  const regular = event.time?.max ?? 0;
  return Math.max(0, elapsed - regular);
}

const mmss = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;

/** A football-style clock string, e.g. "47:23" or "45+2:23" in added time. */
function footballDisplay(event, now = nowSeconds()) {
  const elapsed = currentPeriodElapsed(event, now);
  if (elapsed === null) return event.status?.description ?? '—';

  const regular = event.time?.max ?? 0;
  const baseMin = FOOTBALL_PERIOD_BASE_MINUTES[event.lastPeriod] ?? 0;

  if (elapsed <= regular || regular === 0) {
    return mmss(baseMin * 60 + elapsed);
  }
  const added = elapsed - regular;
  const regularMin = baseMin + Math.floor(regular / 60);
  return `${regularMin}+${mmss(added)}`;
}

/** The FAQ's TotalPeriodTime: sum elapsed (live period) + recorded (others). */
function totalPeriodTime(event, now = nowSeconds(), maxPeriods = 7) {
  const t = event.time ?? {};
  const recorded = (t.initial ?? 0) + (t.max ?? 0) + (t.extra ?? 0);
  const statusType = event.status?.type;
  const start = t.currentPeriodStartTimestamp ?? 0;

  let total = 0;
  for (let i = 1; i <= maxPeriods; i++) {
    if (statusType === 'inprogress' && event.lastPeriod === `period${i}` && start > 0) {
      total += now - start;
    } else {
      total += recorded;
    }
  }
  return total;
}

// --- Demo ------------------------------------------------------------------
if (require.main === module) {
  // The sample event from the FAQ: 1st half, 10 minutes played.
  const sampleEvent = {
    status: { code: 6, description: '1st half', type: 'inprogress' },
    lastPeriod: 'period1',
    time: { initial: 0, max: 2700, extra: 540, currentPeriodStartTimestamp: 1727861400 },
  };
  const now = 1727862000; // 600 s after kickoff

  console.log('Elapsed in current period:', currentPeriodElapsed(sampleEvent, now), 's');
  console.log('Added time:', addedTimeSeconds(sampleEvent, now), 's');
  console.log('Display clock:', footballDisplay(sampleEvent, now));
  console.log('Display in stoppage:', footballDisplay(sampleEvent, 1727861400 + 2940));
}

module.exports = {
  currentPeriodElapsed,
  addedTimeSeconds,
  footballDisplay,
  totalPeriodTime,
};
