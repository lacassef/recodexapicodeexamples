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

<h3>Guidance on Building Your Website or Application with Our API</h3>
<p>Embarking on the journey to develop your website or application using our API? Rest assured, you're not alone. Our team is more than ready to offer their expertise and walk you through the entire process.</p>
<p>If you require support, feel free to reach out to us via the 'About' tab. Whether you're navigating a technical challenge or seeking best-practice advice, we're here to help at no extra cost. Building your digital presence with our API should be a smooth and enriching experience, and we're committed to ensuring just that.</p>
<h3>Availability of Betting Odds through Our API</h3>

<p>Yes, our API does provide odds for your convenience. Apart from motorsport and esports, odds are available for all other sports, primarily sourced from bet365, one of the leading betting companies. These odds are intended for general and referential use.</p>

<p>If you require specialized odds, we recommend considering our odds service, <a href="https://rapidapi.com/fluis.lacasse/api/pinaculo" target="_blank">Pinaculo</a> and <a href="https://rapidapi.com/fluis.lacasse/api/uniodds4" target="_blank">Uniodds</a>. It offers a more detailed and sport-specific array of betting odds to suit your needs.</p>
<h3>Understanding Match Incidents and Status</h3>

<p>The incidents and status of a match can be interpreted using specific attributes and their respective values in the data provided by the API. Here's a detailed explanation:</p>

<h4>Incidents</h4>

<p>Descriptions of incidents can be extracted through the "incidentType", "incidentClass", or "text" attributes. Here's a breakdown of their possible values:</p>

<ul>
  <li><strong>incidentType:</strong> Can be "period", "penaltyShootout", "card", "substitution", "injuryTime", "goal", "varDecision", "inGamePenalty".</li>
  <li><strong>incidentClass:</strong> Various values depending on the incident type, such as:
    <ul>
      <li>For "penaltyShootout": "scored", "missed".</li>
      <li>For "card": "red", "yellow", "yellowRed".</li>
      <li>For "goal": "penalty", "regular", "ownGoal".</li>
      <li>For "substitution": "injury", null.</li>
      <li>For "varDecision": "penaltyNotAwarded", "goalAwarded", "cardUpgrade", with a subsequent 'confirmed' attribute that could be true or false.</li>
      <li>For "inGamePenalty": "missed".</li>
    </ul>
  </li>
  <li><strong>text:</strong> Specific to "period", can be "HT", "FT", "ET", "PEN".</li>
</ul>

<h4>Status</h4>

<p>The status of the match is described using three properties:</p>

<ul>
  <li><strong>code:</strong> An integer representing the specific status of the match. Below are some of the possible codes:
    <ul>
      <li><strong>31</strong>: HT (Halftime)</li>
      <li><strong>32</strong>: AwET (Awaiting Extra Time)</li>
      <li><strong>33</strong>: ETHT (Extra Time Halftime)</li>
      <li><strong>34</strong>: AwP (Awaiting Penalties)</li>
      <li><strong>40</strong>: OT (Overtime)</li>
      <li><strong>41</strong>: ET1 (1st Extra Time Period)</li>
      <li><strong>42</strong>: ET2 (2nd Extra Time Period)</li>
      <li><strong>50</strong>: PEN (Penalties)</li>
      <li><strong>110</strong>: AET (After Extra Time)</li>
      <li><strong>120</strong>: AP (After Penalties)</li>
      <!-- Add more codes as necessary -->
    </ul>
  </li>
  <li><strong>type:</strong> A string representing the general status of the match. Possible values include:
    <ul>
      <li><code>inprogress</code>: The match is currently ongoing.</li>
      <li><code>finished</code>: The match has concluded.</li>
      <li><code>postponed</code>: The match has been postponed.</li>
      <li><code>interrupted</code>: The match was interrupted.</li>
      <li><code>canceled</code>: The match was canceled.</li>
      <li><code>notstarted</code>: The match has not started yet.</li>
      <li><code>preliminary</code>: The match is in a preliminary stage.</li>
      <li><code>suspended</code>: The match has been suspended.</li>
      <li><code>willcontinue</code>: The match will continue at a later time.</li>
      <li><code>delayed</code>: The match start has been delayed.</li>
    </ul>
  </li>
  <li><strong>description:</strong> A detailed text describing the current status of the match. The description varies depending on the sport and specific circumstances. For football, possible descriptions include:
    <ul>
      <li><code>1st half</code>: The first half of the match is in progress.</li>
      <li><code>2nd half</code>: The second half of the match is in progress.</li>
      <li><code>Halftime</code>: The match is at halftime.</li>
      <li><code>Ended</code>: The match has ended.</li>
      <li><code>Postponed</code>: The match has been postponed.</li>
      <li><code>Canceled</code>: The match has been canceled.</li>
      <li><code>Not started</code>: The match has not started yet.</li>
      <li><code>AP</code> (After Penalties): The match concluded after penalties.</li>
      <li><code>AET</code> (After Extra Time): The match concluded after extra time.</li>
      <li><code>1st extra</code>: The first period of extra time.</li>
      <li><code>Extra time halftime</code>: Halftime during extra time.</li>
      <li><code>2nd extra</code>: The second period of extra time.</li>
      <li><code>Awaiting penalties</code>: The match is awaiting penalties.</li>
      <li><code>Penalties</code>: The match is currently in the penalty shootout phase.</li>
      <li><code>Awaiting extra time</code>: The match is awaiting extra time.</li>
      <li><code>First break</code>: First break period.</li>
      <li><code>Second break</code>: Second break period.</li>
      <li><code>Third break</code>: Third break period.</li>
      <li><code>FT</code>: Full Time.</li>
      <!-- Add more descriptions as necessary -->
    </ul>
  </li>
