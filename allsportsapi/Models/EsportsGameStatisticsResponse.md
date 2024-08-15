### Properties Documentation

- **awayStatistics** (`@NotNull EsportsGameStatistics`):
    - Contains the esports game statistics for the away team. This field is mandatory and cannot be null.

- **homeStatistics** (`@NotNull EsportsGameStatistics`):
    - Contains the esports game statistics for the home team. This field is mandatory and cannot be null.

- **shouldReverseTeams** (`boolean`):
    - A flag indicating whether the home and away teams' roles should be reversed when interpreting or displaying the statistics. This could be used in cases where the teams are logically or strategically reversed in the context of the game or broadcast.