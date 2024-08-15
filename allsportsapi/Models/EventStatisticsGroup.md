### Properties Documentation

- **groupName** (`@NotNull String`):
    - The name of the statistical group, which identifies the category or type of statistics contained in this group. For example, it might represent "Offensive Stats," "Defensive Metrics," or "Player Performance." This field is mandatory and cannot be null.

- **statisticsItems** (`@NotNull List<EventStatisticsItem>`):
    - A list of statistical items for the group, where each entry is an instance of `EventStatisticsItem`. This list contains detailed metrics or data points relevant to the group. This field is mandatory and cannot be null.