# `SYMBOLS`
This category represents endpoints that interact with data related to financial instrument symbols. These symbols, often called ticker symbols, are unique identifiers assigned to a security such as a stock, bond, ETF, or mutual fund.
Endpoints under this tag provide functionality for querying information related to these symbols, which can include but are not limited to: company names, current and historical prices, trading volumes, market capitalizations, and other associated financial data.



## `/api/skalpha/symbol_data`

### Description
This API endpoint facilitates the extraction of comprehensive data associated with specific financial symbols. Users can identify these symbols using their unique "slugs", identifiers associated with each financial symbol. By enumerating multiple slugs separated by commas, users can request data for several symbols concurrently. The fetched data covers a broad spectrum of fields related to the financial symbols, and users can specify the precise fields they intend to include in the response.

### HTTP Method
`GET`

### Parameters

- **slugs** `query`: These unique identifiers, or "slugs", are used to extract data for distinct financial symbols. Each slug corresponds to a specific financial symbol. Users can specify multiple slugs, separated by commas, to retrieve data for multiple symbols simultaneously.

- **fields** `query`: These represent the specific metrics or fields that users wish to be included in the response. Users can enumerate multiple fields, separated by commas. The field options are: _movAvg10d, movAvg50d, movAvg100d, movAvg200d, pClose10d, pClose50d, pClose100d, pClose200d, pWeekVolShares, low52, high52, chgp5d, chgp1m, chgp3m, chgp6m, chgp9m, chgpYtd, chgp1y, chgp3y, chgt3y, chgp5y, chgt5y, chgp10y, chgt10y, chgt1m, chgtYtd, chgt1y, roa, avg3vol, divDistribution, dividends_.

## `/api/skalpha/metrics`

### Description
This endpoint enables users to fetch a wide array of financial metrics linked to specified financial symbols, identifiable by their unique "slugs". Users have the ability to request data for numerous metrics and symbols concurrently. The fetched metrics offer valuable insights into different facets of a company's financial health, including its performance, valuation, and growth prospects.

### HTTP Method
`GET`

### Parameters

- **fields** `query`: This parameter signifies the specific financial metrics that should be included in the response. Users can select one or multiple metrics, separated by commas. Available metrics include: _authors_rating_pro, capex_change, cf_op_change_display, diluted_eps_growth, dividend_per_share_change_dislpay, dividend_yield, dps_yoy, ebit_change_display, ebitda_change_display, ebitda_yoy, eps_change_display, eps_ltg, eps_revisions_category, fcf_per_share_change_display, growth_category, levered_free_cash_flow_yoy, marketcap, momentum_category, op_cf_yoy, operating_income_ebit_yoy, profitability_category, quant_rating, revenue_change_display, revenue_growth, roe_change_display, roe_yoy, sell_side_rating, value_category, working_cap_change_.

- **slugs** `query`: These unique identifiers, or "slugs", are used to retrieve data for specific financial symbols. Each slug corresponds to a unique financial symbol. Users can specify multiple slugs, separated by commas, to access data for various symbols simultaneously.

- **minified** `query`: This parameter dictates whether the response should be in a minified format. It accepts a boolean value (true or false). If set to "true", the response will be minified; if "false", the response will be presented in the standard format.

## `/api/skalpha/ticker_metric_grades`

### Description
This API endpoint enables users to retrieve metric grades for specific financial symbols, identifiable by their "slugs". The facility to request data for multiple metric grades and symbols concurrently is provided. The metric grades serve as an evaluation of a variety of financial metrics associated with a company's performance and financial stability.

### HTTP Method
`GET`

### Parameters

