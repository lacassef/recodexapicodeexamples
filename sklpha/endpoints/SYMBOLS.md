# `SYMBOLS`



## Endpoint: `/api/skalpha/symbol_data`

### Description
This API endpoint facilitates the extraction of comprehensive data associated with specific financial symbols. Users can identify these symbols using their unique "slugs", identifiers associated with each financial symbol. By enumerating multiple slugs separated by commas, users can request data for several symbols concurrently. The fetched data covers a broad spectrum of fields related to the financial symbols, and users can specify the precise fields they intend to include in the response.

### HTTP Method
`GET`

### Parameters

- **slugs** `query`: These unique identifiers, or "slugs", are used to extract data for distinct financial symbols. Each slug corresponds to a specific financial symbol. Users can specify multiple slugs, separated by commas, to retrieve data for multiple symbols simultaneously.

- **fields** `query`: These represent the specific metrics or fields that users wish to be included in the response. Users can enumerate multiple fields, separated by commas. The field options are: movAvg10d, movAvg50d, movAvg100d, movAvg200d, pClose10d, pClose50d, pClose100d, pClose200d, pWeekVolShares, low52, high52, chgp5d, chgp1m, chgp3m, chgp6m, chgp9m, chgpYtd, chgp1y, chgp3y, chgt3y, chgp5y, chgt5y, chgp10y, chgt10y, chgt1m, chgtYtd, chgt1y, roa, avg3vol, divDistribution, dividends.

## Endpoint: `/api/skalpha/metrics`

### Description
This endpoint enables users to fetch a wide array of financial metrics linked to specified financial symbols, identifiable by their unique "slugs". Users have the ability to request data for numerous metrics and symbols concurrently. The fetched metrics offer valuable insights into different facets of a company's financial health, including its performance, valuation, and growth prospects.

### HTTP Method
`GET`

### Parameters

- **fields** `query`: This parameter signifies the specific financial metrics that should be included in the response. Users can select one or multiple metrics, separated by commas. Available metrics include authors_rating_pro, capex_change, cf_op_change_display, diluted_eps_growth, dividend_per_share_change_dislpay, dividend_yield, dps_yoy, ebit_change_display, ebitda_change_display, ebitda_yoy, eps_change_display, eps_ltg, eps_revisions_category, fcf_per_share_change_display, growth_category, levered_free_cash_flow_yoy, marketcap, momentum_category, op_cf_yoy, operating_income_ebit_yoy, profitability_category, quant_rating, revenue_change_display, revenue_growth, roe_change_display, roe_yoy, sell_side_rating, value_category, and working_cap_change.

- **slugs** `query`: These unique identifiers, or "slugs", are used to retrieve data for specific financial symbols. Each slug corresponds to a unique financial symbol. Users can specify multiple slugs, separated by commas, to access data for various symbols simultaneously.

- **minified** `query`: This parameter dictates whether the response should be in a minified format. It accepts a boolean value (true or false). If set to "true", the response will be minified; if "false", the response will be presented in the standard format.

## Endpoint: `/api/skalpha/ticker_metric_grades`

### Description
This API endpoint enables users to retrieve metric grades for specific financial symbols, identifiable by their "slugs". The facility to request data for multiple metric grades and symbols concurrently is provided. The metric grades serve as an evaluation of a variety of financial metrics associated with a company's performance and financial stability.

### HTTP Method
`GET`

### Parameters

- **fields** `query`: This parameter designates the specific metric grades to be included in the response. Users can choose one or more metric grades, separated by commas. The field options include div_yield_category, div_yield_4y, dividend_yield, div_yield_fwd, yld_on_cost_1y, yld_on_cost_3y, yld_on_cost_5y, earnings_yield, earn_yield_gaap_fy1, oper_income_market_cap, oper_income_fy1_market_cap, fcf_yield, fcf_yield_fy1, among others.

- **slugs** `query`: These unique identifiers, or "slugs", are used to request data for specific financial symbols. Each slug corresponds to a unique financial symbol. Multiple slugs, separated by commas, can be specified to request data for various symbols simultaneously.

- **minified** `query`: This parameter determines whether the response should be in a minified format. It takes a boolean value (true or false). If set to "true", the response will be minified; if "false", the response will be provided in the standard format.

- **algos** `query`: This parameter denotes the algorithms utilized to compute the metric grades. Users can select one or more algorithms, separated by commas. Available options include main_quant and dividends.

## Endpoint: `/api/skalpha/symbol_data/estimates`

