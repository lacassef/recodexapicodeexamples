### Properties Documentation

- **aggregatedWinnerCode** (`Integer`):
    - Represents the code of the team or player who is the aggregated winner of the event.

- **attendance** (`Integer`):
    - Indicates the number of people attending the event.

- **awayRedCards** (`Integer`):
    - Tracks the number of red cards issued to the away team during the event.

- **awayScore** (`@NotNull Score`):
    - Holds the score of the away team. This field cannot be null.

- **awayTeam** (`@NotNull Team`):
    - Represents the away team participating in the event. This field cannot be null.

- **awayTeamRanking** (`Integer`):
    - Indicates the ranking of the away team at the time of the event.

- **awayTeamSeasonHistoricalForm** (`TeamSeasonForm`):
    - Stores the historical form of the away team during the season.

- **awayTeamSeed** (`String`):
    - Refers to the seed assigned to the away team in the event.

- **bestOf** (`Integer`):
    - Represents the "best of" format for the event, such as best of 3, 5, etc.

- **bet365ExcludedCountryCodes** (`List<String>`):
    - Contains a list of country codes where bet365 services are excluded for the event.

- **changes** (`EventChanges`):
    - Tracks changes made to the event.

- **childEvents** (`List<Integer>`):
    - Holds the list of child event IDs associated with this event.

- **coverage** (`Integer`):
    - Indicates the extent of coverage provided for the event.

- **cricketBallProperties** (`List<String>`):
    - Stores properties of the cricket ball used in the event, such as color, type, etc.

- **crowdsourcingDataDisplayEnabled** (`boolean`):
    - Flag to indicate if crowdsourcing data display is enabled for the event.

- **crowdsourcingEnabled** (`boolean`):
    - Flag to indicate if crowdsourcing is enabled for the event.

- **cupMatchesInRound** (`int`):
    - Number of cup matches in the current round of the event.

- **currentBatsmanId** (`Integer`):
    - The ID of the current batsman in a cricket event.

- **currentBattingTeamId** (`Integer`):
    - The ID of the current batting team in a cricket event.

- **currentBowlerId** (`Integer`):
    - The ID of the current bowler in a cricket event.

- **currentPeriodStartTimestamp** (`Long`):
    - Timestamp representing the start time of the current period in the event.

- **customId** (`@NotNull String`):
    - A custom identifier for the event. This field cannot be null.

- **defaultPeriodCount** (`Integer`):
    - Number of default periods (e.g., halves, quarters) in the event.

- **defaultPeriodLength** (`Integer`):
    - Length of each default period in the event.

- **deletedAtTimestamp** (`Integer`):
    - Timestamp indicating when the event was deleted, if applicable.

- **detailId** (`Integer`):
    - An identifier for additional details related to the event.

- **endTimestamp** (`Long`):
    - Timestamp marking the end time of the event.

- **eventEditor** (`EventEditor`):
    - The editor responsible for making changes to the event.

- **eventEditorName** (`String`):
    - Name of the event editor.

- **eventType** (`String`):
    - Describes the type of event, e.g., match, tournament, etc.

- **fanRatingEvent** (`boolean`):
    - Indicates whether fan ratings are enabled for the event.

- **fightDiscipline** (`String`):
    - Specifies the discipline (e.g., boxing, MMA) of the fight in the event.

- **fightState** (`String`):
    - Represents the current state of the fight, such as ongoing, ended, etc.

- **fightType** (`String`):
    - Type of fight in the event, such as a title fight, exhibition, etc.

- **finalResultOnly** (`boolean`):
    - Indicates whether only the final result is considered in the event.

- **finalRound** (`Integer`):
    - Specifies the final round number in the event.

- **firstToServe** (`Integer`):
    - Indicates the ID of the team or player who serves first in a match.

- **gameAdvantageTeamId** (`Integer`):
    - ID of the team that has the advantage in the game.

- **gender** (`String`):
    - Indicates the gender category of the event participants (e.g., male, female, mixed).

- **groundType** (`String`):
    - Describes the type of ground or playing surface for the event.

- **hasBet365LiveStream** (`boolean`):
    - Indicates whether the event is available for live streaming on bet365.

