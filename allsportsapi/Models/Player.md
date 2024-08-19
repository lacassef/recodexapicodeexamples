### Properties Documentation

- **contractUntilTimestamp** (`Long`):
    - A timestamp indicating the date until which the player's current contract is valid.

- **country** (`Country`):
    - The player's country of nationality.

- **cricketPlayerInfo** (`CricketPlayerInfo`):
    - Specialized information pertinent to players in cricket, detailing aspects like batting style, bowling style, and cricket-specific statistics.

- **dateOfBirthTimestamp** (`Long`):
    - The player's date of birth, represented as a timestamp.

- **dateOfDeathTimestamp** (`Long`):
    - The date of the player's death, if applicable, represented as a timestamp.

- **deceased** (`boolean`):
    - Indicates whether the player is deceased.

- **fieldTranslations** (`FieldTranslations`):
    - Contains translations for various player-related fields, supporting internationalization and localization.

- **firstName** (`String`):
    - The player's first name.

- **height** (`Integer`):
    - The player's height in centimeters.

- **id** (`int`):
    - A unique identifier for the player.

- **injury** (`Injury`):
    - Details about any current injury the player might have, including the type of injury and expected recovery time.

- **isRecent** (`boolean`):
    - A flag indicating whether there have been recent updates or activities related to the player.

- **jerseyNumber** (`String`):
    - The number on the player's jersey, representing their official team number during competitions.

- **lastName** (`String`):
    - The player's last name.

- **managerId** (`Integer`):
    - An identifier linking the player to a manager or agent.

- **marketValueRaw** (`Money`):
    - The player's current market value as a monetary amount.

- **name** (`@NotNull String`):
    - The player's full name. This field is mandatory and cannot be null.

- **position** (`String`):
    - The player's playing position on the team (e.g., forward, midfielder, goalkeeper).

- **preferredFoot** (`String`):
    - Indicates the player's preferred foot for playing (e.g., right, left, both).

- **proposedMarketValueRaw** (`Money`):
    - A proposed market value, potentially used during transfer negotiations or contract renewals.

- **retired** (`boolean`):
    - Indicates whether the player has retired from professional play.

- **shortName** (`String`):
    - A shorter or abbreviated version of the player's name, often used in media or during broadcasts.

- **slug** (`String`):
    - A URL-friendly identifier for the player, often used for linking to player profiles or related content online.

- **team** (`Team`):
    - The team to which the player is currently signed.

- **userCount** (`long`):
    - The number of users or fans following the player, indicative of the player's popularity or fan base.