- **fields** `query`: This parameter designates the specific metric grades to be included in the response. Users can choose one or more metric grades, separated by commas. The field options include: _altman_z_score, analysts_down_avg_5y, analysts_down_percent_avg_5y, analysts_up_avg_5y, analysts_up_percent_avg_5y, assets_turnover, authors_rating_pro, beta24, capex_change, capex_change_avg_5y, capex_to_sales, cash_from_operations_as_reported, cf_op_change_display, cf_op_change_display_avg_5y, common_equity_10y, common_equity_3y, common_equity_5y, common_equity_yoy, diluted_eps_growth, diluted_eps_growth_avg_5y, dilutedEps10y, dilutedEps3y, dilutedEps5y, dilutedEpsGrowth, div_grow_rate3, div_grow_rate5, div_pay_date, div_rate_fwd, div_rate_ttm, div_yield_fwd, dividend_growth, dividend_per_share_change_dislpay, dividend_per_share_change_dislpay_avg_5y, dividend_yield, dps_yoy, dps_yoy_avg_5y, earningsGrowth, earningsGrowth10y, earningsGrowth3, earningsGrowth5y, ebit_change_display, ebit_change_display_avg_5y, ebit_margin, ebitda_10y, ebitda_3y, ebitda_5y, ebitda_change_display, ebitda_change_display_avg_5y, ebitda_margin, ebitda_yoy, ebitda_yoy_avg_5y, ebitdaYoy, eps_change_display, eps_change_display_avg_5y, eps_ltg, eps_ltg_avg_5y, eps_revisions_category, ev_12m_sales_ratio, ev_ebitda, fcf_per_share_change_display, fcf_per_share_change_display_avg_5y, gross_loans_10y, gross_loans_3y, gross_loans_5y, gross_loans_yoy, gross_margin, growth_category, impliedmarketcap, last_div_date, last_price_vs_sma_10d, last_price_vs_sma_200d, last_price_vs_sma_50d, levered_fcf_margin, levered_free_cash_flow_yoy, levered_free_cash_flow_yoy_avg_5y, leveredFreeCashFlow10y, leveredFreeCashFlow3y, leveredFreeCashFlow5y, leveredFreeCashFlowYoy, marketcap, marketcap_display, momentum_category, net_eps, net_inc_per_employee, net_income, net_interest_income_10y, net_interest_income_3y, net_interest_income_5y, net_interest_income_yoy, net_margin, netIncome10y, netIncome3y, netIncome5y, netIncomeYoy, normalizedNetIncome10y, normalizedNetIncome3y, normalizedNetIncome5y, normalizedNetIncomeYoy, op_cf_yoy, op_cf_yoy_avg_5y, operating_income_ebit_yoy, operating_income_ebit_yoy_avg_5y, operatingIncomeEbit10y, operatingIncomeEbit3y, operatingIncomeEbit5y, operatingIncomeEbitYoy, payout_ratio, pb_ratio, pe_nongaap_fy1, pe_ratio, price_cf_ratio, price_high_52w, price_low_52w, profitability_category, quant_rating, return_on_avg_tot_assets, return_on_total_capital, revenue_change_display, revenue_change_display_avg_5y, revenue_growth, revenue_growth_avg_5y, revenue_growth3, revenue_growth5, revenueGrowth10, roe, roe_change_display, roe_change_display_avg_5y, roe_yoy, roe_yoy_avg_5y, rtn_on_common_equity, sell_side_rating, shares, short_interest_percent_of_float, sma_10d, sma_200d, sma_50d, tangible_book_per_share, tangibleBookValue10y, tangibleBookValue3y, tangibleBookValue5y, tangibleBookValueYoy, tev, total_cash, total_debt, total_revenue, totalAssets10y, totalAssets3y, totalAssets5y, totalAssetsYoy, value_category, working_cap_change, working_cap_change_avg_5y_

- **slugs** `query`: These unique identifiers, or "slugs", are used to request data for specific financial symbols. Each slug corresponds to a unique financial symbol. Multiple slugs, separated by commas, can be specified to request data for various symbols simultaneously.

- **minified** `query`: This parameter determines whether the response should be in a minified format. It takes a boolean value (true or false). If set to "true", the response will be minified; if "false", the response will be provided in the standard format.

- **algos** `query`: This parameter denotes the algorithms utilized to compute the metric grades. Users can select one or more algorithms, separated by commas. Available options include: _main_quant, dividends_.

## `/api/skalpha/symbol_data/estimates`

### Description
This API endpoint permits users to retrieve estimates data for specified financial symbols. The service allows users to request data for multiple estimates data items and ticker IDs concurrently. The estimates data encompasses information pertaining to various financial metrics such as _EPS (Earnings Per Share) actuals, EPS consensus mean, revenue actuals, revenue consensus mean, among others_. The data is bifurcated into "estimates" and "revisions."

### HTTP Method
`GET`

### Parameters

- **estimates_data_items** `query`: This parameter signifies the specific data items to be included in the response. Users can opt for one or more data items, separated by commas, from a variety of options such as _symbol_summary,summary_earnings_history,summary_latest_upcoming_earnings,summary_annual_eps_estimate,summary_annual_revenue_estimate,summary_earnings_history_broad,estimates_annual_summary,estimates_annual_consensus_eps_estimates,estimates_annual_consensus_revenue_estimates,revisions_annual_summary,revisions_annual_consensus_eps_trend,revisions_annual_consensus_revenue_trend,surprises_annual_earnings_eps,surprises_annual_earnings_eps_broad,surprises_annual_revenue,surprises_annual_revenue_broad,revenue_consensus_mean_only,eps_normalized_consensus_mean_quarterly,target_price_w1,target_price_w2,outperform_w4,outperform_w3_.

- **period_type** `query`: This parameter represents the type of time period for the data. Users can select either "quarterly" or "annual" as the period type.

- **relative_periods** `query`: This parameter indicates the relative periods for the data.

- **revisions_data_items** `query`: This parameter designates the specific data items related to revisions to be included in the response. Users can select one or more data items, separated by commas, from options such as _symbol_summary,summary_earnings_history,summary_latest_upcoming_earnings,summary_annual_eps_estimate,summary_annual_revenue_estimate,summary_earnings_history_broad,estimates_annual_summary,estimates_annual_consensus_eps_estimates,estimates_annual_consensus_revenue_estimates,revisions_annual_summary,revisions_annual_consensus_eps_trend,revisions_annual_consensus_revenue_trend,surprises_annual_earnings_eps,surprises_annual_earnings_eps_broad,surprises_annual_revenue,surprises_annual_revenue_broad,revenue_consensus_mean_only,eps_normalized_consensus_mean_quarterly,target_price_w1,target_price_w2,outperform_w4,outperform_w3_.

