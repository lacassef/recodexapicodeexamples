## Properties Documentation

- **addedTime (`Integer`):**

  Represents the additional time added to the current period, typically used to account for stoppages or delays during the game.

- **awayScore (`Integer`):**

  The current score of the away team in the match.

- **firstIncident (`boolean`):**

  A flag indicating whether this is the first incident recorded in the match, such as the first foul or event.

- **firstItem (`boolean`):**

  Indicates whether this is the first item or event in a sequence, useful for initializing or triggering specific actions.

- **homeScore (`Integer`):**

  The current score of the home team in the match.

- **id (`Integer`):**

  A unique identifier for the incident or event within the system.

- **incidentType (`@NotNull String`):**

  Specifies the type of incident that has occurred (`e.g., foul, goal, substitution`). This field is mandatory and cannot be null.

- **isHome (`Boolean`):**

  Determines whether the incident is related to the home team (```true```) or the away team (`false``).

- **lastItem (`boolean`):**

  A flag indicating whether this is the last item or event in a sequence, useful for concluding actions or finalizing states.

- **reversedPeriodTime (`Integer`):**

  The time in the current period after reversing, which may be used for specific game mechanics or display purposes.

- **reversedPeriodTimeSeconds (`Integer`):**

  The time in seconds of the current period after reversing, providing a more granular time measurement.

- **shouldReverseTeams (`boolean`):**

  Indicates whether the teams' positions or statuses should be reversed, possibly for gameplay or display reasons.

- **showDivider (`boolean`):**

  A flag that determines whether a visual divider should be displayed in the user interface, enhancing readability or organization.

- **sport (`String`):**

  The type of sport associated with the event or incident (`e.g., football, basketball, hockey`).

- **time (`Integer`):**

  The current time elapsed in the match or period, typically measured in minutes.

- **timeSeconds (`Integer`):**

  The current time elapsed in the match or period, measured in seconds for more precise tracking.