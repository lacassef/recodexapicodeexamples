# `API`
These endpoints don't have category.

## `/api/skalpha/breaking_news`

### Description
This endpoint provides you with breaking news related to the financial markets and economic landscape. Stay abreast of the latest developments and critical events impacting stocks, investment opportunities, and market trends. The news data spans across various topics such as company announcements, economic indicators, mergers and acquisitions, regulatory changes, and other significant events influencing the financial markets. Leveraging this endpoint can provide valuable insights into the dynamic world of economics, enabling you to make informed decisions amidst the fluctuating market landscape.

### HTTP Method
`GET`



## `/api/skalpha/market_open` 

### Description
This endpoint provides real-time information about the current status of the financial markets. A `GET` request to this endpoint yields details on whether the market is currently open or closed. This critical information aids traders, investors, and financial analysts in planning their trading activities and making strategic decisions.

### HTTP Method
`GET`



## `/api/skalpha/global_indices` 

### Description
This endpoint provides information about various global stock market indices. Global indices, representing the performance of specific groups of stocks from different countries, offer insights into the overall health and trends of the global economy. By making a `GET` request to this endpoint, you can retrieve details about different global index categories, including their names and slugs. Furthermore, you have the option to include tickers associated with each index for in-depth analysis and tracking of specific stocks within these indices.

### HTTP Method
`GET`

### Parameters
- **include** `query`: Specify this parameter with the value "tickers" to include ticker data associated with each global index in the response. This enables you to gather information about individual stocks forming part of these indices.



## `/api/skalpha/day_watch`



### Description
This endpoint provides a comprehensive "Day Watch" report that includes information about various market movers and notable financial assets for the current trading day. The data returned by this endpoint covers different categories of stocks, cryptocurrencies, and other financial instruments that have shown significant activity and price changes during the trading session.

### HTTP Method 
`GET`



## `/api/skalpha/dividend_investing`

### Description
This endpoint provides valuable information related to dividend investing. Dividend investing involves selecting and holding stocks or funds that offer regular dividend payments to investors. Dividends are a portion of a company's profits distributed to shareholders, providing a steady income stream in addition to potential capital appreciation.

### HTTP Method 
`GET`



## `/api/skalpha/equities`


### Description
This endpoint allows you to retrieve information about equities. Equities represent ownership shares in companies and are commonly referred to as stocks. The data returned by this endpoint includes details about various equities or exchange-traded funds (ETFs) in different categories related to the US and global equity markets.

### HTTP Method
`GET`

### Parameters
- **category** `query`: The category of equities to retrieve. Possible values are "us-equity-markets," "us-equity-sectors," "us-equity-factors," "global-equity," and "countries-equity." You can use this parameter to filter equities based on specific categories.

## `/api/skalpha/searches`


### Description
This endpoint enables searching for various entities within the economics data, such as people, symbols (e.g., stocks, ETFs, cryptocurrencies), and pages. Users can perform a search using a query string and filter the search results based on type, list, and pagination options.

### HTTP Method 
`GET`

### Parameters

- **query** `query`: The query string used for searching. Users can enter keywords related to the entity they want to find, such as a specific person's name or a symbol.

- **type** `query`: The type of entities to include in the search results. Users can specify one or more types separated by commas, such as "people," "symbols," or "pages."

- **list** `query`: Used to filter symbols in the search results. Users can choose from the following options: "all" (all symbols), "etfs" (ETFs), "stocks" (individual stocks), "mutual_funds" (mutual funds), or "cryptos" (cryptocurrencies).

- **page_size** `query`: The number of search results to include per page. The maximum value allowed is 50.

## `/api/skalpha/feed`

### Description
This endpoint allows users to retrieve feeds related to financial articles and market current updates. Users can customize their feed by specifying various parameters such as "all" (filter string), "include" (what to include in the feed), "any_primary" (primary filter string), "any_tags" (filter tags), "since" (timestamp for content published after a certain date), "after" (timestamp for content published after a certain time), "isMounting" (flag to check if content is mounting), "models" (the model type, i.e., "Article" or "MarketCurrent"), "page_size" (the number of feed items per page), "without" (filter string to exclude), and "page_number" (the page number for pagination).

### HTTP Method
`GET`

### Parameters:

- **linksSelf** `query`: A self-link applicable only when retrieving feeds from authors. It is used to specify the link of the author's feed.

- **all** `query`: The filter string used to narrow down the feeds. For example, users can use an author's name or a specific keyword as the filter string (e.g., "amanda-reaume").

- **include** `query`: Specifies what to include in the feed. Users can choose from the following options: "primaryTickers," "secondaryTickers," "sentiments," and "author." Multiple options can be separated by commas.

- **any_primary** `query`: The primary filter string. It is used to further filter the feeds based on specific primary tags.

- **any_tags** `query`: Filter tags used to refine the feeds based on specific tags.

- **since** `query`: The timestamp used to retrieve feeds with content published after a certain date.

- **after** `query`: The timestamp used to retrieve feeds with content published after a certain time.

- **isMounting** `query`: A flag used to determine if the content is mounting.

- **models** `query`: The model type used for filtering the feed items. It can be set to "Article" or "MarketCurrent." Multiple options can be separated by commas.

- **page_size** `query`: The number of feed items to include per page.

- **without** `query`: The filter string used to exclude certain feed items from the results.

- **page_number** `query`: The page number for pagination.

## `/api/skalpha/real_time_quotes`


### Description
This endpoint allows users to get real-time quotes for financial assets based on their "sa_ids." The "sa_ids" are unique identifier values that are returned from the search endpoint. Users can specify multiple "sa_ids" separated by commas to retrieve real-time quotes for multiple financial assets at once.

### HTTP Method
`GET`

### Parameters

- **sa_ids** `query`: The sa_ids used to request real-time quotes for specific financial assets. These IDs are unique identifiers that are returned from the search endpoint. Users can specify multiple "sa_ids" separated by commas.