- **ticker_ids** `query`: These are the unique identifiers associated with each financial symbol. Users can specify multiple "ticker_ids", separated by commas, to request data for various symbols simultaneously.

## `/api/skalpha/symbol_data/estimated_earning_announces`

### Description
This API endpoint provides users the ability to fetch estimated earning announcement data for a specific financial symbol, identifiable by its slug. The estimated earning announcement data comprises details regarding the release date and time of the earnings announcement.

### HTTP Method
`GET`

### Parameters

- **slug** `query`: This parameter represents the unique identifier or code associated with the financial symbol for which users aim to retrieve the estimated earning announcement data.

## `/api/skalpha/symbol_data/historical_prices`

### Description
This API endpoint allows users to access historical price data for a specific financial symbol, identified by its ticker slug. Users can request historical prices for a specified date or within a date range, and choose the frequency for data representation (e.g., daily, weekly, or monthly).

### HTTP Method
`GET`

### Parameters

- **ticker_slug** `query`: This parameter is the unique identifier or code associated with the financial symbol for which users intend to retrieve historical price data.

- **for_date** `query`: This parameter allows users to specify a particular date for which they want to retrieve the historical price data. The date must be provided in the "YYYY-MM-DD" format.

- **as_of_date_gte** `query`: This parameter represents the start date of the date range for historical prices. Historical prices will be fetched for dates on or after this start date. The date must be provided in the "YYYY-MM-DD" format.

- **as_of_date_lte** `query`: This parameter signifies the end date of the date range for historical prices. Historical prices will be fetched for dates on or prior to this end date. The date must be provided in the "YYYY-MM-DD" format.

- **sort** `query`: This parameter indicates the sorting order for the retrieved historical prices. Users can specify the sorting based on "as_of_date" (ascending order of dates).

- **show_by** `query`: This parameter indicates the frequency at which the historical price data should be presented. Users can opt for "day" (daily), "week" (weekly), or "month" (monthly) intervals.

## `/api/skalpha/symbol_data/earnings`

### Description
This API endpoint enables users to obtain earnings data for multiple financial symbols, recognized by their slugs. Users can submit a comma-separated list of slugs, which serve as the unique identifiers or codes for the financial symbols for which they wish to gather earnings data.

### HTTP Method
`GET`

### Parameters

- **slugs** `query`: These are unique identifiers or codes associated with the financial symbols for which users aim to retrieve earnings data. Users can supply multiple slugs in a comma-separated format.


## `/api/skalpha/charts`

### Description
This API endpoint facilitates users in fetching the chart data for a specific financial symbol. Users need to provide the unique identifier or code of the symbol as a query parameter to get the corresponding chart data. Moreover, users can define the date range for the chart data using the "from" and "to" query parameters, and they can choose the desired time period for the data points with the "period" query parameter.

### HTTP Method
`GET`

### Parameters

- **symbol** `query`: This represents the unique identifier or code linked with the financial symbol for which users wish to fetch the chart data.

- **to** `query`: The "to" date is the ending date for the chart data and should be provided in the format YYYY-MM-DD. Users can specify this to determine the date until which they want to retrieve the chart data.

- **from** `query`: The "from" date is the starting date for the chart data and should be provided in the format YYYY-MM-DD. Users can specify this to determine the date from which they want to retrieve the chart data.

- **period** `query`: This parameter lets users select the time period for the data points in the chart. Users can choose from the following options: "1D" (1 day), "5D" (5 days), "1M" (1 month), "6M" (6 months), "YTD" (year-to-date), "1Y" (1 year), "3Y" (3 years), "5Y" (5 years), "10Y" (10 years), or "MAX" (maximum available data).

## `/api/skalpha/split_history`

### Description
This API endpoint enables users to fetch the split history for a particular financial symbol. Users need to provide the identifier of the symbol and the identifier type (for example, "Symbol") as query parameters to obtain the split history data. Moreover, users can determine the date range for the split history using the "StartDate" and "EndDate" query parameters.

### HTTP Method
`GET`

### Parameters

- **Identifier** `query`: The "Identifier" signifies the unique identifier or code connected with the financial symbol for which users wish to fetch the split history data.

- **IdentifierType** `query`: The "IdentifierType" determines the type of identifier provided. Typically, it's "Symbol" since we're utilizing the financial symbol to identify the company.

- **EndDate** `query`: The "EndDate" is the ending date of the date range for which users wish to retrieve the split history. The date should be formatted as YYYY-MM-DD.

- **IdentifierAsOfDate** `query`: The "IdentifierAsOfDate" allows users to specify a particular date that's relevant to the identifier.

