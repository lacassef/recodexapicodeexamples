# Schemas

## FeedRecord

- `fields` (object, dynamic keys)

## FeedResponse

- `version` (string)
- `feed` (string)
- `header` (object)
- `records` (array of FeedRecord)

## ReqResponse

- `req` (string)
- `header` (object)
- `records` (array of FeedRecord)

## CategoriesResponse

- `sportId` (integer)
- `path` (string)
- `sections` (array of CategorySection)

## CategorySection

- `name` (string)
- `url` (string)
- `categories` (array of CategoryItem)

## CategoryItem

- `id` (integer)
- `name` (string)
- `url` (string)
- `sportId` (integer)

## RankingIDResponse

- `path` (string)
- `rankingId` (string)
- `sport` (string)
- `slug` (string)
- `feeds` (object, string to string)

## TournamentArchiveResponse

- `path` (string)
- `tournamentId` (string)
- `stageId` (string)
- `seasons` (array of TournamentArchiveSeason)

## TournamentArchiveSeason

- `season` (string)
- `seasonUrl` (string)
- `winner` (TournamentArchiveWinner)

## TournamentArchiveWinner

- `name` (string)
- `url` (string)
- `id` (string)
- `logo` (string)

## TournamentResolveResponse

- `path` (string)
- `tournamentId` (string)
- `stageId` (string)
- `templateId` (string)
- `sportId` (integer)
- `selectedSeasonId` (string)
- `seasons` (array of TournamentSeason)

## TournamentSeason

- `id` (string)
- `name` (string)
- `path` (string)

## ParticipantSquadResponse

- `participantId` (string)
- `slug` (string)
- `path` (string)
- `sections` (array of SquadSection)

## SquadSection

- `name` (string)
- `rows` (array of SquadRow)

## SquadRow

- `cells` (object, string to string)
- `player` (SquadPlayer)

## SquadPlayer

- `name` (string)
- `id` (string)
- `url` (string)
- `country` (string)
- `flagId` (string)
- `absence` (string)

## PlayerMatchRecordResponse

- `playerId` (string)
- `slug` (string)
- `path` (string)
- `tables` (array of PlayerMatchRecordTable)

## PlayerMatchRecordTable

- `type` (string)
- `records` (array of PlayerMatchRecord)

## PlayerMatchRecord

- `season` (string)
- `rank` (string)
- `titles` (string)
- `allMatches` (string)
- `hard` (string)
- `clay` (string)
- `grass` (string)

## PlayerTournamentsWonResponse

- `playerId` (string)
- `slug` (string)
- `path` (string)
- `tables` (array of TournamentWinTable)

## TournamentWinTable

- `type` (string)
- `years` (array of TournamentWinYear)

## TournamentWinYear

- `year` (string)
- `wins` (array of TournamentWinEntry)

## TournamentWinEntry

- `tournament` (string)
- `url` (string)
- `country` (string)
- `surface` (string)
- `prizeMoney` (string)

## PlayerInjuriesResponse

- `playerId` (string)
- `slug` (string)
- `path` (string)
- `injuries` (array of PlayerInjury)

## PlayerInjury

- `from` (string)
- `until` (string)
- `name` (string)
- `hidden` (boolean)

## JSONResult

- Free-form JSON object

## APIError

- `status` (integer)
- `title` (string)
- `request_id` (string)

## ErrorResponse

- `error` (APIError)
