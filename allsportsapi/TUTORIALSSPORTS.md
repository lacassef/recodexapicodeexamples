<b>How to get live and pre-match data from the API?</b><br/>
To get live and/or pre-match data like statistics you will need to use the endpoint that have “Match” in their name. To find all these endpoints you can use the search tool available on the endpoints tab. Eg.: You can search Football Match, this will return you all endpoints like statistics, incidents, odds and more.<br/>
<b>Players statistics from match?</b><br/>
You can find player statistics by two ways. The first is from Match Lineups, Eg.: Football Match Lineups. This will return all players, including their statistics. The second way is to use Match Player Statistics, that will return statistics for a player by their id.
How to show image on my website
We return image/png as response for all image/logo endpoints. To show these image on your website you need to statically access the endpoint or to convert to base64 string to dynamically show the image.
Tennis player or team?
Please read this page: https://rapidapi.com/fluis.lacasse/api/tennisapi1/tutorials/where-is-the-player-id-on-the-events%3F-why-is-it-on-the-team-id%3F
Time of the match
You can check this tutorial to get an idea: https://rapidapi.com/fluis.lacasse/api/footapi7/tutorials/what-is-the-time-of-the-match-and-the-current-minute-in-live-match%3F
How to build your website or application with our API?
If you need assistance from our team you can contact us from the About tab, we will help you through your website/application building process. Don’t worry, this is costless.
Does this API provides odds?
This API(and all other sports, except for motorsport and esport) provides general/referential use odds mostly from bet365. To get specialized odds please see: https://rapidapi.com/fluis.lacasse/api/pinaculo and https://rapidapi.com/fluis.lacasse/api/uniodds3
Status and Incidents
The incidents description can be done by “incidentType” and “incidentClass” or “text”.

incidentType can be: “period”, “penaltyShootout”, “card”, “substitution”, “injuryTime”, “goal”, “varDecision”, “inGamePenalty”
incidentClass for “penaltyShootout”: “scored”, “missed”
incidentClass for “card”: “red”, “yellow”, "yellowRed"
text for “period”: “HT”, “FT”, “ET”, “PEN”
incidentClass for “goal”: “penalty”, “regular”, “ownGoal”
incidentClass for “substitution”: “injury”, null
incidentClass for “varDecision”: “penaltyNotAwarded”, “goalAwarded”, “cardUpgrade” => confirmed -> true, false
incidentClass for “inGamePenalty”: “missed”
The description of the match status can be done by:

Status are are described by the ‘type’ property that provides a code string. The returns are: ‘inprogress’, ‘finished’, ‘postponed’, ‘canceled’, 'notstarted’
The ‘description’ property returns understandable text of the status. Some returns for football are: ‘1st half’, ‘2nd half’, ‘Halftime’, ‘Ended’, ‘Postponed’, ‘Canceled’, ‘Not started’, “AP”(After Penalties), “AET”(After Extra Time), “1st extra”, “Extra time halftime”, “2nd extra”, “Awaiting penalties”, “Penalties”, “Awaiting extra time”,
API too complicated to understand, what to do?
We’ve created this API to collect all our sports API’s into one. If it’s too hard to understand the endpoints we recommend you to go API by API testing and seeing every one of them. After all, the endpoints all are the same except for the host.
The links for the API’s are:

Football/Soccer: https://rapidapi.com/fluis.lacasse/api/footapi7/
Tennis: https://rapidapi.com/fluis.lacasse/api/tennisapi1/
Ice Hockey: https://rapidapi.com/fluis.lacasse/api/icehockeyapi/
American-Football: https://rapidapi.com/fluis.lacasse/api/americanfootballapi/
Baseball: https://rapidapi.com/fluis.lacasse/api/baseballapi/
Basketball: https://rapidapi.com/fluis.lacasse/api/basketapi1/
Cricket: https://rapidapi.com/fluis.lacasse/api/cricketapi21/
Esports: https://rapidapi.com/fluis.lacasse/api/esportapi1/
Motorsport: https://rapidapi.com/fluis.lacasse/api/motorsportapi/
Rugby: https://rapidapi.com/fluis.lacasse/api/rugbyapi2/
There, you will find the grouped endpoints. The group names can be:

Matches: Provides informations about the matches or schedules. Lineups, Statistics, Incidents, Highlights, Odds are some of the info you will find there.
Teams: Provides informations about the teams. Squads, Statistics, Logo, Transfers are some info you will get there.
Players: Provides informations about the players. Statistics, Image, Transfer History are some info you will get there.
Managers: Provides informations about managers. Career History, Image, Last Matches are some info you will get there.
If you still don’t understand anything or want to request new feature you can contact us.
Why we don't provide widgets?
Providing widgets will let the user to know about your API-KEY, which can represent a major security break. Instead of providing widgets we are available to provide you support while you are developing your application. You can contact us to have a free help from our team.
How to get all leagues of the sport?
To get all the leagues of the sport, you will need to list all categories first and then list all tournaments inside the category.
The category represents the country/tour/game of the tournaments. To get all categories, you can use the following endpoint: “/api/tournament/categories” for football or “/api/{sport}/tournament/categories” for other sports. With the response you can get all the leagues with the following endpoint: “/api/tournament/all/category/{category_id}” for football or “/api/{sport}/tournament/all/category/{category_id}" for other sports. Additionally, there are the category schedules that shows the events played in certain day for that category alone: “/api/category/{category_id}/events/{day}/{month}/{year}” for football or “/api/{sport}/category/{category_id}/events/{day}/{month}/{year}" for other sports, with the day being integer.
How to get all teams in a league?
To get all teams of the league you need to use the standings endpoints.
Why schedules endpoints returns some matches from previous and next day?
Answer from this discussion: https://rapidapi.com/fluis.lacasse/api/allsportsapi2/discussions/38225
"In short answer, it’s to provide the matches independently of the user’s timezone. You can filter the matches according to your timezone. If you need help doing so, we can help you.
Long answer(copying from this discussion: https://rapidapi.com/fluis.lacasse/api/footapi7/discussions/33473)
“As you may have noticed, the matches returned by the schedules endpoint have the timestamp according to the time zone gmt/utc+00. So that all time zones are covered, we return matches from 12 hours of the previous day and 12 hours of the next day…”
"
Not providing the data I'm looking, what can I do?
I think if this is the case, this API can meet your needs: https://rapidapi.com/fluis.lacasse/api/allscores/
How to generate heatmaps?
Here you can find the hml code to generate the heatmaps: https://github.com/lacassef/recodexapicodeexamples
Team Transfer Types
team transfers:
type 3 - bought/sold
type 2 - end of loan
type 1 - loan