- **StartDate** `query`: The "StartDate" is the starting date of the date range for which users wish to retrieve the split history. The date should be formatted as YYYY-MM-DD.

## `/api/skalpha/equity_option_chain`

### Description
This API endpoint allows users to fetch the equity option chain for a particular financial symbol. Users can provide the identifier of the symbol and the identifier type (usually, "Symbol") as query parameters to obtain the option chain data. Furthermore, users can specify the expiration date of the options using the "Month" and "Year" query parameters.

### HTTP Method
`GET`

### Parameters

- **Identifier** `query`: The "Identifier" represents the unique identifier or code associated with the financial symbol for which users want to obtain the equity option chain data.

- **IdentifierType** `query`: The "IdentifierType" specifies the type of identifier provided. In this case, it's typically "Symbol" since we're using the financial symbol to identify the company.

- **Month** `query`: The "Month" is the numerical representation of the month for which users wish to fetch the option chain data. For instance, "1" represents January.

- **OptionExchange** `query`: The "OptionExchange" enables users to specify the option exchange for which they want to fetch the option chain data.

- **SymbologyType** `query`: The "SymbologyType" enables users to specify the symbology type for the option chain data.

- **Year** `query`: The "Year" is the year for which users wish to fetch the option chain data. For example, "2023" represents the year 2023.

## `/api/skalpha/symbols/{symbol}/shares`

### Description
This API endpoint allows users to fetch information about the distribution of shares for a particular financial symbol. Users can provide the financial symbol as a path parameter to obtain the share distribution data.

### HTTP Method
`GET`

### Parameters

- **symbol** `path`: The "symbol" represents the unique financial symbol for which users want to obtain the share distribution data.

## `/api/skalpha/symbols/{symbol}/suggested`

### Description
This API endpoint allows users to fetch suggestions related to a specific financial symbol. Users can provide the financial symbol as a path parameter to get suggestions associated with that symbol.

### HTTP Method
`GET`

### Parameters

- **symbol** `path`: The "symbol" represents the unique financial symbol for which users want to obtain the suggestions.

## `/api/skalpha/symbols/{symbol}/splits`

### Description
This API endpoint allows users to retrieve information related to the stock splits that have occurred for a specific financial symbol. Users can provide the financial symbol as a path parameter to fetch the split details for that symbol.

### HTTP Method
`GET`

### Parameters

- **symbol** `path`: The "symbol" represents the unique financial symbol for which users want to retrieve the split details. 

## `/api/skalpha/symbols/{symbol}/option_expirations`

### Description
This API endpoint enables users to retrieve a list of option expiration dates for a specific financial symbol. Users provide the financial symbol as a path parameter to fetch the option expiration dates related to that symbol.

### HTTP Method
`GET`

### Parameters

- **symbol** `path`: The "symbol" represents the unique financial symbol for which users want to retrieve the option expiration dates. 

## `/api/skalpha/symbols/{symbol}/peers/etfs/exposure`

### Description
This API endpoint allows users to fetch information about the exposure of a specific equity symbol (financial symbol) to various Exchange-Traded Funds (ETFs) that are considered peers or related to the specified equity symbol. ETFs are investment funds that trade on stock exchanges, much like individual stocks. They usually track the performance of a particular index, sector, or asset class.

### HTTP Method
`GET`

### Parameters

- **symbol** `path`: The "symbol" represents the unique financial symbol for which users want to retrieve the ETF exposure information.

## `/api/skalpha/symbols/{symbol}/peers/stocks/most_mentioned`

### Description
This API endpoint allows users to fetch the most mentioned peers of a specified financial symbol. It provides data on the stocks that are frequently mentioned in conjunction with the given symbol across various platforms and contexts.

### HTTP Method
`GET`

### Parameters

- **symbol** `path`: The "symbol" represents the unique identifier or code associated with the financial symbol for which users want to fetch information about the most mentioned peers.

## `/api/skalpha/symbols/{symbol}/splits`

### Description
This API endpoint allows users to fetch the historical stock split data for a specific financial symbol. A stock split is a corporate action that increases the number of shares of a company by dividing its existing shares into multiple new shares.

### HTTP Method
`GET`

### Parameters

- **symbol** `path`: The symbol is a unique identifier or code associated with the financial symbol for which users wish to retrieve the stock split data.

## `/api/skalpha/symbols/{symbol}/peers/stocks/people_follow`

### Description
This API endpoint allows users to fetch a list of financial symbols that are also followed by individuals who follow a specified financial symbol. The input is the symbol of the company of interest. The response contains a list of other companies that are typically followed by people who also follow the company of interest.

### HTTP Method
`GET`

### Parameters

- **symbol** `path`: The symbol represents the unique identifier or code associated with the financial symbol for which users want to retrieve the list of symbols also followed by people.

## `/api/skalpha/symbols/{symbol}/dividends/estimates_data`

### Description
This API endpoint allows users to retrieve estimated data about dividends for a specified financial symbol. By providing the symbol of the company in question as a path parameter, users can obtain data about anticipated dividends.

