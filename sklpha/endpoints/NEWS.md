# `NEWS`

## `/api/skalpha/news`

### Description
This API endpoint allows users to retrieve a list of news articles from Seeking Alpha. The response includes a list of recent news articles related to various financial and market topics. The list is sorted based on the publication date, with the most recent news appearing first.

### HTTP Method
`GET`

### Parameters

- **category** `query`: The "category" parameter specifies the category of news articles to retrieve. The category can be specified using a string value. In the provided example, the category is set to "market-news::all," indicating that the endpoint will return a list of all news articles related to market news.

- **page_size** `query`: The "page_size" parameter determines the number of news articles to be included in each page of the response. The value is specified as a string in the example, and the API may use this parameter to paginate the results.

- **include** `query`: The "include" parameter allows users to specify what additional information they want to include in the response. Users can provide a comma-separated list of values to include various related data.

- **isMounting** `query`: The "isMounting" parameter indicates whether the news articles are currently mounting. The value is specified as a string in the example, but its meaning or usage is not explicitly defined in the provided documentation.

- **until** `query`: The "until" parameter specifies the timestamp until which news articles should be retrieved. The format of the timestamp is not explicitly defined in the documentation.

- **since** `query`: The "since" parameter specifies the timestamp since which news articles should be retrieved. The format of the timestamp is not explicitly defined in the documentation.

- **page_number** `query`: The "page_number" parameter indicates the page number of the news articles list to be retrieved. The value is specified as a string in the example, and the API may use this parameter to navigate through the paginated results.

## `/api/skalpha/news/{id}/read_now_suggestion`

### Description
This API endpoint allows users to get news suggestions related to a specific news article identified by its ID. The API will provide suggestions for other news articles that users may want to read, based on the content or theme of the specified article.

### HTTP Method
`GET`

### Parameters

- **id** `path`: The "id" parameter specifies the ID of the news article for which the API will provide related news suggestions. This parameter is required and should be included in the path of the request.

- **include** `query`: The "include" parameter allows users to specify what additional information they want to include in the response. Users can provide a comma-separated list of values to include various related data.

- **newsLinksSelf** `query`: The "newsLinksSelf" parameter provides a self-link to the news article for which the API is providing suggestions. The self-link is specified as a string and should be included in the query to retrieve relevant suggestions.

## `/api/skalpha/news/{id}/comments`

### Description
This API endpoint allows users to retrieve comments associated with a specific news article, identified by its unique ID. Users can view detailed information related to each comment, such as its content, creation date, number of likes, and user information.

### HTTP Method
`GET`

### Parameters

- **id** `path`: The "id" parameter represents the unique identifier of the news article for which comments are to be retrieved. This parameter is required.

- **include** `query`: The "include" parameter allows users to specify what additional information they want to include in the response. Users can provide a comma-separated list of values to include various related data. For example, "user" can be specified to include information about the authors of the comments.

- **sort** `query`: The "sort" parameter allows users to specify the sorting order of the comments. For example, "-top_parent_id" can be specified to sort the comments in descending order based on the top parent ID.

- **newsLinksSelf** `query`: The "newsLinksSelf" parameter allows users to specify the self-link found in the news list. The purpose and usage of this parameter are not explicitly described in the documentation, and its type is set to "string".

- **comment_ids** `query`: The "comment_ids" parameter allows users to specify a list of comment IDs separated by commas. The API will retrieve comments with the specified IDs.

## `/api/skalpha/news/{id}/comment_maps`

### Description
This API endpoint allows users to retrieve a map of comments associated with a specific news article, identified by its unique ID. The comment map represents the hierarchical structure of comments, indicating the parent-child relationships among them.

### HTTP Method
`GET`

### Parameters

- **id** `path`: The "id" parameter represents the unique identifier of the news article for which the comments map is to be retrieved. This parameter is required.

- **include** `query`: The "include" parameter allows users to specify what additional information they want to include in the response. Users can provide a comma-separated list of values to include various related data. For example, "user" can be specified to include information about the authors of the comments.

- **sort** `query`: The "sort" parameter allows users to specify the sorting order of the comment maps. For example, "-top_parent_id" can be specified to sort the comment maps in descending order based on the top parent ID.

- **linksSelf** `query`: The "linksSelf" parameter allows users to specify the self-link found in the news list. The purpose and usage of this parameter are not explicitly described in the documentation, and its type is set to "string".

## `/api/skalpha/news/{id}`

### Description
This API endpoint allows users to retrieve detailed information about a specific news article, identified by its unique ID. The response includes various attributes of the news article, such as its content, author information, primary and secondary tickers, tags, and more.

### HTTP Method
`GET`

### Parameters

- **id** `path`: The "id" parameter represents the unique identifier of the news article for which detailed information is to be retrieved. This parameter is required.

- **include** `query`: The "include" parameter allows users to specify what additional information they want to include in the response. Users can provide a comma-separated list of values such as "author," "primaryTickers," "secondaryTickers," and "otherTags" to include various related data.

- **linksSelf** `query`: The "linksSelf" parameter allows users to specify the self-link found in the news list. The purpose and usage of this parameter are not explicitly described in the documentation, and its type is set to "string".

## `/api/skalpha/news/trending`

### Description
This API endpoint allows users to retrieve a list of the most trending financial and market news stories on the Seeking Alpha platform. The response provides a sorted list of popular news articles, based on factors such as user engagement, comments, likes, and publication date.

### HTTP Method
`GET`

### Parameters

- **category** `query`: The "category" parameter allows users to specify the category of trending news they want to retrieve. For instance, a category value of "market-news::all" would return a list of all trending news articles related to market news.

- **page_size** `query`: The "page_size" parameter allows users to specify the number of news articles to be included in a single page of the response. This parameter helps in paginating the results.

- **include** `query`: The "include" parameter allows users to specify what additional information they want to include in the response. Users can provide a comma-separated list of values such as "author," "primaryTickers," and "secondaryTickers" to include various related data.

- **only_with_image** `query`: The "only_with_image" parameter enables users to filter the trending news articles to include only those with associated images. If this parameter is used, news articles without images will be excluded from the response.

