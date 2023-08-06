# `ARTICLES`
This category represents endpoints that provides articles that covers a wide range of topics, including individual stock analysis, sector trends, macroeconomic insights, and investment strategies.

## `/api/skalpha/education_top_articles`

### Description
This API endpoint allows users to retrieve a list of top articles focused on education and learning about investing. It provides access to educational content that gives insights and knowledge about investing and various financial topics. The response from the API includes highly regarded articles that have generated significant engagement from the community.

### HTTP Method
`GET`

### Parameters

- **category** `query`: The "category" parameter allows users to specify the category of articles they want to retrieve. In this case, the value for the category should be set to "education" to get a list of top articles related to education and learning about investing.

## `/api/skalpha/articles`

### Description
This API endpoint allows users to retrieve a list of articles from the platform. Users can specify the category of articles they are interested in, such as editors' picks, latest articles, dividends, investing strategies, market outlook, stock ideas, and more. The API response provides detailed information about each article, including its title, publication date, author, tickers associated with the article, comment count, and Getty image URL.

### HTTP Method
`GET`

### Parameters

- **category** `query`: The "category" parameter allows users to specify the category of articles they want to retrieve. It can be set to a variety of values representing different categories such as _"editors-picks", "latest-articles", "dividends", "dividends::dividend-ideas", "dividends::dividend-quick-picks", "dividends::dividend-strategy", "dividends::reits", "education::401k", "education::cryptocurrency", "education::dividends", "education::etf", "education::investing", "education::portfolio-management", "etfs-and-funds", "etfs-and-funds::closed-end-funds", "etfs-and-funds::etf-analysis", "etfs-and-funds::mutual-funds", "investing-strategy", "investing-strategy::fixed-income", "investing-strategy::portfolio-strategy", "investing-strategy::retirement", "market-outlook", "market-outlook::commodities", "market-outlook::cryptocurrency", "market-outlook::economy", "market-outlook::forex", "market-outlook::gold-and-precious-metals", "market-outlook::todays-market", "sectors::communication-services", "sectors::consumer-staples", "sectors::energy", "sectors::real-estate", "stock-ideas", "stock-ideas::basic-materials", "stock-ideas::consumer-goods", "stock-ideas::financial", "stock-ideas::healthcare", "stock-ideas::industrial-goods", "stock-ideas::ipos", "stock-ideas::long-ideas", "stock-ideas::quick-picks", "stock-ideas::technology", "stock-ideas::utilities"_

- **page_size** `query`: The "page_size" parameter allows users to specify the number of articles to retrieve per page. The value should be set to an integer.

- **include** `query`: The "include" parameter allows users to specify what additional information they want to include in the response. Users can set the value to a comma-separated list of options such as "author,primaryTickers,secondaryTickers".

- **isMounting** `query`: The "isMounting" is exclusive to react.

- **until** `query`: The "until" parameter allows users to specify a timestamp in string format. The API will retrieve articles published until the specified timestamp.

- **since** `query`: The "since" parameter allows users to specify a timestamp in string format. The API will retrieve articles published since the specified timestamp.

- **page_number** `query`: The "page_number" parameter allows users to specify the page number of the article list they want to retrieve. The value should be set to an integer, such as "1".

## `/api/skalpha/articles/{id}/comments`

### Description
This API endpoint allows users to retrieve comments associated with a specific article identified by its unique ID. Users can get detailed information about each comment, such as its content, creation date, number of likes, and parent relationship with other comments.

### HTTP Method
`GET`

### Parameters

- **id** `path`: The "id" parameter represents the unique identifier of the article for which comments are to be retrieved. This parameter is required.

- **include** `query`: The "include" parameter allows users to specify what additional information they want to include in the response. Users can set the value to "user" to include information about the authors of the comments.

- **sort** `query`: The "sort" parameter enables users to specify the sorting order of the comments. Users can set the value to "-top_parent_id" to sort the comments in descending order based on the top parent ID.

- **articleLinksSelf** `query`: The "articleLinksSelf" parameter allows users to specify the self-link found in the articles list.

- **comment_ids** `query`: The "comment_ids" parameter enables users to specify a list of comment IDs separated by commas. The API will retrieve comments with the specified IDs.

## `/api/skalpha/articles/{id}/comment_maps`

### Description
This API endpoint allows users to retrieve comment maps associated with a specific article identified by its unique ID. Comment maps represent the hierarchical structure of comments, demonstrating the parent-child relationships between comments.

### HTTP Method
`GET`

### Parameters

- **id** `path`: The "id" parameter represents the unique identifier of the article for which comment maps are to be retrieved. This parameter is required.

- **include** `query`: The "include" parameter allows users to specify what additional information they want to include in the response. Users can set the value to "user" to include information about the authors of the comments.

- **sort** `query`: The "sort" parameter enables users to specify the sorting order of the comment maps. Users can set the value to "-top_parent_id" to sort the comment maps in descending order based on the top parent ID.

- **articleLinksSelf** `query`: The "articleLinksSelf" parameter allows users to specify the self-link found in the articles list.

## `/api/skalpha/articles/{id}`

### Description
This API endpoint allows users to retrieve detailed information about a specific article identified by its unique ID. The response includes various attributes of the article, such as its content, publication status, likes count, author information, themes, disclosure, and more.

### HTTP Method
`GET`

### Parameters

- **id** `path`: The "id" parameter represents the unique identifier of the article for which information is to be retrieved. This parameter is required.

- **include** `query`: The "include" parameter allows users to specify what additional information they want to include in the response. Users can provide a comma-separated list of values to include various related data. The available options are "author," "primaryTickers," "secondaryTickers," "otherTags," "presentations," "presentations.slides," "author.authorResearch," "co_authors," "promotedService," and "sentiments."

- **linksSelf** `query`: The "linksSelf" parameter provides the self-link found in the articles list.

## `/api/skalpha/articles/trending`

### Description
This API endpoint allows users to retrieve a list of trending articles. The response includes a list of articles that are currently popular and gaining attention among users. The list is sorted based on the trending criteria, which may include factors like the number of comments, likes, publication date, and other engagement metrics.

### HTTP Method
`GET`

### Parameters

- **category** `query`: The "category" parameter specifies the category of trending articles to retrieve. The category can be specified using a string value. In the provided example, the category is set to "latest-articles," indicating that the endpoint will return a list of the latest trending articles.

- **include** `query`: The "include" parameter allows users to specify what additional information they want to include in the response. Users can provide a comma-separated list of values to include various related data. In the provided example, the "include" parameter is set to "author," indicating that the response will include information about the authors of the trending articles.

- **until** `query`: The "until" parameter specifies the timestamp until which trending articles should be retrieved. The format of the timestamp is not explicitly defined in the documentation.

- **since** `query`: The "since" parameter specifies the timestamp since which trending articles should be retrieved. The format of the timestamp is not explicitly defined in the documentation.

- **page_size** `query`: The "page_size" parameter determines the number of trending articles to be included in each page of the response. The value is specified as a string in the example, and the API may use this parameter to paginate the results.

- **page_number** `query`: The "page_number" parameter indicates the page number of the trending articles list to be retrieved. The value is specified as a string in the example, and the API may use this parameter to navigate through the paginated results.

