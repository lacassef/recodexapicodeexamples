### Properties Documentation

- **country** (`Country`):
    - Represents the country where the sub-team is based or registered.

- **disabled** (`boolean`):
    - A flag indicating whether the sub-team is currently disabled or inactive.

- **fieldTranslations** (`FieldTranslations`):
    - Contains translations for various fields related to the sub-team, supporting internationalization and localization.

- **id** (`int`):
    - A unique identifier for the sub-team.

- **name** (`String`):
    - The official name of the sub-team.

- **national** (`boolean`):
    - Indicates whether the sub-team is a national team, representing a country rather than a club or regional entity.

- **shortName** (`String`):
    - A shortened version of the sub-team's name, typically used for display in UI elements or in contexts where brevity is needed.

- **slug** (`@NotNull String`):
    - A URL-friendly identifier for the sub-team. This field is mandatory and cannot be null.

- **type** (`int`):
    - Indicates the type of sub-team, which could relate to its level, category, or affiliation within the organization.

- **userCount** (`long`):
    - The number of users or fans associated with or following the sub-team.