</ul>
<h3>Navigating Our API: Step-by-Step Guidance</h3>

<p>We understand that our comprehensive API, combining data from various sports APIs, might appear complex at first glance. If you're finding it challenging to understand the endpoints, we recommend approaching it one API at a time. Test each one and familiarize yourself with their functionalities. Remember, the structure of the endpoints remains consistent across different hosts.</p>

<p>Here are the individual API links for each sport:</p>

<ul>
  <li><a href="https://rapidapi.com/fluis.lacasse/api/footapi7/" target="_blank">Football/Soccer</a></li>
  <li><a href="https://rapidapi.com/fluis.lacasse/api/tennisapi1/" target="_blank">Tennis</a></li>
  <li><a href="https://rapidapi.com/fluis.lacasse/api/icehockeyapi/" target="_blank">Ice Hockey</a></li>
  <li><a href="https://rapidapi.com/fluis.lacasse/api/americanfootballapi/" target="_blank">American-Football</a></li>
  <li><a href="https://rapidapi.com/fluis.lacasse/api/baseballapi/" target="_blank">Baseball</a></li>
  <li><a href="https://rapidapi.com/fluis.lacasse/api/basketapi1/" target="_blank">Basketball</a></li>
  <li><a href="https://rapidapi.com/fluis.lacasse/api/cricketapi21/" target="_blank">Cricket</a></li>
  <li><a href="https://rapidapi.com/fluis.lacasse/api/esportapi1/" target="_blank">Esports</a></li>
  <li><a href="https://rapidapi.com/fluis.lacasse/api/motorsportapi/" target="_blank">Motorsport</a></li>
  <li><a href="https://rapidapi.com/fluis.lacasse/api/rugbyapi2/" target="_blank">Rugby</a></li>
</ul>

<p>Once you access these individual APIs, you'll notice that the endpoints are grouped into four main categories:</p>

<ul>
  <li><strong>Matches:</strong> This group offers information about matches or schedules, such as Lineups, Statistics, Incidents, Highlights, and Odds.</li>
  <li><strong>Teams:</strong> Here you'll find data about teams, including Squads, Statistics, Logos, and Transfers.</li>
  <li><strong>Players:</strong> Provides information about individual players, including Statistics, Images, and Transfer History.</li>
  <li><strong>Managers:</strong> This section includes data on managers, their Career History, Images, and details of their Last Matches.</li>
</ul>

<p>If you're still encountering difficulties, don't hesitate to reach out to us. We're here to help, and we're also open to suggestions for new features.</p>
<h3>The Reason Behind Not Providing Widgets</h3>
<p>We prioritize the security of our users and take every measure to ensure your data, including your API key, remains confidential. Widgets have the potential to expose your API key to users, creating a significant security risk.</p>
<p>Given this concern, instead of offering widgets, we extend our support to help you during the development phase of your application. Our team is readily available to assist you with any challenges or questions you might have while building your application. This support service is entirely free, and we encourage you to reach out to us anytime you need help.</p>
<h3>How to get all leagues of the sport?</h3>

<p>In order to retrieve all the leagues of a particular sport, it's necessary to list all categories first, and then subsequently list all the tournaments within each category. Here's how:</p>

