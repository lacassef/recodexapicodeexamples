"""
List every league of a sport — a runnable version of the FAQ recipe
"How do I get all leagues of a sport?" (see ../FAQ.md).

Strategy (top-down tree walk):
    1. List all categories:            /api/tournament/categories
    2. For each category, list its
       unique tournaments (leagues):   /api/tournament/all/category/{id}

This example targets football (host footapi7). For other sports, prefix the path
with the sport, e.g. /api/basketball/tournament/categories and
/api/basketball/tournament/all/category/{id}, and set RAPIDAPI_HOST accordingly.

Run:
    export RAPIDAPI_KEY="your_key_here"
    pip install requests
    python list_all_leagues.py

NOTE: this makes one request per category, so it can be many calls. Categories and
leagues change slowly — cache the result (hours/days) instead of re-walking often.
"""

import os
import sys
import time

import requests

HOST = os.environ.get("RAPIDAPI_HOST", "footapi7.p.rapidapi.com")
BASE_URL = f"https://{HOST}"
API_KEY = os.environ.get("RAPIDAPI_KEY")

# Path prefix: "" for football, "/basketball", "/tennis", … for other sports.
SPORT_PREFIX = os.environ.get("SPORT_PREFIX", "")


def get(path, *, timeout=15):
    if not API_KEY:
        sys.exit("Set RAPIDAPI_KEY in your environment first.")
    headers = {"X-RapidAPI-Key": API_KEY, "X-RapidAPI-Host": HOST}
    resp = requests.get(f"{BASE_URL}{path}", headers=headers, timeout=timeout)
    if resp.status_code == 204:
        return None
    resp.raise_for_status()
    return resp.json()


def list_categories():
    data = get(f"/api{SPORT_PREFIX}/tournament/categories")
    return (data or {}).get("categories", [])


def list_leagues_in_category(category_id):
    data = get(f"/api{SPORT_PREFIX}/tournament/all/category/{category_id}")
    return (data or {}).get("uniqueTournaments", [])


def main():
    categories = list_categories()
    print(f"{len(categories)} categories\n")

    total_leagues = 0
    for category in categories:
        leagues = list_leagues_in_category(category["id"])
        total_leagues += len(leagues)
        print(f"{category['name']} ({category.get('alpha2', '—')}) — {len(leagues)} leagues")
        for league in leagues:
            print(f"    [{league['id']}] {league['name']}")
        time.sleep(0.2)  # be gentle on your rate limit

    print(f"\nTotal: {total_leagues} leagues across {len(categories)} categories")


if __name__ == "__main__":
    main()
