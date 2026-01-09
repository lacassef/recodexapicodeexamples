# Feed naming patterns

Use `GET /api/livescores/feed/{version}/{feed}` when you need to call a feed by name. The patterns below are common. Availability varies by sport and by match, so some feeds may return empty payloads.

If a friendly endpoint exists (for example, `/matches/{eventId}/stats`), prefer it over constructing feed names manually.

## Scoreboards and refresh

- Scoreboard: `f_{sportId}_{dayOffset}_2_{lang}_1`
  - Example: `f_1_0_2_en_1`
- Refresh: `r_{sportId}_1`
  - Example: `r_1_1`

## Odds list

- Odds list: `fo_{sportId}_{dayOffset}_2_{lang}_1_0`
  - Example: `fo_1_0_2_en_1_0`

## Match detail feeds

Use `{eventId}` from `sharedindexes_event_id` in match list feeds.

Common patterns:

- Match stats: `df_st_1_{eventId}`
- Timeline/incidents: `df_tl_1_{eventId}`
- Live commentary: `df_lc_1_{eventId}`
- Commentary only: `df_lcpo_1_{eventId}`
- Point by point (tennis): `df_mh_1_{eventId}`
- Head to head: `df_hh_1_{eventId}`
- Match news list: `df_nf_1_{eventId}`
- Match report/news: `df_mr_1_{eventId}`
- Highlights list: `df_mhs_1_{eventId}`
- Highlight videos: `df_hi_1_{eventId}`
- TV list (long): `df_sui_1_{eventId}`
- TV list (short): `df_sur_1_{eventId}`
- Odds details: `df_dos_1_{eventId}_`

## Tournament feeds

- Tables: `tx_{tournamentId}_{stageId}`
  - Example: `tx_M1c7lv64_tKE3WZmL`
- Match lists (examples):
  - `p_1_165_OC8T8zk3_2_en_1`
  - `t_2_5733_MTJqK2xP_2_en_1`
  - `pr_2_182_GrsQDFC0_1_2_en_1_s`

## Rankings feeds

- Rankings: `ran_{rankingId}_1` or `ral_{rankingId}_1`
  - Example: `ran_dSJr14Y8_1`

## Other common prefixes

- Category tournaments: `c_*`
- Match hash detail: `g_*`
- Featured lists: `fp_*`
- System status: `sys_*`
