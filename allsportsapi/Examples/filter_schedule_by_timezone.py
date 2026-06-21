"""
Filter a day's schedule to a specific time zone — the code companion to the FAQ
"Why do schedule endpoints return matches from the previous/next day?" (../FAQ.md).

Schedule endpoints are timestamped in UTC and intentionally return a window that
spans ~12 h before and after the UTC date, so every time zone is covered. To show a
user's *local* day, you must filter by `event.startTimestamp` against that day's
local bounds — and fetch the neighbouring UTC dates that overlap it.

Endpoint used (football):  /api/matches/{day}/{month}/{year}

Run:
    export RAPIDAPI_KEY="your_key_here"
    pip install requests
    python filter_schedule_by_timezone.py            # defaults below
"""

import os
import sys
from datetime import datetime, timedelta
from zoneinfo import ZoneInfo

import requests

HOST = os.environ.get("RAPIDAPI_HOST", "footapi7.p.rapidapi.com")
BASE_URL = f"https://{HOST}"
API_KEY = os.environ.get("RAPIDAPI_KEY")


def get(path, *, timeout=15):
    if not API_KEY:
        sys.exit("Set RAPIDAPI_KEY in your environment first.")
    headers = {"X-RapidAPI-Key": API_KEY, "X-RapidAPI-Host": HOST}
    resp = requests.get(f"{BASE_URL}{path}", headers=headers, timeout=timeout)
    if resp.status_code == 204:
        return None
    resp.raise_for_status()
    return resp.json()


def fetch_schedule(day, month, year):
    data = get(f"/api/matches/{day}/{month}/{year}")
    return (data or {}).get("events", [])


def matches_for_local_day(year, month, day, tz_name):
    """Return events that kick off on the given local calendar day, sorted by time."""
    tz = ZoneInfo(tz_name)
    local_start = datetime(year, month, day, tzinfo=tz)
    local_end = local_start + timedelta(days=1)
    start_ts, end_ts = int(local_start.timestamp()), int(local_end.timestamp())

    # The local day can overlap up to three UTC calendar dates. Fetch all and dedupe.
    seen, events = set(), []
    for offset in (-1, 0, 1):
        d = local_start + timedelta(days=offset)
        for ev in fetch_schedule(d.day, d.month, d.year):
            ts = ev.get("startTimestamp")
            if ev["id"] in seen or ts is None:
                continue
            if start_ts <= ts < end_ts:
                seen.add(ev["id"])
                events.append(ev)

    events.sort(key=lambda e: e.get("startTimestamp", 0))
    return events, tz


def main():
    # Defaults: today's date, Tokyo time. Override via env if you like.
    tz_name = os.environ.get("TZ_NAME", "Asia/Tokyo")
    today = datetime.now(ZoneInfo(tz_name))
    year = int(os.environ.get("YEAR", today.year))
    month = int(os.environ.get("MONTH", today.month))
    day = int(os.environ.get("DAY", today.day))

    events, tz = matches_for_local_day(year, month, day, tz_name)
    print(f"{len(events)} matches on {year}-{month:02d}-{day:02d} ({tz_name})\n")
    for ev in events:
        kickoff = datetime.fromtimestamp(ev["startTimestamp"], tz)
        home, away = ev["homeTeam"]["name"], ev["awayTeam"]["name"]
        print(f"{kickoff:%H:%M}  {home} vs {away}")


if __name__ == "__main__":
    main()
