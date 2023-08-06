# `USERS`

## Endpoint: `/api/skalpha/authors/{slug}`

### Description
This API endpoint allows users to retrieve detailed information about a specific author on the Seeking Alpha platform. The information includes the author's biography, associated company, the date they became a contributor, their follower count, image URL, the date they became a member, their nickname, and social media profile URLs.

### HTTP Method
`GET`

### Parameters

- **slug** `path`: The "slug" parameter represents the unique identifier of the author whose information is to be retrieved. For instance, if the slug is "danil-sereda", the endpoint will return information about the author with that slug.

- **include** `query`: The "include" parameter allows users to specify what additional information they want to include in the response. Users can provide a comma-separated list of values such as "authorResearch", "userBioTags", "author_research.author", "authorResearch.plans" to include additional related data.

## Endpoint: `/api/skalpha/top_authors`

### Description
This API endpoint allows users to retrieve a list of top authors on the Seeking Alpha platform who have been classified under specific themes. The authors listed under each theme are considered to be the top contributors in their respective categories. The information about these authors can be accessed by users through this endpoint.

### HTTP Method
`GET`

### Parameters
This endpoint does not require any parameters in the request URL. The API returns a list of top authors for each theme without requiring any specific input from the user.

## Endpoint: `/api/skalpha/users/{id}/followings`

### Description
This API endpoint allows users to retrieve a list of other users that the specified user (with the given ID) is following on the Seeking Alpha platform. This list includes information about each of the followed users, such as their nicknames, profile images, follower counts, followings counts, and any author badges they might have.

### HTTP Method
`GET`

### Parameters
- "id" (path parameter, required): The "id" parameter specifies the ID of the user for whom the API will retrieve the list of users they are following. This parameter should be included in the path of the request.

### Query Parameters
- "page_number" (optional): The "page_number" parameter allows users to navigate through the pages of the list of users that the specified user is following. The API uses this parameter to paginate the results.

- "page_size" (optional): The "page_size" parameter specifies the number of users that the specified user is following to be included on each page of the response.

- "linksSelf" (optional): The "linksSelf" parameter provides a self-link to the specified user's list of users they are following. If available, the self-link should be included in the query.


## Endpoint: `/api/skalpha/users/{id}/followers`

### Description
This API endpoint allows users to retrieve a list of followers for a specified user (with the given ID) on the Seeking Alpha platform. This list provides details about each follower, such as their nicknames, the number of people they are following and followers they have, and any author badges they may possess.

### HTTP Method
`GET`

### Parameters
- "id" (path parameter, required): The "id" parameter specifies the ID of the user for whom the API will retrieve the list of followers. This parameter should be included in the path of the request.

### Query Parameters
- "page_number" (optional): The "page_number" parameter allows users to navigate through the pages of the list of followers of the specified user. The API uses this parameter to paginate the results.

- "page_size" (optional): The "page_size" parameter specifies the number of followers of the specified user to be included on each page of the response.

- "linksSelf" (optional): The "linksSelf" parameter provides a self-link to the specified user's list of followers. If available, the self-link should be included in the query.

## Endpoint: `/api/skalpha/users/{id}`

### Description
This endpoint allows users to retrieve comprehensive information about a specific user on the Seeking Alpha platform. The information returned includes a broad range of user details, such as their bio, company, statistics, email auto-login status, profile images, preferences, member since date, editor status, nickname, portfolio warnings, user ID, and vocation.

### HTTP Method
`GET`

### Parameters
- "id" (path parameter, required): The "id" parameter specifies the ID of the user for whom the API will retrieve detailed information. This parameter is required and should be provided in the path of the request.

### Query Parameters
- "include" (optional): The "include" parameter allows users to specify what additional information they want to include in the response. Users can provide a comma-separated list of values to include various related data. For example, "include=author" will include information about the author's published articles. If this information does not exist for the specified user, the value will be null.