### Description
This API endpoint permits users to retrieve estimates data for specified financial symbols. The service allows users to request data for multiple estimates data items and ticker IDs concurrently. The estimates data encompasses information pertaining to various financial metrics such as EPS (Earnings Per Share) actuals, EPS consensus mean, revenue actuals, revenue consensus mean, among others. The data is bifurcated into "estimates" and "revisions."

### HTTP Method
`GET`

### Parameters

- **estimates_data_items** `query`: This parameter signifies the specific data items to be included in the response. Users can opt for one or more data items, separated by commas, from a variety of options such as symbol_summary, summary_earnings_history, summary_latest_upcoming_earnings, summary_annual_eps_estimate, summary_annual_revenue_estimate, summary_earnings_history_broad, estimates_annual_summary, estimates_annual_consensus_eps_estimates, estimates_annual_consensus_revenue_estimates, revisions_annual_summary, revisions_annual_consensus_eps_trend, revisions_annual_consensus_revenue_trend, surprises_annual_earnings_eps, surprises_annual_earnings_eps_broad, surprises_annual_revenue, surprises_annual_revenue_broad, revenue_consensus_mean_only, eps_normalized_consensus_mean_quarterly, target_price_w1, target_price_w2, outperform_w4, outperform_w3, and more.

- **period_type** `query`: This parameter represents the type of time period for the data. Users can select either "quarterly" or "annual" as the period type.

- **relative_periods** `query`: This parameter indicates the relative periods for the data. The precise usage of the "relative_periods" parameter is unclear as it is not present in the provided example response.

- **revisions_data_items** `query`: This parameter designates the specific data items related to revisions to be included in the response. Users can select one or more data items, separated by commas, from options such as eps_normalized_consensus_mean, revenue_consensus_mean, and others.

- **ticker_ids** `query`: These are the unique identifiers associated with each financial symbol. Users can specify multiple "ticker_ids", separated by commas, to request data for various symbols simultaneously.

## Endpoint: `/api/skalpha/symbol_data/estimated_earning_announces`

### Description
This API endpoint provides users the ability to fetch estimated earning announcement data for a specific financial symbol, identifiable by its slug. The estimated earning announcement data comprises details regarding the release date and time of the earnings announcement.

### HTTP Method
`GET`

### Parameters

- **slug** `query`: This parameter represents the unique identifier or code associated with the financial symbol for which users aim to retrieve the estimated earning announcement data. For instance, "tgt" is the slug for Target Corporation.

## Endpoint: `/api/skalpha/symbol_data/historical_prices`

### Description
This API endpoint allows users to access historical price data for a specific financial symbol, identified by its ticker slug. Users can request historical prices for a specified date or within a date range, and choose the frequency for data representation (e.g., daily, weekly, or monthly).

### HTTP Method
`GET`

### Parameters

- **ticker_slug** `query`: This parameter is the unique identifier or code associated with the financial symbol for which users intend to retrieve historical price data. For instance, "tgt" is the slug for Target Corporation.

- **for_date** `query` (optional): This parameter allows users to specify a particular date for which they want to retrieve the historical price data. The date must be provided in the "YYYY-MM-DD" format.

- **as_of_date_gte** `query` (optional): This parameter represents the start date of the date range for historical prices. Historical prices will be fetched for dates on or subsequent to this start date. The date must be provided in the "YYYY-MM-DD" format.

- **as_of_date_lte** `query` (optional): This parameter signifies the end date of the date range for historical prices. Historical prices will be fetched for dates on or prior to this end date. The date must be provided in the "YYYY-MM-DD" format.

- **sort** `query` (optional): This parameter indicates the sorting order for the retrieved historical prices. Users can specify the sorting based on "as_of_date" (ascending order of dates).

- **show_by** `query` (optional): This parameter indicates the frequency at which the historical price data should be presented. Users can opt for "day" (daily), "week" (weekly), or "month" (monthly) intervals.

## Endpoint: `/api/skalpha/symbol_data/earnings`

### Description
This API endpoint enables users to obtain earnings data for multiple financial symbols, recognized by their slugs. Users can submit a comma-separated list of slugs, which serve as the unique identifiers or codes for the financial symbols for which they wish to gather earnings data.

### HTTP Method
`GET`

### Parameters

- **slugs** `query`: These are unique identifiers or codes associated with the financial symbols for which users aim to retrieve earnings data. Users can supply multiple slugs in a comma-separated format. For instance: "tgt,dg,dltr,bmrry,mnso,olli".


## Endpoint: `/api/skalpha/charts`

### Description
This API endpoint facilitates users in fetching the chart data for a specific financial symbol. Users need to provide the unique identifier or code of the symbol as a query parameter to get the corresponding chart data. Moreover, users can define the date range for the chart data using the "from" and "to" query parameters, and they can choose the desired time period for the data points with the "period" query parameter.

