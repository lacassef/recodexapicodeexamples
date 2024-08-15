### Properties Documentation

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