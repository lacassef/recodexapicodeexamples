### Properties Documentation

- **balls** (`Integer`):
    - The number of balls faced by the batsman during their innings.

- **fowOver** (`Double`):
    - The over number during which the batsman was dismissed, part of the "Fall of Wicket" (FOW) statistics.

- **fowScore** (`Integer`):
    - The total score at the time of the batsman's dismissal, also part of the "Fall of Wicket" statistics.

- **player** (`@NotNull Player`):
    - The player who is the batsman. This field is mandatory and cannot be null.

- **playerName** (`String`):
    - The name of the player, providing a textual identifier for the batsman.

- **s4** (`Integer`):
    - The number of boundaries (four runs) hit by the batsman.

- **s6** (`Integer`):
    - The number of sixes (six runs) hit by the batsman.

- **score** (`Integer`):
    - The total number of runs scored by the batsman.

- **wicketBowler** (`Player`):
    - The bowler responsible for the dismissal of the batsman, if the wicket was taken by a bowler.

- **wicketBowlerName** (`String`):
    - The name of the bowler who took the batsman's wicket, providing a textual identifier for the bowler.

- **wicketCatch** (`Player`):
    - The fielder who caught the ball if the batsman was dismissed by a catch.

- **wicketCatchName** (`String`):
    - The name of the fielder who caught the batsman out, providing a textual identifier for the fielder.

- **wicketTypeId** (`Integer`):
    - An identifier for the type of dismissal (e.g., caught, bowled, run out). This helps in categorizing the manner of the wicket.

- **wicketTypeName** (`String`):
    - A descriptive name of the type of wicket, providing details about how the batsman was dismissed (e.g., "Caught", "Bowled").