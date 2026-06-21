"""
Quickstart: authenticate, fetch live football matches, parse the Event model,
and print the scoreboard — with production-grade error handling.

What this demonstrates:
  * Reading the API key from the environment (never hard-code it).
  * The two required headers (X-RapidAPI-Key / X-RapidAPI-Host).
  * Handling 200 (data), 204 (route OK but no data), 429 (rate limit) and
    5xx (server error) with exponential backoff.
  * Safely reading optional/nested fields from an Event.

Run:
    export RAPIDAPI_KEY="your_key_here"
    pip install requests
    python quickstart.py

Switch sports by setting RAPIDAPI_HOST (e.g. basketapi1.p.rapidapi.com) and the
path (e.g. /api/basketball/matches/live). See ../README.md for the host table.
"""

import os
import sys
import time

import requests

HOST = os.environ.get("RAPIDAPI_HOST", "footapi7.p.rapidapi.com")
BASE_URL = f"https://{HOST}"
API_KEY = os.environ.get("RAPIDAPI_KEY")


def get(path, *, max_retries=4, timeout=15):
    """GET an API path and return parsed JSON (or None for 204 / no data).

    Retries on 429 and 5xx with exponential backoff, honouring Retry-After.
    Raises for non-retryable client errors (other 4xx).
    """
    if not API_KEY:
        sys.exit("Set RAPIDAPI_KEY in your environment first.")

    url = f"{BASE_URL}{path}"
    headers = {"X-RapidAPI-Key": API_KEY, "X-RapidAPI-Host": HOST}
    backoff = 1.0

    for attempt in range(1, max_retries + 1):
        resp = requests.get(url, headers=headers, timeout=timeout)

        if resp.status_code == 200:
            return resp.json()
        if resp.status_code == 204:
            return None  # the route is valid but there's no data for these params

        if resp.status_code == 429 or resp.status_code >= 500:
            if attempt == max_retries:
                resp.raise_for_status()
            wait = float(resp.headers.get("Retry-After", backoff))
            print(
                f"  {resp.status_code} — retrying in {wait:.0f}s "
                f"(attempt {attempt}/{max_retries})",
                file=sys.stderr,
            )
            time.sleep(wait)
            backoff *= 2
            continue

        # Other 4xx (e.g. 401/403/404) are not worth retrying.
        resp.raise_for_status()

    return None


def main():
    data = get("/api/matches/live")
    events = (data or {}).get("events", [])

    print(f"{len(events)} live football matches\n")
    for ev in events[:20]:
        # Required fields are safe; optional ones are null-checked.
        home = ev["homeTeam"]["name"]
        away = ev["awayTeam"]["name"]
        home_score = ev.get("homeScore", {}).get("current", "-")
        away_score = ev.get("awayScore", {}).get("current", "-")
        status = ev.get("status", {}).get("description", "")
        tournament = ev.get("tournament", {}).get("name", "")
        print(f"{home} {home_score} - {away_score} {away}  ({status})  · {tournament}")


if __name__ == "__main__":
    main()