### HTTP Method
`GET`

### Parameters

- **symbol** `path`: The symbol represents the unique identifier or code associated with the financial symbol for which users want to retrieve the dividend estimates data.

## `/api/skalpha/symbols/{symbol}/dividends/payout_ratio_chart`

### Description
This API endpoint allows users to retrieve the dividend payout ratio chart for a specific financial symbol. The dividend payout ratio is a financial metric that shows the proportion of a company's earnings that are given to shareholders as dividends. This ratio is computed by dividing the dividends per share by the earnings per share.
Users can provide the company's symbol as a path parameter to fetch the dividend payout ratio chart.

### HTTP Method
`GET`

### Parameters

- **symbol** `path`: The symbol represents the unique identifier or code associated with the financial symbol for which users want to retrieve the dividend payout ratio chart.

## `/api/skalpha/symbols/{symbol}/dividend_history`

### Description
This API endpoint allows users to retrieve the dividend history for a specific financial symbol. Users can specify the company's symbol as a path parameter and utilize query parameters to customize the returned data.

### HTTP Method
`GET`

### Parameters

- **symbol** `path`: The symbol represents the unique identifier or code associated with the financial symbol for which users want to retrieve the dividend history.

- **group_by** `query`: This parameter lets users specify how the dividend history data should be grouped. Available options include: "year" or "month". If "year" is selected, the dividend history will be grouped by year, and if "month" is selected, the dividend history will be grouped by month.

- **years** `query`: This parameter lets users specify the number of years of dividend history they wish to retrieve. For instance, if "years" is set to 5, the API will return the dividend history for the last 5 years.

- **sort** `query`: This parameter allows users to dictate the sorting order of the dividend history data.

## `/api/skalpha/symbols/{symbol}/fundamentals_metrics`

### Description
This API endpoint allows users to retrieve fundamental metrics data for a specific financial symbol. Users specify the company's symbol as a path parameter and use query parameters to define the type of fundamental metrics data they wish to retrieve.

### HTTP Method
`GET`

### Parameters

- **symbol** `path`: The symbol represents the unique identifier or code associated with the financial symbol for which users want to retrieve the fundamental metrics data.

- **period_type** `query`: This parameter allows users to define whether they wish to retrieve quarterly or annual fundamental metrics data. Available options include: "quarterly" or "annual". If "quarterly" is selected, the API will return fundamental metrics data on a quarterly basis, and if "annual" is selected, the API will return fundamental metrics data on an annual basis.

- **target_currency** `query`: This parameter lets users define the currency in which they want to retrieve the fundamental metrics data.

- **statement_type** `query`: This parameter lets users specify the type of financial statement for which they wish to retrieve fundamental metrics data. Available options include: "income-statement", "balance-sheet", or "cash-flow". For example, if "income-statement" is selected, the API will return fundamental metrics data from the income statement.

## `/api/skalpha/symbols/{symbol}/rating/histories`

### Description
This API endpoint allows users to retrieve rating histories for a specific financial symbol. Users specify the company's symbol as a path parameter and use the "page_number" query parameter to define the page number of the rating histories they wish to retrieve. Considering large datasets, the API returns rating histories in a paginated fashion.

### HTTP Method
`GET`

### Parameters

- **symbol** `path`: The symbol represents the unique identifier or code associated with the financial symbol for which users want to retrieve the rating histories.

- **page_number** `query`: This parameter allows users to define the page number of the rating histories they wish to retrieve. Considering the potentially large volume of data, the API returns rating histories in a paginated format, and users can navigate through the pages using this parameter.

## `/api/skalpha/symbols/{symbol}/transcripts`

### Description
This API endpoint allows users to retrieve a list of transcripts related to a specific financial symbol. Users specify the symbol of the company as a path parameter and use various query parameters to customize and filter the transcript list. Considering large datasets, the API returns the transcript list in a paginated format.

### HTTP Method
`GET`

### Parameters

- **symbol** `path`: The symbol represents the unique identifier or code associated with the financial symbol for which users want to retrieve the transcript list. 

- **until** `query`: The "until" parameter allows users to specify a timestamp until which they want to retrieve the transcript list. Transcripts published on or before this timestamp will be included in the results.

- **id** `query`: The symbol "id" parameter. Most of the time is the symbol repeated here.

- **isMounting** `query`: The "isMounting" parameter is specific to react. Just let it be false.

- **include** `query`: The "include" parameter allows users to specify what information they want to include in the transcript list. Users can choose from a list of options, such as "author," "primaryTickers," "secondaryTickers," and "sentiments."

- **page_size** `query`: The "page_size" parameter allows users to specify the number of transcripts to be included on each page of the paginated response. This helps users manage the volume of data returned by each request.

## `/api/skalpha/filings/{id}/pdf`

### Description
This API endpoint allows users to download a specific financial filing as a PDF document. Users need to provide the unique identifier or "id" of the filing as a path parameter to specify which filing they want to download. Additionally, users can use the "linksSelf" query parameter to include a self-link in the request.

