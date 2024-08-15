### Properties Documentation

- **category** (`@NotNull Category`):
    - The category or division to which the tournament belongs, such as a league, conference, or competition level. This field is mandatory and cannot be null.

- **fieldTranslations** (`FieldTranslations`):
    - Contains translations for various fields related to the tournament, allowing for internationalization and localization of tournament-related information.

- **groupName** (`String`):
    - The name of the group within the tournament, if applicable. This is typically used in tournaments that have multiple groups or stages.

- **id** (`int`):
    - A unique identifier for the tournament.

- **isGroup** (`Boolean`):
    - Indicates whether the tournament is organized in groups or stages. If `true`, the tournament has a group stage format.

- **isLive** (`Boolean`):
    - A flag indicating whether the tournament is currently live, meaning it is actively ongoing.

- **location** (`String`):
    - The location or venue where the tournament is being held, which could be a specific city, region, or stadium.

- **name** (`@NotNull String`):
    - The official name of the tournament. This field is mandatory and cannot be null.

- **order** (`Integer`):
    - Represents the order or ranking of the tournament within a list or series of tournaments, possibly indicating its significance or sequence.

- **roundPrefix** (`String`):
    - A prefix used for the tournament rounds, often used to label or name different stages of the competition (e.g., "Quarterfinal", "Semifinal").

- **season** (`Season`):
    - Represents the season in which the tournament is taking place. This can include information about the specific year or cycle of the competition.

- **slug** (`@NotNull String`):
    - A URL-friendly identifier for the tournament. This field is mandatory and cannot be null.

- **uniqueTournament** (`UniqueTournament`):
    - Represents a unique instance or version of the tournament, which could be specific to a certain year, season, or variant of the competition.