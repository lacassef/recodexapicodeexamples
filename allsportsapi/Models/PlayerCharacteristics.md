# PlayerCharacteristicsResponse Documentation

## Class Overview
`PlayerCharacteristicsResponse` extends `NetworkResponse` and represents a player's characteristics, including both positive and negative attributes, along with their playing positions.

## Properties

* **negative** (`@NotNull List<PlayerCharacteristic>`):
    * A list of negative characteristics associated with the player.
    * This field is mandatory and cannot be null.
    * Each characteristic contains a rank and type indicating specific player weaknesses.

* **positions** (`@NotNull List<String>`):
    * A list of playing positions that the player can occupy on the field.
    * This field is mandatory and cannot be null.
    * Contains standard position codes (e.g., "ST" for striker, "CB" for center back).

* **positive** (`@NotNull List<PlayerCharacteristic>`):
    * A list of positive characteristics associated with the player.
    * This field is mandatory and cannot be null.
    * Each characteristic contains a rank and type indicating specific player strengths.

## Related Classes

### PlayerCharacteristic
A serializable data class representing a specific player characteristic.

#### Properties
* **rank** (`int`):
    * Numerical value indicating the strength or significance of this characteristic.
    * Higher values typically indicate stronger presence of the characteristic.

* **type** (`int`):
    * Integer constant identifying the specific type of characteristic.
    * Maps to predefined characteristic types (see Characteristic Types below).

## Characteristic Types
The following constants define the various types of player characteristics:

### Offensive Characteristics
* **FINISHING** (5):
    * Player's ability to convert scoring opportunities.
* **LONG_SHOTS** (4):
    * Capability to score from distance.
* **CREATIVITY** (7):
    * Ability to create chances and orchestrate plays.
* **PASSING** (6):
    * Passing accuracy and distribution skills.
* **BALL_CONTROL** (14):
    * Close control and ball handling ability.

### Set-Piece Characteristics
* **FREE_KICK_TAKING** (3):
    * Ability in direct and indirect free kicks.
* **PENALTY_TAKING** (2):
    * Effectiveness in penalty situations.

### Defensive Characteristics
* **TACKLING** (9):
    * Ability to win the ball through tackles.
* **BALL_INTERCEPTION** (10):
    * Skill in reading and intercepting passes.
* **POSITIONING** (25):
    * Tactical awareness and positioning.

### Physical Characteristics
* **AERIAL** (22):
    * General aerial ability.
* **AERIAL_DUELS** (16):
    * Success in aerial challenges.
* **GROUND_DUELS** (15):
    * Effectiveness in ground challenges.

### Mental Characteristics
* **CONSISTENCY** (11):
    * Reliability of performance.
* **DISCIPLINE** (18):
    * Behavioral discipline and card avoidance.
* **ERROR_PRONENESS** (17):
    * Tendency to make mistakes.

### Goalkeeper-Specific Characteristics
* **HANDLING** (23):
    * Ball handling ability for goalkeepers.
* **REFLEXES** (20):
    * Quick reaction saves.
* **RUNS_OUT** (21):
    * Tendency and effectiveness in coming off the line.
* **PENALTY_SAVE** (19):
    * Ability to save penalties.

### Tactical Characteristics
* **ANCHOR_PLAY** (1):
    * Ability to hold up play and link with teammates.
* **HIGH_PRESSING** (26):
    * Effectiveness in pressing high up the pitch.
* **LONG_BALLS** (13):
    * Ability to make accurate long passes.

### Special Cases
* **LONG_SHOTS_SAVING** (-1):
    * Goalkeeper's ability to save long-range shots.
* **LONG_DISTANCE_SHOTS** (24):
    * Specific attribute for long-range shooting ability.
