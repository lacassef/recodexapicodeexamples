### Properties Documentation

- **category** (`@NotNull Category`):
    - The category or division to which the tournament belongs, such as a league, conference, or competition level. This field is mandatory and cannot be null.

- **chairman** (`String`):
    - The name of the chairman or person in charge of the tournament.

- **country** (`Country`):
    - The country where the tournament is based or primarily held.

- **crowdsourcingEnabled** (`boolean`):
    - A flag indicating whether crowdsourcing features are enabled for the tournament, allowing user-generated content or data contributions.

- **displayInverseHomeAwayTeams** (`boolean`):
    - A flag indicating whether the home and away teams should be displayed inversely, possibly for specific UI or strategic purposes.

- **fieldTranslations** (`FieldTranslations`):
    - Contains translations for various fields related to the tournament, supporting internationalization and localization.

- **groundType** (`String`):
    - The type of ground or playing surface used in the tournament, such as grass, clay, or synthetic.

- **hasBoxScore** (`Boolean`):
    - Indicates whether the tournament includes box scores, which are detailed statistical summaries of individual games.

- **hasDownDistance** (`Boolean`):
    - Indicates whether the tournament includes "down and distance" information, relevant for sports like American football.

- **hasEventPlayerStatistics** (`boolean`):
    - A flag indicating whether player statistics are tracked and displayed for events within the tournament.

- **hasPerformanceGraphFeature** (`boolean`):
    - Indicates whether the tournament supports performance graph features, which visually represent player or team performance over time.

- **id** (`int`):
    - A unique identifier for the tournament.

- **isActive** (`boolean`):
    - A flag indicating whether the tournament is currently active.

- **isPinned** (`boolean`):
    - Indicates whether the tournament is pinned, likely for quick access or prioritization in lists or displays.

- **isRecent** (`boolean`):
    - A flag indicating whether the tournament has been recently active or updated.

- **name** (`String`):
    - The official name of the tournament.

- **numberOfCompetitors** (`Integer`):
    - The total number of competitors or teams participating in the tournament.

- **numberOfDivisions** (`Integer`):
    - The number of divisions or groups within the tournament, if applicable.

- **owner** (`String`):
    - The owner or organization responsible for running the tournament.

- **primaryColorHex** (`String`):
    - The primary color of the tournament, represented as a hexadecimal color code, typically used for branding and design purposes.

- **secondaryColorHex** (`String`):
    - The secondary color of the tournament, also represented as a hexadecimal color code.

- **slug** (`@NotNull String`):
    - A URL-friendly identifier for the tournament. This field is mandatory and cannot be null.

- **tennisPoints** (`Integer`):
    - The number of points awarded in tennis events within the tournament, relevant if the tournament includes tennis matches.

- **userCount** (`long`):
    - The number of users or fans associated with or following the tournament.

- **yearOfFoundation** (`Integer`):
    - The year in which the tournament was founded, indicating its historical origin.