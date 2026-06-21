# EventStatistics

**EventStatistics** is the top of the match‑statistics tree. It holds one entry per
period, and each period is broken into named groups of individual stat rows. The full
nesting is:

```
EventStatistics
└── statistics: [ EventStatisticsPeriod ]   one per period ("ALL", "1st half"…)
    └── groups: [ EventStatisticsGroup ]    e.g. "Possession", "Shots", "Passes"
        └── statisticsItems: [ EventStatisticsItem ]   one row, with home/away values
```

To render a stats table: iterate `statistics` (pick the period you want), then its
`groups`, then each group's `statisticsItems` (each item has `home`/`away` display
strings plus `homeValue`/`awayValue` numbers).

**Related models:** [EventStatisticsPeriod](EventStatisticsPeriod.md) ·
[EventStatisticsGroup](EventStatisticsGroup.md) ·
[EventStatisticsItem](EventStatisticsItem.md) · [Event](Event.md).

## Properties

- **statistics** (`@NotNull List<EventStatisticsPeriod>`):
    - A list of `EventStatisticsPeriod` objects that contain the statistical data for the event, broken down by period (e.g., quarters, halves, or other defined segments of the event). This field is mandatory and cannot be null. Each `EventStatisticsPeriod` object in the list contains specific statistics relevant to that period.