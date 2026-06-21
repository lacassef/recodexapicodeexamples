"""
Match-clock calculator — a runnable version of the FAQ's "Determining the Match
Time" algorithm (see ../FAQ.md).

Given an event's `status`, `lastPeriod` and `time` fields, it computes:
  * how many seconds have elapsed in the current (live) period,
  * the "added time" beyond the period's regular duration (time.max),
  * a football-style display minute (e.g. "47:23" or "45+2:23"),
  * the FAQ's TotalPeriodTime sum across periods.

All timestamps are UNIX seconds in UTC. Pass `now` to test deterministically;
in production omit it to use the real clock.

Run:
    python match_clock.py
"""

import time

# Football period -> base minute offset (illustrative; tune per sport/competition).
# A 2nd-half clock shows 45:00+, extra-time halves 90:00+ / 105:00+.
FOOTBALL_PERIOD_BASE_MINUTES = {
    "period1": 0,
    "period2": 45,
    "period3": 90,   # 1st half of extra time
    "period4": 105,  # 2nd half of extra time
}


def current_period_elapsed(event, now=None):
    """Seconds elapsed in the currently active period, or None if not live."""
    now = int(time.time()) if now is None else now
    t = event.get("time", {})
    start = t.get("currentPeriodStartTimestamp")
    is_live = event.get("status", {}).get("type") == "inprogress"
    if is_live and start:
        return max(0, now - start)
    return None


def added_time_seconds(event, now=None):
    """Seconds beyond the period's regular duration (time.max), else 0."""
    elapsed = current_period_elapsed(event, now)
    if elapsed is None:
        return 0
    regular = event.get("time", {}).get("max", 0)
    return max(0, elapsed - regular)


def football_display(event, now=None):
    """A football-style clock string, e.g. '47:23' or '45+2:23' in added time."""
    elapsed = current_period_elapsed(event, now)
    if elapsed is None:
        return event.get("status", {}).get("description", "—")

    regular = event.get("time", {}).get("max", 0)
    base_min = FOOTBALL_PERIOD_BASE_MINUTES.get(event.get("lastPeriod"), 0)

    if elapsed <= regular or regular == 0:
        total_sec = base_min * 60 + elapsed
        return f"{total_sec // 60}:{total_sec % 60:02d}"

    # In added time: show "<regular minute>+<added m:ss>".
    added = elapsed - regular
    regular_min = base_min + regular // 60
    return f"{regular_min}+{added // 60}:{added % 60:02d}"


def total_period_time(event, now=None, max_periods=7):
    """The FAQ's TotalPeriodTime: sum elapsed (live period) + recorded (others)."""
    now = int(time.time()) if now is None else now
    t = event.get("time", {})
    recorded = t.get("initial", 0) + t.get("max", 0) + t.get("extra", 0)
    status_type = event.get("status", {}).get("type")
    last_period = event.get("lastPeriod")
    start = t.get("currentPeriodStartTimestamp", 0)

    total = 0
    for i in range(1, max_periods + 1):
        period = f"period{i}"
        if status_type == "inprogress" and last_period == period and start > 0:
            total += now - start
        else:
            total += recorded
    return total


if __name__ == "__main__":
    # The sample event from the FAQ: 1st half, 10 minutes played.
    sample_event = {
        "status": {"code": 6, "description": "1st half", "type": "inprogress"},
        "lastPeriod": "period1",
        "time": {
            "initial": 0,
            "max": 2700,                       # 45:00 regular
            "extra": 540,
            "currentPeriodStartTimestamp": 1727861400,
        },
    }
    now = 1727862000  # 600 s after kickoff

    print("Elapsed in current period:", current_period_elapsed(sample_event, now), "s")
    print("Added time:", added_time_seconds(sample_event, now), "s")
    print("Display clock:", football_display(sample_event, now))

    # Same event 4 minutes into first-half stoppage time (49:00 played).
    print("Display in stoppage:", football_display(sample_event, 1727861400 + 2940))
