# EventStatisticsGroup

An **EventStatisticsGroup** is a named bucket of related stat rows within a period —
for example "Possession", "Shots", "Passes" or "Duels". It belongs to an
[EventStatisticsPeriod](EventStatisticsPeriod.md) and contains the individual
[EventStatisticsItem](EventStatisticsItem.md) rows shown under that heading.

**Related models:** [EventStatistics](EventStatistics.md) ·
[EventStatisticsPeriod](EventStatisticsPeriod.md) ·
[EventStatisticsItem](EventStatisticsItem.md).

## Properties

- **groupName** (`@NotNull String`):
    - The name of the statistical group, which identifies the category or type of statistics contained in this group. For example, it might represent "Offensive Stats," "Defensive Metrics," or "Player Performance." This field is mandatory and cannot be null.

- **statisticsItems** (`@NotNull List<EventStatisticsItem>`):
    - A list of statistical items for the group, where each entry is an instance of `EventStatisticsItem`. This list contains detailed metrics or data points relevant to the group. This field is mandatory and cannot be null.