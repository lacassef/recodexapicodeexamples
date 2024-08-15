### Properties Documentation

- **alpha2** (`String`):
    - A two-letter code representing the category, possibly related to a country code or short identifier.

- **events** (`@NotNull List<Object>`):
    - A list of events associated with this category. This field is mandatory and cannot be null.

- **expanded** (`boolean`):
    - A flag indicating whether the category is currently expanded in a UI context, revealing its contents.

- **fieldTranslations** (`FieldTranslations`):
    - Contains translations for various fields related to the category, supporting internationalization and localization.

- **flag** (`@NotNull String`):
    - A flag or marker associated with the category, potentially representing its status, importance, or a country flag. This field is mandatory and cannot be null.

- **hasEventPlayerStatistics** (`boolean`):
    - A flag indicating whether player statistics are available for events within this category.

- **hasVideos** (`boolean`):
    - A flag indicating whether the category includes video content.

- **id** (`int`):
    - A unique identifier for the category.

- **isDownloading** (`boolean`):
    - A flag indicating whether content or data related to the category is currently being downloaded.

- **isPinnedSection** (`boolean`):
    - Indicates whether this category is a pinned section, possibly prioritizing it in a list or menu.

- **isPopular** (`boolean`):
    - A flag indicating whether the category is popular, potentially based on user engagement or relevance.

- **isPopularSection** (`boolean`):
    - Indicates whether this category is part of a popular section, which might be highlighted or featured prominently.

- **isSection** (`boolean`):
    - A flag indicating whether the category represents a section within a larger grouping or hierarchy.

- **liveEvents** (`int`):
    - The number of live events currently ongoing within this category.

- **mccList** (`List<Integer>`):
    - A list of MCC (Mobile Country Code) values associated with the category, which may be used for geographic or network-related purposes.

- **name** (`@NotNull String`):
    - The name of the category. This field is mandatory and cannot be null.

- **priority** (`Integer`):
    - A priority level assigned to the category, which could determine its order or prominence in displays.

- **remainingLeagues** (`int`):
    - The number of leagues or subcategories remaining within this category, possibly used to indicate available content.

- **slug** (`@NotNull String`):
    - A URL-friendly identifier for the category, often used for routing or referencing in web applications. This field is mandatory and cannot be null.

- **sport** (`@NotNull Sport`):
    - The sport associated with this category, such as football, basketball, or tennis. This field is mandatory and cannot be null.

- **totalEvents** (`int`):
    - The total number of events within this category.

- **type** (`CategoryType`):
    - The type of category, which might indicate its nature or role within the broader application.

- **uniqueTournamentIds** (`List<Integer>`):
    - A list of unique tournament IDs associated with this category, linking it to specific competitions or leagues.