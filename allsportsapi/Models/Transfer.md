# Transfer

A **Transfer** records the movement of a [Player](Player.md) (or manager) between
[Team](Team.md)s, including the fee, the direction (from/to), the date and the kind of
move. The `type` field encodes the nature of the transfer:

| `type` | Meaning |
|--------|---------|
| `1` | Loan — the player moves temporarily to another team. |
| `2` | End of loan — the player returns to their original team. |
| `3` | Permanent transfer — the player is bought/sold outright. |

For draft‑based sports, `round` and `pick` describe the selection slot.

**Where you'll see it:** team and player transfer‑history endpoints.

**Related models:** [Player](Player.md) · [Team](Team.md).

## Properties

- **fromTeamName** (`String`):
    - The name of the team from which the player or manager is being transferred.

- **id** (`int`):
    - A unique identifier for the transfer.

- **isManager** (`boolean`):
    - A flag indicating whether the transfer involves a manager rather than a player.

- **pick** (`Integer`):
    - The pick number in the draft or selection process associated with this transfer, if applicable.

- **player** (`Player`):
    - The player involved in the transfer. If the transfer is for a manager, this field might not be used.

- **round** (`Integer`):
    - The round in which the transfer or draft pick occurred, if applicable.

- **toTeamName** (`String`):
    - The name of the team to which the player or manager is being transferred.

- **transferDateTimestamp** (`int`):
    - The timestamp representing the date of the transfer, typically in Unix time (seconds since the epoch).

- **transferFeeDescription** (`String`):
    - A textual description of the transfer fee, detailing the amount and potentially any conditions or terms related to the payment.

- **transferFeeRaw** (`Money`):
    - The raw monetary value of the transfer fee, represented as a `Money` object.

- **transferFrom** (`Team`):
    - The `Team` object representing the team from which the player or manager is being transferred.

- **transferTo** (`Team`):
    - The `Team` object representing the team to which the player or manager is being transferred.

- **type** (`Integer`):
    - An integer representing the type of transfer, which could denote different kinds of transfers (e.g., loan, permanent, free transfer).