### HTTP Method
`GET`

### Parameters

- **symbol** `query`: This represents the unique identifier or code linked with the financial symbol for which users wish to fetch the chart data. For instance, "dji" stands for the Dow Jones Industrial Average.

- **to** `query`: The "to" date is the ending date for the chart data and should be provided in the format YYYY-MM-DD. Users can specify this to determine the date until which they want to retrieve the chart data.

- **from** `query`: The "from" date is the starting date for the chart data and should be provided in the format YYYY-MM-DD. Users can specify this to determine the date from which they want to retrieve the chart data.

- **period** `query`: This parameter lets users select the time period for the data points in the chart. Users can choose from the following options: "1D" (1 day), "5D" (5 days), "1M" (1 month), "6M" (6 months), "YTD" (year-to-date), "1Y" (1 year), "3Y" (3 years), "5Y" (5 years), "10Y" (10 years), or "MAX" (maximum available data).

## Endpoint: `/api/skalpha/split_history`

### Description
This API endpoint enables users to fetch the split history for a particular financial symbol. Users need to provide the identifier of the symbol and the identifier type (for example, "Symbol") as query parameters to obtain the split history data. Moreover, users can determine the date range for the split history using the "StartDate" and "EndDate" query parameters.

### HTTP Method
`GET`

### Parameters

- **Identifier** `query`: The "Identifier" signifies the unique identifier or code connected with the financial symbol for which users wish to fetch the split history data. For instance, "tgt" stands for the Target Corporation.

- **IdentifierType** `query`: The "IdentifierType" determines the type of identifier provided. Typically, it's "Symbol" since we're utilizing the financial symbol to identify the company.

- **EndDate** `query`: The "EndDate" is the ending date of the date range for which users wish to retrieve the split history. The date should be formatted as YYYY-MM-DD.

- **IdentifierAsOfDate** `query`: The "IdentifierAsOfDate" allows users to specify a particular date that's relevant to the identifier. It's not specified in the sample request.

- **StartDate** `query`: The "StartDate" is the starting date of the date range for which users wish to retrieve the split history. The date should be formatted as YYYY-MM-DD.

## Endpoint: `/api/skalpha/equity_option_chain`

### Description
This API endpoint allows users to fetch the equity option chain for a particular financial symbol. Users can provide the identifier of the symbol and the identifier type (usually, "Symbol") as query parameters to obtain the option chain data. Furthermore, users can specify the expiration date of the options using the "Month" and "Year" query parameters.

### HTTP Method
`GET`

### Parameters

- **Identifier** `query`: The "Identifier" represents the unique identifier or code associated with the financial symbol for which users want to obtain the equity option chain data. For instance, "tgt" stands for the Target Corporation.

- **IdentifierType** `query`: The "IdentifierType" specifies the type of identifier provided. In this case, it's typically "Symbol" since we're using the financial symbol to identify the company.

- **Month** `query`: The "Month" is the numerical representation of the month for which users wish to fetch the option chain data. For instance, "1" represents January.

- **OptionExchange** `query`: The "OptionExchange" enables users to specify the option exchange for which they want to fetch the option chain data. It's not specified in the sample request.

- **SymbologyType** `query`: The "SymbologyType" enables users to specify the symbology type for the option chain data. It's not specified in the sample request.

- **Year** `query`: The "Year" is the year for which users wish to fetch the option chain data. For example, "2023" represents the year 2023.

## Endpoint: `/api/skalpha/symbols/{symbol}/shares`

### Description
This API endpoint allows users to fetch information about the distribution of shares for a particular financial symbol. Users can provide the financial symbol as a path parameter to obtain the share distribution data.

### HTTP Method
`GET`

### Parameters

- **symbol** `path`: The "symbol" represents the unique financial symbol for which users want to obtain the share distribution data. For instance, "tgt" stands for the Target Corporation.

## Endpoint: `/api/skalpha/symbols/{symbol}/suggested`

### Description
This API endpoint allows users to fetch suggestions related to a specific financial symbol. Users can provide the financial symbol as a path parameter to get suggestions associated with that symbol.

### HTTP Method
`GET`

### Parameters

- **symbol** `path`: The "symbol" represents the unique financial symbol for which users want to obtain the suggestions. For instance, "tgt" stands for the Target Corporation.

## Endpoint: `/api/skalpha/symbols/{symbol}/splits`

### Description
This API endpoint allows users to retrieve information related to the stock splits that have occurred for a specific financial symbol. Users can provide the financial symbol as a path parameter to fetch the split details for that symbol.

### HTTP Method
`GET`

