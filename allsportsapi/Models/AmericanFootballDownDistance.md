# AmericanFootballDownDistance

**AmericanFootballDownDistance** describes the live situation of an American‑football
drive: which down it is, how many yards remain for a first down, where the ball is
spotted, which team has possession and whether they're in goal‑to‑go range. On an
[Event](Event.md) it appears as `yardDistance`.

**Where you'll see it:** live American‑football match endpoints.

**Related models:** [Event](Event.md).

## Properties

- **currentDown** (`Integer`):
    - Represents the current down in an American football game. The down refers to one of the four attempts a team has to advance the ball ten yards.

- **currentPossession** (`Integer`):
    - Indicates which team currently has possession of the ball, usually represented by a team ID.

- **currentTeamHalf** (`Integer`):
    - Indicates which half of the field the team with possession is currently on. This is typically represented by a value indicating whether the team is on their own half or the opponent's half.

- **currentYardline** (`Integer`):
    - Represents the current yard line on the field where the ball is spotted. Yard lines are numbered from 0 to 50 on both sides of the field.

- **currentYardsToFirstDown** (`Integer`):
    - Indicates the number of yards the team with possession needs to gain to achieve a first down.

- **isGoalPossession** (`Boolean`):
    - A flag indicating whether the current possession is a goal possession, meaning the team is close to scoring, usually within the opponent's red zone or near the end zone.