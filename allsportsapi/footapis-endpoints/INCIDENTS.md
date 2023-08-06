# `/api/match/{match_id}/incidents` Endpoint Documentation

This endpoint provides details about various incidents occurring during a match. Below is the JSON structure and its explanation.

## JSON Structure

```json
{
  "addedTime": "<int>",
  "awayScore": "<int>",
  "homeScore": "<int>",
  "incidentType": "<string>",
  "isLive": "<boolean>",
  "text": "<string>",
  "time": "<string>",
  "length": "<int>",
  "id": "<int>",
  "isHome": "<boolean>",
  "playerIn": {
    "id": "<int>",
    "name": "<string>",
    "position": "<string>",
    "shortName": "<string>",
    "slug": "<string>",
    "userCount": "<int>",
    "firstName": "<string>",
    "lastName": "<string>"
  },
  "playerOut": {
    "id": "<int>",
    "name": "<string>",
    "position": "<string>",
    "shortName": "<string>",
    "slug": "<string>",
    "userCount": "<int>",
    "firstName": "<string>",
    "lastName": "<string>"
  },
  "reversedPeriodTime": "<int>",
  "confirmed": "<boolean>",
  "incidentClass": "<string>",
  "player": {
    "id": "<int>",
    "name": "<string>",
    "position": "<string>",
    "shortName": "<string>",
    "slug": "<string>",
    "userCount": "<int>",
    "firstName": "<string>",
    "lastName": "<string>"
  },
  "assist1": {
    "id": "<int>",
    "name": "<string>",
    "position": "<string>",
    "shortName": "<string>",
    "slug": "<string>",
    "userCount": "<int>",
    "firstName": "<string>",
    "lastName": "<string>"
  },
  "playerName": "<string>",
  "reason": "<string>",
  "rescinded": "<boolean>",
  "manager": {
    "id": "<int>",
    "name": "<string>",
    "shortName": "<string>",
    "slug": "<string>"
  },
  "injury": "<boolean>",
  "description": "<string>",
  "reversedPeriodTimeSeconds": "<int>",
  "timeSeconds": "<int>",
  "playerNameIn": "<string>",
  "playerNameOut": "<string>",
  "sequence": "<string>"
}
```

## Field Descriptions

- **addedTime**: Integer, representing the added time in the match.
- **awayScore**: Integer, representing the away team's score.
- **homeScore**: Integer, representing the home team's score.
- **incidentType**: String, type of incident. Possible values:
    - substitution
    - varDecision
    - injuryTime
    - card
    - goal
    - penaltyShootout
    - period
    - inGamePenalty
- **isLive**: Boolean, indicating if the incident is currently live.
- **text**: String. Possible values:
    - FT (Full Time)
    - ET (Extra Time)
    - HT (Half Time)
    - PEN (Penalty)
- **time**: String, time of the incident.
- **length**: Integer, length of the incident.
- **id**: Integer, unique identifier for the incident.
- **isHome**: Boolean, indicating if the incident is related to the home team.
- **playerIn** & **playerOut**: Objects containing details of the player coming in and going out, respectively, during substitutions:
    - id, name, position, shortName, slug, userCount, firstName, lastName
- **reversedPeriodTime**: Integer, a specific time marker for the incident.
- **confirmed**: Boolean, indicating if the incident has been confirmed.
- **incidentClass**: String, classifying the type of incident. Contains various options like yellow, injury, scored, and more.
- **player**: Object, containing details of the player involved in the incident.
- **assist1**: Object, containing details of the assisting player.
- **playerName**: String, name of the player involved.
- **reason**: String, reason for the incident, such as "Persistent fouling", "Simulation", and more.
- **rescinded**: Boolean, indicating if the incident has been rescinded.
- **manager**: Object, details of the team manager.
- **injury**: Boolean, indicating if there's an injury.
- **description**: String, further describes the incident, e.g., "Woodwork", "Goalkeeper save".
- **reversedPeriodTimeSeconds**: Integer, time of the incident in seconds.
- **timeSeconds**: Integer, another representation of time for the incident in seconds.
- **playerNameIn**: String, name of the player coming in during a substitution.
- **playerNameOut**: String, name of the player going out during a substitution.
- **sequence**: String, represents the sequence of the incident in the match.