### Parameters

- **symbol** `path`: The "symbol" represents the unique financial symbol for which users want to retrieve the split details. For example, "tgt" stands for the Target Corporation.

## Endpoint: `/api/skalpha/symbols/{symbol}/option_expirations`

### Description
This API endpoint enables users to retrieve a list of option expiration dates for a specific financial symbol. Users provide the financial symbol as a path parameter to fetch the option expiration dates related to that symbol.

### HTTP Method
`GET`

### Parameters

- **symbol** `path`: The "symbol" represents the unique financial symbol for which users want to retrieve the option expiration dates. For example, "TGT" stands for the Target Corporation.

## Endpoint: `/api/skalpha/symbols/{symbol}/peers/etfs/exposure`

### Description
This API endpoint allows users to fetch information about the exposure of a specific equity symbol (financial symbol) to various Exchange-Traded Funds (ETFs) that are considered peers or related to the specified equity symbol. ETFs are investment funds that trade on stock exchanges, much like individual stocks. They usually track the performance of a particular index, sector, or asset class.

### HTTP Method
`GET`

### Parameters

- **symbol** `path`: The "symbol" represents the unique financial symbol for which users want to retrieve the ETF exposure information. For example, "tgt" might denote the equity symbol for Target Corporation.

## Endpoint: `/api/skalpha/symbols/{symbol}/peers/stocks/most_mentioned`

### Description
This API endpoint allows users to fetch the most mentioned peers of a specified financial symbol. It provides data on the stocks that are frequently mentioned in conjunction with the given symbol across various platforms and contexts.

### HTTP Method
`GET`

### Parameters

- **symbol** `path`: The "symbol" represents the unique identifier or code associated with the financial symbol for which users want to fetch information about the most mentioned peers. For example, "AAPL" for Apple Inc.

## Endpoint: `/api/skalpha/symbols/{symbol}/splits`

### Description
This API endpoint allows users to fetch the historical stock split data for a specific financial symbol. A stock split is a corporate action that increases the number of shares of a company by dividing its existing shares into multiple new shares.

### HTTP Method
`GET`

### Parameters

- **symbol** `path`: The symbol is a unique identifier or code associated with the financial symbol for which users wish to retrieve the stock split data. For example, "tgt" represents Target Corporation.

## Endpoint: `/api/skalpha/symbols/{symbol}/peers/stocks/people_follow`

### Description
This API endpoint allows users to fetch a list of financial symbols that are also followed by individuals who follow a specified financial symbol. The input is the symbol of the company of interest. The response contains a list of other companies that are typically followed by people who also follow the company of interest.

### HTTP Method
`GET`

### Parameters

- **symbol** `path`: The symbol represents the unique identifier or code associated with the financial symbol for which users want to retrieve the list of symbols also followed by people. For example, "tgt" represents Target Corporation.

## Endpoint: `/api/skalpha/symbols/{symbol}/dividends/estimates_data`

### Description
This API endpoint allows users to retrieve estimated data about dividends for a specified financial symbol. By providing the symbol of the company in question as a path parameter (for instance, "tgt" for Target Corporation), users can obtain data about anticipated dividends.

### HTTP Method
`GET`

### Parameters

- **symbol** `path`: The symbol represents the unique identifier or code associated with the financial symbol for which users want to retrieve the dividend estimates data. For example, "tgt" represents Target Corporation.

## Endpoint: `/api/skalpha/symbols/{symbol}/dividends/payout_ratio_chart`

### Description
This API endpoint allows users to retrieve the dividend payout ratio chart for a specific financial symbol. The dividend payout ratio is a financial metric that shows the proportion of a company's earnings that are given to shareholders as dividends. This ratio is computed by dividing the dividends per share by the earnings per share.

Users can provide the company's symbol as a path parameter (e.g., "TGT" for Target Corporation) to fetch the dividend payout ratio chart.

### HTTP Method
`GET`

### Parameters

- **symbol** `path`: The symbol represents the unique identifier or code associated with the financial symbol for which users want to retrieve the dividend payout ratio chart. For example, "TGT" represents Target Corporation.

## Endpoint: `/api/skalpha/symbols/{symbol}/dividend_history`

### Description
This API endpoint allows users to retrieve the dividend history for a specific financial symbol. Users can specify the company's symbol as a path parameter (e.g., "tgt" for Target Corporation) and utilize query parameters to customize the returned data. Available query parameters include "group_by", "years", and "sort", allowing users to dictate how the dividend history is structured and displayed.

### HTTP Method
`GET`

### Parameters

- **symbol** `path`: The symbol represents the unique identifier or code associated with the financial symbol for which users want to retrieve the dividend history. For example, "tgt" represents Target Corporation.