<ol>
    <li><strong>List all Categories:</strong> Categories essentially represent the country, tour, or game of the tournaments. Start by fetching all categories via the endpoints: <code>/api/tournament/categories</code> for football, or <code>/api/{sport}/tournament/categories</code> for other sports, where <code>{sport}</code> is a placeholder for the sport in question.</li>
    <li><strong>List all Tournaments within each Category:</strong> Upon obtaining a response, you can then proceed to fetch all leagues within each category using the endpoint: <code>/api/tournament/all/category/{category_id}</code> for football, or <code>/api/{sport}/tournament/all/category/{category_id}</code> for other sports, with <code>{category_id}</code> being the ID of a specific category.</li>
    <li><strong>Get Schedules for each Category:</strong> There is an additional functionality that allows you to see events scheduled for a certain day for each category. Use the endpoint: <code>/api/category/{category_id}/events/{day}/{month}/{year}</code> for football, or <code>/api/{sport}/category/{category_id}/events/{day}/{month}/{year}</code> for other sports. Here, <code>{day}</code>, <code>{month}</code>, and <code>{year}</code> are placeholders for the specific day you want to check, with <code>{day}</code> being an integer value.</li>
</ol>

<p>This way, you can obtain a comprehensive list of leagues and their respective events for any sport. If you encounter any issues or need further assistance, our team is always ready to assist you.</p>
<h3>Retrieving All Teams in a League</h3>

<p>For obtaining a comprehensive list of all the teams in a specific league, you'll be using our 'standings' endpoints. The process involves:</p>

<ol>
    <li><strong>Standings Endpoint:</strong> The standings endpoint is the go-to resource for retrieving data about all teams within a particular league. It provides an array of team data including their current standings, wins, losses, draws, goal difference, and more.</li>
</ol>

<p>By calling the standings endpoint, you can acquire a detailed snapshot of the teams participating in your selected league, providing a robust foundation for creating rich, interactive experiences around league data.</p>

<p>Should you encounter any difficulties or need further assistance, please don't hesitate to contact our support team. We're here to ensure your API journey is as smooth as possible!</p>

<h3>Reasons for Schedule Endpoints Returning Matches from Previous and Next Day</h3>

<p>The schedules endpoint is designed to cater to users across various time zones. Thus, to ensure all time zones are covered, we return matches that span 12 hours of the previous day and 12 hours of the next day, relative to GMT/UTC+00. This approach allows us to provide match data that is relevant to users, regardless of their geographical location.</p>

<p>Here's a quick summary from a relevant <a href="https://rapidapi.com/fluis.lacasse/api/allsportsapi2/discussions/38225" target="_blank">discussion</a>:</p>
<blockquote>In short, the endpoint returns matches independent of the user’s timezone. You can filter the matches according to your timezone. If you need help doing so, we can assist you.</blockquote>

<p>For a more detailed explanation, please refer to this <a href="https://rapidapi.com/fluis.lacasse/api/footapi7/discussions/33473" target="_blank">discussion</a>:</p>
<blockquote>The matches returned by the schedules endpoint are timestamped according to the GMT/UTC+00 timezone. Therefore, to cover all time zones, matches from 12 hours of the previous day and 12 hours of the next day are included in the response.</blockquote>

<p>Don't hesitate to reach out if you require any further clarification or assistance in filtering matches according to your specific timezone. Our team is here to help!</p>
<h3>What If the Data I Need Isn't Available?</h3>

<p>If you find that the data you're looking for isn't provided by this API, we suggest exploring another API that may better cater to your requirements. We recommend you to consider checking out the <a href="https://rapidapi.com/fluis.lacasse/api/allscores/" target="_blank">Allscores</a> API. </p>

<p>Always remember, our goal is to support your needs, and we are committed to providing the necessary assistance for your development process. If you still have questions or need further information, please feel free to reach out.</p>
<h3>Understanding Team Transfer Types</h3>

<p>In team transfers, we categorize transfer activities into three types, each representing a different kind of transaction:</p>

<ul>
<li><strong>Type 1:</strong> This represents a loan transfer. In this type of transfer, a player is temporarily moved from their current team to another team for a specified period.</li>

<li><strong>Type 2:</strong> This represents the end of a loan period. At the conclusion of the loan period, the player returns to their original team from the team to which they were loaned.</li>

<li><strong>Type 3:</strong> This type indicates a permanent transfer where a player is bought or sold between teams. The player permanently changes their team affiliation in these transactions.</li>
</ul>

<p>These categories allow you to understand the dynamics of team transfers and the nature of the movement of players between teams.</p>