### HTTP Method
`GET`

### Parameters

- **id** `path`: The "id" parameter represents the unique identifier associated with the financial filing that users want to download as a PDF. Users must provide this identifier to retrieve the specific filing.

- **linksSelf** `query`: The "linksSelf" parameter is an parameter that allows users to include a self-link in the request. This parameter can be used for additional referencing.

## `/api/skalpha/filings/{id}/comment_maps`

### Description
This API endpoint allows users to retrieve comments associated with a specific financial filing. Users need to provide the unique identifier or "id" of the filing as a path parameter to specify which filing they want to access the comments for.

### HTTP Method
`GET`

### Parameters

- **id** `path`: The "id" parameter represents the unique identifier associated with the financial filing that users want to retrieve the comments for. Users must provide this identifier to retrieve comments associated with the specific filing.

- **include** `query`: The "include" parameter allows users to specify what additional information they want included in the response. For example, setting "include=user" indicates that user information will be included in the comments if available.

- **sort** `query`: The "sort" parameter allows users to specify the sorting order of the comments in the response. For instance, setting "sort=-top_parent_id" would sort the comments in descending order based on the top parent ID.

- **linksSelf** `query`: The "linksSelf" parameter is an parameter that allows users to include a self-link in the request. 

## `/api/skalpha/filings/{id}`

### Description
This API endpoint allows users to retrieve information about a specific financial filing associated with a symbol (e.g., stock ticker). Users need to provide the unique identifier or "id" of the filing as a path parameter to specify the particular filing they want to retrieve. The response includes details about the filing, such as its content, description, filing date, and more.

### HTTP Method
`GET`

### Parameters

- **id** `path`: The "id" parameter represents the unique identifier associated with the financial filing that users want to retrieve information for. Users must provide this identifier to retrieve details associated with the specific filing.

- **include** `query`: The "include" parameter allows users to specify what additional information they want included in the response. For example, setting "include=ticker" indicates that information about the associated symbol (ticker) will be included in the response if available.

- **linksSelf** `query`: The "linksSelf" parameter is an parameter that allows users to include a self-link in the request. 

## `/api/skalpha/symbols/{symbol}/sec-filings`

### Description
This API endpoint enables users to retrieve a list of SEC (Securities and Exchange Commission) filings related to a specific symbol (for example, a stock ticker). Users provide the symbol as a path parameter to specify the stock ticker for which they want to retrieve SEC filings. The response contains a list of SEC filings associated with the provided symbol, along with additional details for each filing.

### HTTP Method
`GET`

### Parameters

- **symbol** `path`: The "symbol" parameter represents the stock ticker symbol for which users want to retrieve SEC filings. Users must provide the symbol as the value for this parameter.

- **category** `query`: The "category" parameter allows users to filter SEC filings by a specific category. Users can specify the category as a stringto retrieve filings related to that category. This includes: _all,other,ownership,tenders,financials_.

- **id** `query`: The "id" parameter is the symbol's id, sometimes it's just the duplicate of symbol.

- **isMounting** `query`: The "isMounting" parameter is specific to react.

- **include** `query`: The "include" parameter allows users to specify what additional information they want to include in the response. For example, "include=formType" indicates that the form type of each filing will be included in the response if available.

- **page_size** `query`: The "page_size" parameter allows users to control the number of results per page in the response. Users can set the page size to retrieve a specific number of filings in each response.

- **page_number** `query`: The "page_number" parameter allows users to specify the page number for pagination. Users can set the page number to retrieve filings from a specific page.

## `/api/skalpha/press_releases/{id}`

### Description
This API endpoint enables users to fetch information about a specific press release tied to a given ID. Users supply the "id" as a path parameter to denote the press release they are interested in. The response provides information about the press release, such as its title, content, date of publication, and linked resources.

### HTTP Method
`GET`

### Parameters

- **id** `path`: The "id" parameter represents the identifier of the press release. Users must supply this ID as the value for this parameter to fetch details about a particular press release.

- **include** `query`: The "include" parameter lets users define what extra data they want to include in the response.

## `/api/skalpha/symbols/{symbol}/press-releases`

### Description
This API endpoint enables users to fetch a list of press releases tied to a specific symbol. Users must supply the "symbol" as a path parameter to denote the company or entity for which they are seeking press releases. The response contains a list of press releases, each with details such as title, publication date, and linked resources.

### HTTP Method
`GET`

### Parameters

- **symbol** `path`: The "symbol" parameter denotes the identifier of the company or entity for which press releases are to be fetched. Users must supply this symbol as the value for this parameter.

- **until** `query`: The "until" parameter allows users to filter press releases according to a timestamp. Press releases published up until the given timestamp will be included in the response.

- **id** `query`: The "id" parameter is the id of the symbol  (generally a duplication of the path parameter "symbol").

- **isMounting** `query`: The "isMounting" parameter is specific to react.

- **include** `query`: The "include" parameter lets users define what extra data they want to include in the response.

- **page_size** `query`: The "page_size" parameter allows users to define the number of press releases to be included on each page of the response.