- **group_by** `query`: This parameter lets users specify how the dividend history data should be grouped. Available options include: "year" or "month". If "year" is selected, the dividend history will be grouped by year, and if "month" is selected, the dividend history will be grouped by month.

- **years** `query`: This parameter lets users specify the number of years of dividend history they wish to retrieve. For instance, if "years" is set to 5, the API will return the dividend history for the last 5 years.

- **sort** `query`: This parameter allows users to dictate the sorting order of the dividend history data. Users can choose to sort the data in ascending or descending order based on their preference.

## Endpoint: `/api/skalpha/symbols/{symbol}/fundamentals_metrics`

### Description
This API endpoint allows users to retrieve fundamental metrics data for a specific financial symbol. Users specify the company's symbol as a path parameter (e.g., "tgt" for Target Corporation) and use query parameters to define the type of fundamental metrics data they wish to retrieve. Available query parameters include "period_type", "target_currency", and "statement_type" which allow for customization of the returned data.

### HTTP Method
`GET`

### Parameters

- **symbol** `path`: The symbol represents the unique identifier or code associated with the financial symbol for which users want to retrieve the fundamental metrics data. For example, "tgt" represents Target Corporation.

- **period_type** `query`: This parameter allows users to define whether they wish to retrieve quarterly or annual fundamental metrics data. Available options include: "quarterly" or "annual". If "quarterly" is selected, the API will return fundamental metrics data on a quarterly basis, and if "annual" is selected, the API will return fundamental metrics data on an annual basis.

- **target_currency** `query`: This parameter lets users define the currency in which they want to retrieve the fundamental metrics data. For example, users can set "target_currency" to "USD" if they want the data in US dollars.

- **statement_type** `query`: This parameter lets users specify the type of financial statement for which they wish to retrieve fundamental metrics data. Available options include: "income-statement", "balance-sheet", or "cash-flow". For example, if "income-statement" is selected, the API will return fundamental metrics data from the income statement.

## Endpoint: `/api/skalpha/symbols/{symbol}/rating/histories`

### Description
This API endpoint allows users to retrieve rating histories for a specific financial symbol. Users specify the company's symbol as a path parameter (e.g., "tgt" for Target Corporation) and use the "page_number" query parameter to define the page number of the rating histories they wish to retrieve. Considering large datasets, the API returns rating histories in a paginated format.

### HTTP Method
`GET`

### Parameters

- **symbol** `path`: The symbol represents the unique identifier or code associated with the financial symbol for which users want to retrieve the rating histories. For example, "tgt" represents Target Corporation.

- **page_number** `query`: This parameter allows users to define the page number of the rating histories they wish to retrieve. Considering the potentially large volume of data, the API returns rating histories in a paginated format, and users can navigate through the pages using this parameter.

## Endpoint: `/api/skalpha/symbols/{symbol}/transcripts`

### Description
This API endpoint allows users to retrieve a list of transcripts related to a specific financial symbol. Users specify the symbol of the company as a path parameter (e.g., "tgt" for Target Corporation) and use various query parameters to customize and filter the transcript list. Considering large datasets, the API returns the transcript list in a paginated format.

### HTTP Method
`GET`

### Parameters

- **symbol** `path`: The symbol represents the unique identifier or code associated with the financial symbol for which users want to retrieve the transcript list. For example, "tgt" represents Target Corporation.

- **until** `query`: The "until" parameter allows users to specify a timestamp until which they want to retrieve the transcript list. Transcripts published on or before this timestamp will be included in the results.

- **id** `query`: The "id" parameter allows users to filter transcripts based on a specific ID. This parameter can be used to retrieve a specific transcript.

- **isMounting** `query`: The "isMounting" parameter is a boolean value that can be used to filter transcripts based on whether they are mounting or not.

- **include** `query`: The "include" parameter allows users to specify what information they want to include in the transcript list. Users can choose from a list of options, such as "author," "primaryTickers," "secondaryTickers," and "sentiments."

- **page_size** `query`: The "page_size" parameter allows users to specify the number of transcripts to be included on each page of the paginated response. This helps users manage the volume of data returned by each request.

## Endpoint: `/api/skalpha/filings/{id}/pdf`

### Description
This API endpoint allows users to download a specific financial filing as a PDF document. Users need to provide the unique identifier or "id" of the filing as a path parameter to specify which filing they want to download. Additionally, users can use the optional "linksSelf" query parameter to include a self-link in the request.

### HTTP Method
`GET`

### Parameters

- **id** `path`: The "id" parameter represents the unique identifier associated with the financial filing that users want to download as a PDF. Users must provide this identifier (e.g., "16313620") to retrieve the specific filing.