- **hasEventPlayerHeatMap** (`boolean`):
    - Indicates whether a player heat map is available for the event.

- **hasEventPlayerStatistics** (`Boolean`):
    - Indicates whether player statistics are available for the event.

- **hasGlobalHighlights** (`boolean`):
    - Indicates whether global highlights are available for the event.

- **hasXg** (`Boolean`):
    - Indicates whether Expected Goals (xG) statistics are available for the event.

- **hide** (`boolean`):
    - Flag to indicate whether the event should be hidden.

- **homeRedCards** (`Integer`):
    - Tracks the number of red cards issued to the home team during the event.

- **homeScore** (`@NotNull Score`):
    - Holds the score of the home team. This field cannot be null.

- **homeTeam** (`@NotNull Team`):
    - Represents the home team participating in the event. This field cannot be null.

- **homeTeamRanking** (`Integer`):
    - Indicates the ranking of the home team at the time of the event.

- **homeTeamSeasonHistoricalForm** (`TeamSeasonForm`):
    - Stores the historical form of the home team during the season.

- **homeTeamSeed** (`String`):
    - Refers to the seed assigned to the home team in the event.

- **id** (`int`):
    - The unique identifier for the event.

- **isAwarded** (`boolean`):
    - Indicates whether the event has been awarded a particular status or result.

- **isEditor** (`Boolean`):
    - Indicates whether the event is in editor mode.

- **isRecent** (`boolean`):
    - Flag to indicate if the event is recent or upcoming.

- **lastPeriod** (`String`):
    - Represents the last period played in the event.

- **manOfMatch** (`Player`):
    - The player awarded "Man of the Match" in the event.

- **mute** (`boolean`):
    - Flag to mute notifications or alerts for the event.

- **note** (`String`):
    - Additional notes or remarks related to the event.

- **parentEventId** (`Integer`):
    - ID of the parent event, if this event is a child event.

- **periods** (`Map<String, String>`):
    - Maps period names to their corresponding values or details.

- **previousLegEventId** (`Integer`):
    - ID of the previous leg of the event, if applicable.

- **referee** (`Referee`):
    - Represents the referee officiating the event.

- **refereeName** (`String`):
    - Name of the referee officiating the event.

- **roundInfo** (`Round`):
    - Information about the round or stage of the event.

- **season** (`Season`):
    - Represents the season in which the event is taking place.

- **seasonStatisticsType** (`String`):
    - Indicates the type of statistics used for the season.

- **showTotoPromo** (`Boolean`):
    - Indicates whether a "Toto Promo" should be shown for the event.

- **slug** (`@NotNull String`):
    - A URL-friendly identifier for the event. This field cannot be null.

- **startTimestamp** (`long`):
    - Timestamp indicating the start time of the event.

- **status** (`@NotNull Status`):
    - Current status of the event, such as scheduled, ongoing, completed. This field cannot be null.

- **statusReason** (`String`):
    - Reason for the current status of the event.

- **time** (`Time`):
    - Represents the time-related details of the event.

- **tossDecision** (`String`):
    - The decision made by the toss-winning team (e.g., bat, bowl) in a cricket event.

- **tossWin** (`String`):
    - The team that won the toss in a cricket event.

- **t

ournament** (`@NotNull Tournament`):
- The tournament to which the event belongs. This field cannot be null.

- **tvUmpireName** (`String`):
    - Name of the TV umpire in a cricket event.

- **typeList** (`HashSet<EventType>`):
    - Set of event types associated with the event.

- **umpire1Name** (`String`):
    - Name of the first on-field umpire in a cricket event.

- **umpire2Name** (`String`):
    - Name of the second on-field umpire in a cricket event.

- **venue** (`Venue`):
    - Venue where the event is being held.

- **weightClass** (`String`):
    - Weight class of the participants in a combat sports event.

- **winType** (`String`):
    - Describes the type of win (e.g., knockout, points) in the event.

- **winnerCode** (`Integer`):
    - Code representing the winner of the event.

- **yardDistance** (`AmericanFootballDownDistance`):
    - Represents the yard distance in an American football event related to the down distance.