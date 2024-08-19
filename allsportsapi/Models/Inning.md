### Properties Documentation

- **battingLine** (`@NotNull List<Batsman>`):
    - A list of batsmen who are part of the batting lineup for the inning. This field is mandatory and cannot be null.

- **battingTeam** (`Team`):
    - The team that is batting during this inning.

- **bowlingLine** (`@NotNull List<Bowler>`):
    - A list of bowlers who are part of the bowling lineup for the inning. This field is mandatory and cannot be null.

- **bowlingTeam** (`Team`):
    - The team that is bowling during this inning.

- **bye** (`Integer`):
    - The total number of bye runs (runs scored without the batsman hitting the ball) accrued during this inning.

- **currentBatsman** (`Player`):
    - The batsman currently at the crease.

- **currentBowler** (`Player`):
    - The bowler currently delivering overs.

- **extra** (`Integer`):
    - The total number of extra runs given during this inning, which includes wides, no balls, byes, and leg byes.

- **id** (`int`):
    - A unique identifier for this specific inning within a match.

- **isInningDeclare** (`Integer`):
    - Indicates whether the inning was declared, typically in longer formats of the game where a team might declare their inning to strategically advance the game.

- **legBye** (`Integer`):
    - The total number of leg bye runs (runs scored when the ball hits the batsman's body but not the bat) accrued during this inning.

- **noBall** (`Integer`):
    - The total number of no balls (illegal deliveries) bowled during this inning.

- **number** (`int`):
    - The sequential number of the inning within the match.

- **overs** (`Double`):
    - The total number of overs bowled during this inning.

- **partnerships** (`@NotNull List<Partnership>`):
    - A list of batting partnerships during the inning. This field is mandatory and cannot be null.

- **penalty** (`Integer`):
    - The total number of penalty runs awarded during the inning, which are typically added due to breaches of conduct or rules by the opposing team.

- **score** (`Integer`):
    - The total number of runs scored by the batting team during this inning.

- **superOver** (`Integer`):
    - Indicates whether this inning includes a super over, used in certain formats of the game to decide the match in the event of a tie.

- **wickets** (`Integer`):
    - The total number of wickets lost by the batting team during this inning.

- **wide** (`Integer`):
    - The total number of wide balls (illegal deliveries too wide or high to be hit) bowled during this inning.