## This structure is valid for the following endpoints:

-*/api/matches/{day}/{month}/{year}*
-*/api/matches/top/{day}/{month}/{year}*
-*/api/team/{team_id}/matches/previous/{page}*
-*/api/team/{team_id}/matches/next/{page}*



### Events JSON Structure:

#### 1. Tournament:
- **name:** (String) Name of the tournament.
- **slug:** (String) Slug for the tournament.
- **category:**
    - **name:** (String) Category name.
    - **slug:** (String) Category slug.
    - **sport:**
        - **name:** (String) Sport name.
        - **slug:** (String) Sport slug.
        - **id:** (String) Sport ID.
    - **id:** (String) Category ID.
    - **flag:** (String) Category flag.
    - **alpha2:** (String) Category alpha2.

- **uniqueTournament:**
    - **name:** (String) Name of the unique tournament.
    - **slug:** (String) Slug for the unique tournament.
    - **category:**
        - *(Same structure as the category above)*
    - **userCount:** (String) User count.
    - **id:** (String) Unique tournament ID.
    - **hasEventPlayerStatistics:** (String) Possible values: "False", "True".
    - **crowdsourcingEnabled:** (String) Possible values: "False".
    - **hasPerformanceGraphFeature:** (String) Possible values: "False", "True".
    - **displayInverseHomeAwayTeams:** (String) Possible values: "False".
    - **primaryColorHex:** (String) Primary color hex code.
    - **secondaryColorHex:** (String) Secondary color hex code.
    - **country:** (Object) *(Empty for now)*.

- **priority:** (String) Priority.
- **id:** (String) Tournament ID.

#### 2. Season:
- **name:** (String) Season name.
- **year:** (String) Season year.
- **editor:** (String) Possible values: "False".
- **seasonCoverageInfo:**
    - **editorCoverageLevel:** (String) Possible values: "1", "3".
- **id:** (String) Season ID.

#### 3. RoundInfo:
- **round:** (String) Round.
- **name:** (String) Round name.
- **cupRoundType:** (String) Cup round type.

#### 4. CustomId:
- *(String)*

#### 5. Status:
- **code:** (String) Status code.
- **description:** (String) Status description. Possible values: "AET", "Ended", "Retired", "Postponed", "Walkover", "Canceled", "Abandoned", "AP".
- **type:** (String) Status type. Possible values: "canceled", "finished", "postponed".

#### 6. WinnerCode:
- **winnerCode:** (String) Possible values: "1", "2", "3".

#### 7. HomeTeam:
- **name:** (String) Name of the home team.
- **slug:** (String) Slug for the home team.
- **shortName:** (String) Short name of the home team.
- **sport:**
    - **name:** (String) Sport name.
    - **slug:** (String) Sport slug.
    - **id:** (String) Sport ID.
- **userCount:** (String) User count.
- **nameCode:** (String) Name code.
- **disabled:** (String) Possible values: "False".
- **national:** (String) Possible values: "False", "True".
- **type:** (String) Type.
- **id:** (String) Home team ID.
- **country:**
    - **alpha2:** (String) Country alpha2 code.
    - **name:** (String) Country name.
- **subTeams:** (Object) *(Empty for now)*
- **teamColors:**
    - **primary:** (String) Primary color.
    - **secondary:** (String) Secondary color.
    - **text:** (String) Text color.
- **gender:** (String) Possible values: "M", "F".
- **fieldTranslations:**
    - **nameTranslation:** (Object) *(Empty for now)*
    - **shortNameTranslation:** (Object) *(Empty for now)*

#### 8. AwayTeam:
- **name:** (String) Name of the home team.
- **slug:** (String) Slug for the home team.
- **shortName:** (String) Short name of the home team.
- **sport:**
    - **name:** (String) Sport name.
    - **slug:** (String) Sport slug.
    - **id:** (String) Sport ID.
- **userCount:** (String) User count.
- **nameCode:** (String) Name code.
- **disabled:** (String) Possible values: "False".
- **national:** (String) Possible values: "False", "True".
- **type:** (String) Type.
- **id:** (String) Home team ID.
- **country:**
    - **alpha2:** (String) Country alpha2 code.
    - **name:** (String) Country name.
- **subTeams:** (Object) *(Empty for now)*
- **teamColors:**
    - **primary:** (String) Primary color.
    - **secondary:** (String) Secondary color.
    - **text:** (String) Text color.
- **gender:** (String) Possible values: "M", "F".
- **fieldTranslations:**
    - **nameTranslation:** (Object) *(Empty for now)*
    - **shortNameTranslation:** (Object) *(Empty for now)*

#### 9. HomeScore:
- *(Object)*
    - **current:** (String) Current score.
    - **display:** (String) Display score.
    - **period1:** (String) Score for period 1.
    - **period2:** (String) Score for period 2.
    - **normaltime:** (String) Score for normal time.
    - **aggregated:** (String) Aggregated score.
    - **penalties:** (String) Penalties score.
    - **extra1:** (String) Extra time score 1.
    - **extra2:** (String) Extra time score 2.
    - **overtime:** (String) Overtime score.

#### 10. AwayScore:
- *(Object)*
    - **current:** (String) Current score.
    - **display:** (String) Display score.
    - **period1:** (String) Score for period 1.
    - **period2:** (String) Score for period 2.
    - **normaltime:** (String) Score for normal time.
    - **aggregated:** (String) Aggregated score.
    - **penalties:** (String) Penalties score.
    - **extra1:** (String) Extra time score 1.
    - **extra2:** (String) Extra time score 2.
    - **overtime:** (String) Overtime score.

#### 11. Time:
- *(Object)*
    - **injuryTime1:** (String) Injury time 1.
    - **injuryTime2:** (String) Injury time 2.
    - **currentPeriodStartTimestamp:** (String) Timestamp for the start of the current period.
    - **injuryTime3:** (String) Injury time 3.
    - **injuryTime4:** (String) Injury time 4.

#### 12. Changes:
- **changes:** (Object) *(Empty for now)*
- **changeTimestamp:** (String)

#### 13. Other Fields:
- **hasGlobalHighlights:** (String) Possible values: "False".
- **hasEventPlayerStatistics:** (String) Possible values: "False", "True".
- **hasEventPlayerHeatMap:** (String) Possible values: "False", "True".
- **detailId:** *(String)*
- **crowdsourcingDataDisplayEnabled:** (String) Possible values: "False".
- **id:** *(String)*
- **crowdsourcingEnabled:** (String) Possible values: "False".
- **startTimestamp:** *(String)*
- **slug:** *(String)*
- **finalResultOnly:** (String) Possible values: "False".
- **isEditor:** (String) Possible values: "False".
- **homeRedCards:** *(String)*
- **awayRedCards:** *(String)*
- **isAwarded:** (String) Possible values: "True".
- **aggregatedWinnerCode:** (String) Possible values: "1", "2", "3".
- **previousLegEventId:** *(String)*
- **coverage:** (String) Possible values: "-1".