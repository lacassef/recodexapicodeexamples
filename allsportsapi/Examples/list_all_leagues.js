/**
 * List every league of a sport — a runnable version of the FAQ recipe
 * "How do I get all leagues of a sport?" (see ../FAQ.md).
 *
 * Strategy (top-down tree walk):
 *   1. List all categories:          /api/tournament/categories
 *   2. For each category, list its
 *      unique tournaments (leagues):  /api/tournament/all/category/{id}
 *
 * This example targets football (host footapi7). For other sports, prefix the path
 * with the sport, e.g. /api/basketball/tournament/categories, and set RAPIDAPI_HOST
 * (and SPORT_PREFIX) accordingly.
 *
 * Run (Node 18+):
 *     export RAPIDAPI_KEY="your_key_here"
 *     node list_all_leagues.js
 *
 * NOTE: this makes one request per category, so it can be many calls. Categories and
 * leagues change slowly — cache the result (hours/days) instead of re-walking often.
 */

const HOST = process.env.RAPIDAPI_HOST || 'footapi7.p.rapidapi.com';
const BASE_URL = `https://${HOST}`;
const API_KEY = process.env.RAPIDAPI_KEY;

// Path prefix: "" for football, "/basketball", "/tennis", … for other sports.
const SPORT_PREFIX = process.env.SPORT_PREFIX || '';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

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

async function listCategories() {
  const data = await get(`/api${SPORT_PREFIX}/tournament/categories`);
  return data?.categories ?? [];
}

async function listLeaguesInCategory(categoryId) {
  const data = await get(`/api${SPORT_PREFIX}/tournament/all/category/${categoryId}`);
  return data?.uniqueTournaments ?? [];
}

async function main() {
  const categories = await listCategories();
  console.log(`${categories.length} categories\n`);

  let totalLeagues = 0;
  for (const category of categories) {
    const leagues = await listLeaguesInCategory(category.id);
    totalLeagues += leagues.length;
    console.log(`${category.name} (${category.alpha2 ?? '—'}) — ${leagues.length} leagues`);
    for (const league of leagues) {
      console.log(`    [${league.id}] ${league.name}`);
    }
    await sleep(200); // be gentle on your rate limit
  }

  console.log(`\nTotal: ${totalLeagues} leagues across ${categories.length} categories`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
