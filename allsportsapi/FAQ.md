<h1>FAQ</h1>
<h3>How to get live and pre-match data from the API?</h3>

<p>If you're seeking live and pre-match data, such as statistics, you will have to interact with specific API endpoints labeled with "Match". These can be conveniently located on the RapidAPI page.</p> 

<p>Using the built-in search tool within the endpoints tab on RapidAPI, you can simply type 'Match'. This will instantly return a comprehensive list of all related endpoints, including data categories like statistics, incidents, odds, and more. This efficient method will help you quickly find the necessary endpoints for retrieving the data you need.</p>
<h3>How to Retrieve Player Statistics from a Match?</h3>

<p>There are two primary methods to access player statistics. The first method involves using the 'Match Lineups' endpoint, for example: 'Football Match Lineups'. This endpoint provides comprehensive data about all participating players, inclusive of their respective statistics.</p>

<p>The second approach utilizes the 'Match Player Statistics' endpoint. By inputting a specific player's id, you can directly retrieve that player's statistics. Both methods can be accessed effortlessly through the search tool in the endpoints tab on the RapidAPI page.</p>
<h3>Methods for Displaying Images on Your Website</h3>

<p>All image or logo endpoints return responses in image/png format, with placeholders being the only exception, which return SVG images. To integrate these images on your website, considering the necessary authorization headers for the API calls, you have several practical options:</p>

<ol>
<li><strong>Fetch API:</strong> Use JavaScript's Fetch API or other similar HTTP libraries like Axios to send a GET request to the endpoint. Then, set the response as a source for an HTML img element. The Fetch API allows for the setting of specific headers, accommodating the need for authorization.</li>

<li><strong>Base64 Conversion:</strong> Convert the image to a base64 string using JavaScript after making an authorized fetch request. This allows for dynamic rendering of the image on your website.</li>

<li><strong>Server-side Proxy:</strong> Implement a server-side proxy that handles the authenticated request to the API, retrieves the image, and then serves it to the front-end of your website. This approach isolates the API credentials on the server, improving security.</li>

<li><strong>Canvas API:</strong> Another dynamic approach, especially useful when needing to manipulate images further, is to use JavaScript's Canvas API. Fetch the image via an authorized request, then draw it onto a canvas element.</li>

</ol>

<p>Each method has its own benefits, so choose the one that best aligns with your website's requirements and your comfort with JavaScript and server-side programming.</p>

<h3>Determining the Match Time</h3>

<p>When you interact with any match endpoint, we provide an array of detailed information. Among these, the attribute "statusTime" is vital to determining the match's ongoing time:</p>

<ul>
  <li><strong>"statusTime"</strong>: Contains data about the current time of the match. With this information, you can perform simple mathematical operations to calculate the seconds that have passed since the beginning of the period. Specifically, the current time is calculated as: (current timestamp - event["statusTime"]["timestamp"]) + event["statusTime"]["initial"].</li>
</ul>

<p>If you aim to implement the time in a "time + added time" format, the current added time after the official period (e.g., the standard 45 minutes for football/soccer), would follow the below logic:</p>

<ul>
  <li>If (current timestamp - event["statusTime"]["timestamp"]) > event["statusTime"]["max"], then the added time would be: (current timestamp - event["statusTime"]["timestamp"]) - event["statusTime"]["max"].</li>
</ul>

<p>We also offer an attribute called "time" which encompasses "injuryTime" - the maximum additional time granted by the referee, also known as injury time.</p>

<p>Please note, all timestamps we provide are in seconds.</p>
<h3>How to build your website or application with our API?</h3>
<p>If you need assistance from our team you can contact us from the About tab, we will help you through your website/application building process. Don’t worry, this is costless.</p>
<h3>Does this API provides odds?</h3>
<p>This API(and all other sports, except for motorsport and esport) provides general/referential use odds mostly from bet365. To get specialized odds please see: <a href="https://rapidapi.com/fluis.lacasse/api/pinaculo" target="_blank">Pinaculo</a> and <a href="https://rapidapi.com/fluis.lacasse/api/uniodds3" target="_blank">Unioods</a> </p>
<h3>Status and Incidents</h3>
<p>The incidents description can be done by “incidentType” and “incidentClass” or “text”.</p>
<ul>
<li>incidentType can be: “period”, “penaltyShootout”, “card”, “substitution”, “injuryTime”, “goal”, “varDecision”, “inGamePenalty”</li>
<li>incidentClass for “penaltyShootout”: “scored”, “missed”</li>
<li>incidentClass for “card”: “red”, “yellow”, "yellowRed"</li>
<li>text for “period”: “HT”, “FT”, “ET”, “PEN”</li>
<li>incidentClass for “goal”: “penalty”, “regular”, “ownGoal”</li>
<li>incidentClass for “substitution”: “injury”, null</li>
<li>incidentClass for “varDecision”: “penaltyNotAwarded”, “goalAwarded”, “cardUpgrade” => confirmed -> true, false</li>
<li>incidentClass for “inGamePenalty”: “missed”</li>
</ul>
<p>The description of the match status can be done by:</p>