## `/api/skalpha/symbols/{symbol}/related-analysis`

### Description
This API endpoint enables users to fetch a list of analyses and articles related to a specific symbol. Users must supply the "symbol" as a path parameter to specify the company or entity for which they wish to retrieve the related analyses. The response will contain a list of related analyses, each with details such as title, publication date, author information, and associated links.

### HTTP Method
`GET`

### Parameters

- **symbol** `path`: The "symbol" parameter is the identifier of the company or entity for which related analyses are to be fetched. Users must supply the symbol as the value for this parameter.

- **until** `query`: The "until" parameter allows users to filter related analyses based on a timestamp. Analyses published up until the given timestamp will be included in the response.

- **since** `query`: The "since" parameter allows users to filter related analyses based on a timestamp. Analyses published since the given timestamp will be included in the response.

- **id** `query`: The "id" parameter is the id of the symbol(generally duplicated from the path parameter "symbol").

- **include** `query`: The "include" parameter allows users to specify what additional information they want included in the response.

- **page_size** `query`: The "page_size" parameter allows users to specify the number of related analyses to be included on each page of the response.

## `/api/skalpha/symbols/{symbol}/faq`

### Description
This API endpoint enables users to fetch a list of Frequently Asked Questions (FAQs) associated with a specific symbol . Users must supply the "symbol" as a path parameter to designate the company or entity for which they wish to retrieve the FAQs. The response will contain a list of FAQs, each with a question and its corresponding answer.

### HTTP Method
`GET`

### Parameters

- **symbol** `path`: The "symbol" parameter is the identifier of the company or entity for which FAQs are to be fetched. Users must supply the symbol as the value for this parameter.

## `/api/skalpha/symbols/{symbol}/news`

### Description
This API endpoint enables users to fetch a list of news articles associated with a particular symbol. Users must provide the "symbol" as a path parameter to identify the company or entity for which they wish to retrieve news articles. The response will include a list of news articles, each with detailed information such as the article's title, publication date, author, and other relevant data.

### HTTP Method
`GET`

### Parameters

- **symbol** `path`: The "symbol" parameter is the identifier of the company or entity for which news articles are to be retrieved. Users must provide the symbol as the value for this parameter.

- **until** `query`: This parameter allows users to filter news articles up to a particular timestamp. Users can provide the timestamp as a string to fetch articles published up to that point.

- **since** `query`: This parameter enables users to filter news articles from a certain timestamp onwards. Users can provide the timestamp as a string to retrieve articles published after that time.

- **category** `query`: This parameter allows users to filter news articles by category. Users can specify the category as a string (e.g., "news_card") to fetch articles within that category.

- **id** `query`: This parameter is the symbol's id. Generally it's a duplication of the parameter "symbol".

- **isMounting** `query`: This parameter is specific to react.

- **include** `query`: This parameter allows users to specify what extra information they want to include in the response. Users can provide a comma-separated string to include specific data fields.

- **page_size** `query`: This parameter allows users to specify the number of news articles to be included in each page of the response.

- **page_number** `query`: This parameter allows users to specify the page number of the results.

## `/api/skalpha/symbols/{symbol}/analysis`

### Description
This API endpoint enables users to fetch a list of stock analysis articles related to a particular symbol. Users must provide the "symbol" as a path parameter to identify the company or entity for which they wish to retrieve analysis articles. The response will include a list of analysis articles, each with detailed information such as the article's title, publication date, author, and other relevant data.

### HTTP Method
`GET`

### Parameters

- **symbol** `path`: The "symbol" parameter is the identifier of the company or entity for which analysis articles are to be retrieved. Users must provide the symbol as the value for this parameter.

- **until** `query`: This parameter allows users to filter analysis articles up to a particular timestamp.

- **related** `query`: This parameter allows users to specify whether they want to return related analysis articles. Users can provide "true" as the value for this parameter to get related analysis articles.

- **id** `query`: This parameter is the symbol's id. Generally it's a duplication of the parameter "symbol".

- **include** `query`: This parameter allows users to specify what extra information they want to include in the response. Users can provide a comma-separated string to include specific data fields.

- **page_size** `query`: This parameter allows users to specify the number of analysis articles to be included in each page of the response.

- **page_number** `query`: This parameter allows users to specify the page number of the results.

## `/api/skalpha/symbols/{symbol}/rating/periods`

### Description
This API endpoint allows users to retrieve rating periods for a specific symbol. Users must specify the "symbol" as a path parameter to indicate the company or entity for which they want to retrieve rating periods. Users can also provide the "periods" as a query parameter, which corresponds to the specific rating periods they're interested in.

### HTTP Method
`GET`

### Parameters

- **symbol** `path`: The "symbol" parameter represents the identifier of the company or entity for which rating periods are to be retrieved. Users must provide the symbol as the value for this parameter.

- **periods** `query`: The "periods" parameter allows users to specify the rating periods they are interested in. Users can provide a comma-separated string of periods to fetch ratings for those specific periods.

