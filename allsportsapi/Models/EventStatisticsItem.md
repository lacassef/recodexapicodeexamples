### Properties Documentation

- **addBottomPadding** (`boolean`):
    - A flag indicating whether bottom padding should be added when rendering this statistic, which may affect the layout or spacing in the display.

- **away** (`@NotNull String`):
    - A string representing the away team’s label or name for the statistic. This field is mandatory and cannot be null.

- **awayTotal** (`Double`):
    - The total value of the statistic for the away team. This can be used for aggregated or cumulative statistics.

- **awayValue** (`double`):
    - The specific value of the statistic for the away team. This is a raw numeric value.

- **compareCode** (`int`):
    - A code used for comparison purposes, which may help in sorting, categorizing, or comparing different statistics.

- **hideDivider** (`boolean`):
    - A flag indicating whether to hide the divider line that might separate this statistic from others in the display.

- **home** (`@NotNull String`):
    - A string representing the home team’s label or name for the statistic. This field is mandatory and cannot be null.

- **homeTotal** (`Double`):
    - The total value of the statistic for the home team. This can be used for aggregated or cumulative statistics.

- **homeValue** (`double`):
    - The specific value of the statistic for the home team. This is a raw numeric value.

- **isExpectedGoals** (`boolean`):
    - A flag indicating whether this statistic represents expected goals (xG), which is a metric used to estimate the likelihood of goals scored based on various factors.

- **isGoalsPrevented** (`boolean`):
    - A flag indicating whether this statistic represents goals prevented, which tracks defensive actions or goalkeeper performance.

- **name** (`@NotNull String`):
    - The name of the statistic, which describes what the statistic measures (e.g., "Shots on Target," "Pass Accuracy"). This field is mandatory and cannot be null.

- **otherPlayerSelected** (`boolean`):
    - A flag indicating whether the statistic applies to another player beyond the primary focus, which may affect how it is displayed or calculated.

- **renderType** (`Integer`):
    - An integer representing the type of rendering or display for this statistic, which may dictate how the data is visualized (e.g., as a bar chart, percentage, or raw number).

- **shouldReverseTeams** (`boolean`):
    - A flag indicating whether the teams' roles (home and away) should be reversed when displaying or interpreting the statistic.

- **shouldRoundToInt** (`boolean`):
    - A flag indicating whether the statistic value should be rounded to an integer when displayed, affecting the precision of the displayed data.

- **statisticsType** (`@NotNull String`):
    - The type of the statistic, which categorizes it into broader categories such as "Offensive," "Defensive," or "Team Performance." This field is mandatory and cannot be null.

- **valueType** (`@NotNull String`):
    - The type of value represented by the statistic, such as "Count," "Percentage," or "Rate." This field is mandatory and cannot be null.