- **linksSelf** `query`: The "linksSelf" parameter is an optional parameter that allows users to include a self-link in the request. This parameter can be used for additional referencing or bookmarking purposes.

## Endpoint: `/api/skalpha/filings/{id}/comment_maps`

### Description
This API endpoint allows users to retrieve comments associated with a specific financial filing. Users need to provide the unique identifier or "id" of the filing as a path parameter to specify which filing they want to access the comments for. Additionally, users can use various query parameters such as "include", "sort", and "linksSelf" to customize the response, including user information in the comments, sorting the comments, and including a self-link in the request.

### HTTP Method
`GET`

### Parameters

- **id** `path`: The "id" parameter represents the unique identifier associated with the financial filing that users want to retrieve the comments for. Users must provide this identifier (e.g., "7156953") to retrieve comments associated with the specific filing.

- **include** `query`: The "include" parameter is optional and allows users to specify what additional information they want included in the response. For example, setting "include=user" indicates that user information will be included in the comments if available.

- **sort** `query`: The "sort" parameter allows users to specify the sorting order of the comments in the response. For instance, setting "sort=-top_parent_id" would sort the comments in descending order based on the top parent ID.

- **linksSelf** `query`: The "linksSelf" parameter is an optional parameter that allows users to include a self-link in the request. This parameter can be used for additional referencing or bookmarking purposes.

## Endpoint: `/api/skalpha/filings/{id}`

### Description
This API endpoint allows users to retrieve information about a specific financial filing associated with a symbol (e.g., stock ticker). Users need to provide the unique identifier or "id" of the filing as a path parameter to specify the particular filing they want to retrieve. The response includes details about the filing, such as its content, description, filing date, and more.

### HTTP Method
`GET`

### Parameters

- **id** `path`: The "id" parameter represents the unique identifier associated with the financial filing that users want to retrieve information for. Users must provide this identifier (e.g., "7156953") to retrieve details associated with the specific filing.

- **include** `query`: The "include" parameter is optional and allows users to specify what additional information they want included in the response. For example, setting "include=ticker" indicates that information about the associated symbol (ticker) will be included in the response if available.

- **linksSelf** `query`: The "linksSelf" parameter is an optional parameter that allows users to include a self-link in the request. This parameter can be used for additional referencing or bookmarking purposes.

## Endpoint: `/api/skalpha/symbols/{symbol}/sec-filings`

### Description
This API endpoint enables users to retrieve a list of SEC (Securities and Exchange Commission) filings related to a specific symbol (for example, a stock ticker). Users provide the symbol as a path parameter to specify the stock ticker for which they want to retrieve SEC filings. The response contains a list of SEC filings associated with the provided symbol, along with additional details for each filing.

### HTTP Method
`GET`

### Parameters

- **symbol** `path`: The "symbol" parameter represents the stock ticker symbol for which users want to retrieve SEC filings. Users must provide the symbol (e.g., "tgt") as the value for this parameter.

- **category** `query`: The "category" parameter is optional and allows users to filter SEC filings by a specific category (e.g., "financials"). Users can specify the category as a string (e.g., "financials") to retrieve filings related to that category.

- **id** `query`: The "id" parameter is optional and may represent the identifier of a specific filing. Users can provide the filing identifier (e.g., "tgt") to retrieve detailed information about a particular filing.

- **isMounting** `query`: The "isMounting" parameter is optional and not explicitly described in the documentation. Its purpose is not specified.

- **include** `query`: The "include" parameter is optional and allows users to specify what additional information they want to include in the response. For example, "include=formType" indicates that the form type of each filing will be included in the response if available.

- **page_size** `query`: The "page_size" parameter is optional and allows users to control the number of results per page in the response. Users can set the page size (e.g., "20") to retrieve a specific number of filings in each response.

- **page_number** `query`: The "page_number" parameter is optional and allows users to specify the page number for pagination. Users can set the page number (e.g., "1") to retrieve filings from a specific page.

## Endpoint: `/api/skalpha/press_releases/{id}`

### Description
This API endpoint enables users to fetch information about a specific press release tied to a given ID. Users supply the "id" as a path parameter to denote the press release they are interested in. The response provides information about the press release, such as its title, content, date of publication, and linked resources.

### HTTP Method
`GET`

### Parameters

- **id** `path`: The "id" parameter represents the identifier of the press release. Users must supply this ID (e.g., "19080055") as the value for this parameter to fetch details about a particular press release.

- **include** `query`: The "include" parameter is optional and lets users define what extra data they want to include in the response. In the given sample response, "include=acquireService,primaryTickers" implies that information about the acquire service and primary tickers related to the press release will be included in the response.

