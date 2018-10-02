const baseApiUrl = `https://api.iextrading.com/1.0`;

export function getQuoteForSymbol(symbol) {
    const quoteApiUrl = `${baseApiUrl}/stock/${symbol}/quote?filter=symbol,companyName,latestPrice,latestSource,latestTime,change,changePercent`;
    return fetch(quoteApiUrl)
        .then(response => {
            if (!response.ok) {
                return Promise.reject({
                    code: response.status,
                    reason: response.statusText
                });
            }
            return response.json();
        });
}