## `/api/skalpha/symbols/{symbol}`

### Description
This API endpoint allows users to retrieve details about a specific symbol. Users must provide the "symbol" as a path parameter to specify the company or entity for which they want to retrieve details.

### HTTP Method
`GET`

### Parameters

- **symbol** `path`: The "symbol" parameter represents the identifier of the company or entity for which details are to be retrieved. Users must provide the symbol as the value for this parameter.

## `/api/skalpha/symbols/{symbol}/sector_metrics`

### Description
This API endpoint allows users to retrieve sector-specific metrics related to a specific symbol. Users must provide the "symbol" as a path parameter to specify the company or entity for which they want to retrieve sector metrics. Additionally, users can specify desired metrics using the "fields" query parameter, which accepts a comma-separated list of metric options. Metrics can include aspects like analysts' ratings, earnings growth, dividend yield, financial ratios, revenue growth, market capitalization, profitability, and more.

### HTTP Method
`GET`

### Parameters

- **symbol** `path`: The "symbol" parameter represents the identifier of the company or entity for which sector metrics are to be retrieved. Users must provide the symbol as the value for this parameter.

- **fields** `query`: The "fields" parameter allows users to specify which sector metrics they want to retrieve. Users can provide a comma-separated list of metric options, such as _altman_z_score, analysts_down_avg_5y, analysts_down_percent_avg_5y, analysts_up_avg_5y, analysts_up_percent_avg_5y, assets_turnover, authors_rating_pro, beta24, capex_change, capex_change_avg_5y, capex_to_sales, cash_from_operations_as_reported, cf_op_change_display, cf_op_change_display_avg_5y, common_equity_10y, common_equity_3y, common_equity_5y, common_equity_yoy, diluted_eps_growth, diluted_eps_growth_avg_5y, dilutedEps10y, dilutedEps3y, dilutedEps5y, dilutedEpsGrowth, div_grow_rate3, div_grow_rate5, div_pay_date, div_rate_fwd, div_rate_ttm, div_yield_fwd, dividend_growth, dividend_per_share_change_dislpay, dividend_per_share_change_dislpay_avg_5y, dividend_yield, dps_yoy, dps_yoy_avg_5y, earningsGrowth, earningsGrowth10y, earningsGrowth3, earningsGrowth5y, ebit_change_display, ebit_change_display_avg_5y, ebit_margin, ebitda_10y, ebitda_3y, ebitda_5y, ebitda_change_display, ebitda_change_display_avg_5y, ebitda_margin, ebitda_yoy, ebitda_yoy_avg_5y, ebitdaYoy, eps_change_display, eps_change_display_avg_5y, eps_ltg, eps_ltg_avg_5y, eps_revisions_category, ev_12m_sales_ratio, ev_ebitda, fcf_per_share_change_display, fcf_per_share_change_display_avg_5y, gross_loans_10y, gross_loans_3y, gross_loans_5y, gross_loans_yoy, gross_margin, growth_category, impliedmarketcap, last_div_date, last_price_vs_sma_10d, last_price_vs_sma_200d, last_price_vs_sma_50d, levered_fcf_margin, levered_free_cash_flow_yoy, levered_free_cash_flow_yoy_avg_5y, leveredFreeCashFlow10y, leveredFreeCashFlow3y, leveredFreeCashFlow5y, leveredFreeCashFlowYoy, marketcap, marketcap_display, momentum_category, net_eps, net_inc_per_employee, net_income, net_interest_income_10y, net_interest_income_3y, net_interest_income_5y, net_interest_income_yoy, net_margin, netIncome10y, netIncome3y, netIncome5y, netIncomeYoy, normalizedNetIncome10y, normalizedNetIncome3y, normalizedNetIncome5y, normalizedNetIncomeYoy, op_cf_yoy, op_cf_yoy_avg_5y, operating_income_ebit_yoy, operating_income_ebit_yoy_avg_5y, operatingIncomeEbit10y, operatingIncomeEbit3y, operatingIncomeEbit5y, operatingIncomeEbitYoy, payout_ratio, pb_ratio, pe_nongaap_fy1, pe_ratio, price_cf_ratio, price_high_52w, price_low_52w, profitability_category, quant_rating, return_on_avg_tot_assets, return_on_total_capital, revenue_change_display, revenue_change_display_avg_5y, revenue_growth, revenue_growth_avg_5y, revenue_growth3, revenue_growth5, revenueGrowth10, roe, roe_change_display, roe_change_display_avg_5y, roe_yoy, roe_yoy_avg_5y, rtn_on_common_equity, sell_side_rating, shares, short_interest_percent_of_float, sma_10d, sma_200d, sma_50d, tangible_book_per_share, tangibleBookValue10y, tangibleBookValue3y, tangibleBookValue5y, tangibleBookValueYoy, tev, total_cash, total_debt, total_revenue, totalAssets10y, totalAssets3y, totalAssets5y, totalAssetsYoy, value_category, working_cap_change, working_cap_change_avg_5y_.