## Endpoint: `/api/skalpha/symbols/{symbol}/press-releases`

### Description
This API endpoint enables users to fetch a list of press releases tied to a specific symbol (e.g., "tgt" for Target Corporation). Users must supply the "symbol" as a path parameter to denote the company or entity for which they are seeking press releases. The response contains a list of press releases, each with details such as title, publication date, and linked resources.

### HTTP Method
`GET`

### Parameters

- **symbol** `path`: The "symbol" parameter denotes the identifier of the company or entity for which press releases are to be fetched. Users must supply this symbol (e.g., "tgt") as the value for this parameter.

- **until** `query`: The "until" parameter is optional and allows users to filter press releases according to a timestamp. Press releases published up until the given timestamp will be included in the response.

- **id** `query`: The "id" parameter is optional and appears to be a duplication of the path parameter "symbol" (generally unnecessary).

- **isMounting** `query`: The "isMounting" parameter is optional, and its purpose is not explicitly detailed in the documentation.

- **include** `query`: The "include" parameter is optional and lets users define what extra data they want to include in the response. In the provided sample response, "include=author,primaryTickers,secondaryTickers,sentiments" implies that details about the press release author, primary tickers, secondary tickers, and sentiments will be included in the response.

- **page_size** `query`: The "page_size" parameter is optional and allows users to define the number of press releases to be included on each page of the response.

## Endpoint: `/api/skalpha/symbols/{symbol}/related-analysis`

### Description
This API endpoint enables users to fetch a list of analyses and articles related to a specific symbol (e.g., "tgt" for Target Corporation). Users must supply the "symbol" as a path parameter to specify the company or entity for which they wish to retrieve the related analyses. The response will contain a list of related analyses, each with details such as title, publication date, author information, and associated links.

### HTTP Method
`GET`

### Parameters

- **symbol** `path`: The "symbol" parameter is the identifier of the company or entity for which related analyses are to be fetched. Users must supply the symbol (e.g., "tgt") as the value for this parameter.

- **until** `query`: The "until" parameter is optional and allows users to filter related analyses based on a timestamp. Analyses published up until the given timestamp will be included in the response.

- **since** `query`: The "since" parameter is optional and allows users to filter related analyses based on a timestamp. Analyses published since the given timestamp will be included in the response.

- **id** `query`: The "id" parameter is optional and seems to be duplicated from the path parameter "symbol" (generally unnecessary).

- **include** `query`: The "include" parameter is optional and allows users to specify what additional information they want included in the response. In the provided sample response, "include=author,primaryTickers,secondaryTickers" implies that information about the analysis author, primary tickers, and secondary tickers will be included in the response.

- **page_size** `query`: The "page_size" parameter is optional and allows users to specify the number of related analyses to be included on each page of the response.

## Endpoint: `/api/skalpha/symbols/{symbol}/faq`

### Description
This API endpoint enables users to fetch a list of Frequently Asked Questions (FAQs) associated with a specific symbol (e.g., "tgt" for Target Corporation). Users must supply the "symbol" as a path parameter to designate the company or entity for which they wish to retrieve the FAQs. The response will contain a list of FAQs, each with a question and its corresponding answer.

### HTTP Method
`GET`

### Parameters

- **symbol** `path`: The "symbol" parameter is the identifier of the company or entity for which FAQs are to be fetched. Users must supply the symbol (e.g., "tgt") as the value for this parameter.

## Endpoint: `/api/skalpha/symbols/{symbol}/news`

### Description
This API endpoint enables users to fetch a list of news articles associated with a particular symbol (e.g., "indu" for Dow Jones Futures). Users must provide the "symbol" as a path parameter to identify the company or entity for which they wish to retrieve news articles. The response will include a list of news articles, each with detailed information such as the article's title, publication date, author, and other relevant data.

### HTTP Method
`GET`

### Parameters

- **symbol** `path`: The "symbol" parameter is the identifier of the company or entity for which news articles are to be retrieved. Users must provide the symbol (e.g., "indu") as the value for this parameter.

- **until** `query`: This optional parameter allows users to filter news articles up to a particular timestamp. Users can provide the timestamp as a string (e.g., "0") to fetch articles published up to that point.

- **since** `query`: This optional parameter enables users to filter news articles from a certain timestamp onwards. Users can provide the timestamp as a string (e.g., "0") to retrieve articles published after that time.

- **category** `query`: This optional parameter allows users to filter news articles by category. Users can specify the category as a string (e.g., "news_card") to fetch articles within that category.