<p>Status are are described by the ‘type’ property that provides a code string. The returns are: ‘inprogress’, ‘finished’, ‘postponed’, ‘canceled’, 'notstarted’</p>
<p>The ‘description’ property returns understandable text of the status. Some returns for football are: ‘1st half’, ‘2nd half’, ‘Halftime’, ‘Ended’, ‘Postponed’, ‘Canceled’, ‘Not started’, “AP”(After Penalties), “AET”(After Extra Time), “1st extra”, “Extra time halftime”, “2nd extra”, “Awaiting penalties”, “Penalties”, “Awaiting extra time”.</p>
<h3>API too complicated to understand, what to do?</h3>
<p>We’ve created this API to collect all our sports API’s into one. If it’s too hard to understand the endpoints we recommend you to go API by API testing and seeing every one of them. After all, the endpoints all are the same except for the host.</p>
<p>The links for the API’s are:</p>
<ul>
<li><a href="https://rapidapi.com/fluis.lacasse/api/footapi7/" target="_blank">Football/Soccer</a></li>
<li><a href="https://rapidapi.com/fluis.lacasse/api/tennisapi1/" target="_blank">Tennis</a></li>
<li><a href="https://rapidapi.com/fluis.lacasse/api/icehockeyapi/" target="_blank">Ice Hockey</a></li>
<li><a href="https://rapidapi.com/fluis.lacasse/api/americanfootballapi/" target="_blank">American-Football</a></li>
<li><a href="https://rapidapi.com/fluis.lacasse/api/baseballapi/" target="_blank" >Baseball</a></li>
<li><a href="https://rapidapi.com/fluis.lacasse/api/basketapi1/" target="_blank">Basketball</a></li>
<li><a href="https://rapidapi.com/fluis.lacasse/api/cricketapi21/" target="_blank">Cricket</a></li>
<li><a href="https://rapidapi.com/fluis.lacasse/api/esportapi1/" target="_blank">Esports</a></li>
<li><a href="https://rapidapi.com/fluis.lacasse/api/motorsportapi/" target="_blank">Motorsport</a></li>
<li><a href="https://rapidapi.com/fluis.lacasse/api/rugbyapi2/" target="_blank">Rugby</a></li></ul>
<p>There, you will find the grouped endpoints. The group names can be:</p>
<ul><li>Matches: Provides informations about the matches or schedules. Lineups, Statistics, Incidents, Highlights, Odds are some of the info you will find there.</li>
<li>Teams: Provides informations about the teams. Squads, Statistics, Logo, Transfers are some info you will get there.</li>
<li>Players: Provides informations about the players. Statistics, Image, Transfer History are some info you will get there.</li>
<li>Managers: Provides informations about managers. Career History, Image, Last Matches are some info you will get there.</li></ul>
<p>If you still don’t understand anything or want to request new feature you can contact us.</p>
<h3>Why we don't provide widgets?</h3>
<p>Providing widgets will let the user to know about your API-KEY, which can represent a major security break. Instead of providing widgets we are available to provide you support while you are developing your application. You can contact us to have a free help from our team.</p>
<h3>How to get all leagues of the sport?</h3>
<p>To get all the leagues of the sport, you will need to list all categories first and then list all tournaments inside the category.</p>
<p>The category represents the country/tour/game of the tournaments. To get all categories, you can use the following endpoint: “/api/tournament/categories” for football or “/api/{sport}/tournament/categories” for other sports. With the response you can get all the leagues with the following endpoint: “/api/tournament/all/category/{category_id}” for football or “/api/{sport}/tournament/all/category/{category_id}" for other sports. Additionally, there are the category schedules that shows the events played in certain day for that category alone: “/api/category/{category_id}/events/{day}/{month}/{year}” for football or “/api/{sport}/category/{category_id}/events/{day}/{month}/{year}" for other sports, with the day being integer.</p>
<h3>How to get all teams in a league?</h3>
<p>To get all teams of the league you need to use the standings endpoints.</p>
<h3>Why schedules endpoints returns some matches from previous and next day?</h3>
<p>Answer from this <a href="https://rapidapi.com/fluis.lacasse/api/allsportsapi2/discussions/38225" target="_blank">discussion</a>:</p>
<blockquote cite="https://rapidapi.com/fluis.lacasse/api/allsportsapi2/discussions/38225">In short answer, it’s to provide the matches independently of the user’s timezone. You can filter the matches according to your timezone. If you need help doing so, we can help you.</blockquote>
<p>Long answer(copying from this <a href="https://rapidapi.com/fluis.lacasse/api/footapi7/discussions/33473" target="_blank">discussion</a>)</p>
<blockquote>As you may have noticed, the matches returned by the schedules endpoint have the timestamp according to the time zone gmt/utc+00. So that all time zones are covered, we return matches from 12 hours of the previous day and 12 hours of the next day…</blockquote>
<h3>Not providing the data I'm looking, what can I do?</h3>
<p>I think if this is the case, this API can meet your needs: <a href="https://rapidapi.com/fluis.lacasse/api/allscores/" target="_blank">Allscores</a></p>
<h3>Team Transfer Types</h3>
<h4>Team transfers:</h4>
<ul><li>type 1 - loan</li><li>type 2 - end of loan</li><li>type 3 - bought/sold</li>
</ul>