- **id** `query`: This optional parameter serves as an additional identifier. Users can provide the id as a string (e.g., "indu") for more refined filtering.

- **isMounting** `query`: This optional parameter is used for internal purposes or specific functionality.

- **include** `query`: This optional parameter allows users to specify what extra information they want to include in the response. Users can provide a comma-separated string (e.g., "author,primaryTickers,secondaryTickers,sentiments") to include specific data fields.

- **page_size** `query`: This optional parameter allows users to specify the number of news articles to be included in each page of the response. Users can provide the page size as a string (e.g., "12").

- **page_number** `query`: This optional parameter allows users to specify the page number of the results. Users can provide the page number as a string (e.g., "1").

## Endpoint: `/api/skalpha/symbols/{symbol}/analysis`

### Description
This API endpoint enables users to fetch a list of stock analysis articles related to a particular symbol (e.g., "indu" for Dow Jones Futures). Users must provide the "symbol" as a path parameter to identify the company or entity for which they wish to retrieve analysis articles. The response will include a list of analysis articles, each with detailed information such as the article's title, publication date, author, and other relevant data.

### HTTP Method
`GET`

### Parameters

- **symbol** `path`: The "symbol" parameter is the identifier of the company or entity for which analysis articles are to be retrieved. Users must provide the symbol (e.g., "indu") as the value for this parameter.

- **until** `query`: This optional parameter allows users to filter analysis articles up to a particular timestamp. Users can provide the timestamp as a string (e.g., "0") to fetch articles published up to that point.

- **related** `query`: This optional parameter allows users to specify whether they want to return related analysis articles. Users can provide "true" as the value for this parameter to get related analysis articles.

- **id** `query`: This optional parameter serves as an additional identifier. Users can provide the id as a string (e.g., "indu") for more refined filtering.

- **include** `query`: This optional parameter allows users to specify what extra information they want to include in the response. Users can provide a comma-separated string (e.g., "author,primaryTickers,secondaryTickers") to include specific data fields.

- **page_size** `query`: This optional parameter allows users to specify the number of analysis articles to be included in each page of the response. Users can provide the page size as a string (e.g., "10").

- **page_number** `query`: This optional parameter allows users to specify the page number of the results. Users can provide the page number as a string (e.g., "1").

## Endpoint: `/api/skalpha/symbols/{symbol}/rating/periods`

### Description
This API endpoint allows users to retrieve rating periods for a specific symbol (e.g., "tgt" for Target Corporation). Users must specify the "symbol" as a path parameter to indicate the company or entity for which they want to retrieve rating periods. Users can also provide the "periods" as a query parameter, which corresponds to the specific rating periods they're interested in.

### HTTP Method
`GET`

### Parameters

- **symbol** `path`: The "symbol" parameter represents the identifier of the company or entity for which rating periods are to be retrieved. Users must provide the symbol (e.g., "tgt") as the value for this parameter.

- **periods** `query`: The "periods" parameter is optional and allows users to specify the rating periods they are interested in. Users can provide a comma-separated string of periods (e.g., "0,3,6") to fetch ratings for those specific periods.

## Endpoint: `/api/skalpha/symbols/{symbol}`

### Description
This API endpoint allows users to retrieve details about a specific symbol (e.g., "tgt" for Target Corporation). Users must provide the "symbol" as a path parameter to specify the company or entity for which they want to retrieve details.

### HTTP Method
`GET`

### Parameters

- **symbol** `path`: The "symbol" parameter represents the identifier of the company or entity for which details are to be retrieved. Users must provide the symbol (e.g., "tgt") as the value for this parameter.

## Endpoint: `/api/skalpha/symbols/{symbol}/sector_metrics`

### Description
This API endpoint allows users to retrieve sector-specific metrics related to a specific symbol (e.g., "tgt" for Target Corporation). Users must provide the "symbol" as a path parameter to specify the company or entity for which they want to retrieve sector metrics. Additionally, users can specify desired metrics using the "fields" query parameter, which accepts a comma-separated list of metric options. Metrics can include aspects like analysts' ratings, earnings growth, dividend yield, financial ratios, revenue growth, market capitalization, profitability, and more.

### HTTP Method
`GET`

### Parameters

- **symbol** `path`: The "symbol" parameter represents the identifier of the company or entity for which sector metrics are to be retrieved. Users must provide the symbol (e.g., "tgt") as the value for this parameter.

- **fields** `query`: The "fields" parameter is optional and allows users to specify which sector metrics they want to retrieve. Users can provide a comma-separated list of metric options, such as "analysts_up_percent,analysts_down_percent,analysts_up,analysts_down". If not provided, the API may return all available sector metrics.


