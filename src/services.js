import wretch from "wretch";

const IPO_CALENDAR_API_ENDPOINT = "https://finnhub.io/api/v1/calendar/ipo";

const updateQuery = query => ({ ...query, token: process.env.REACT_APP_FINNHUB_API_TOKEN });

const loadDevData = () => {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve({
          name,
          symbol,
          price,
          date: ipoDate,
          numberOfShares,
          totalSharesValue,
          status,
          exchange:
      });
    }, 300);
  });
}


export const loadIpoCalendarInformation = query => {
  if (process.env.NODE_ENV === 'development') {
    return loadDevData()
  }
  
  return wretch(IPO_CALENDAR_API_ENDPOINT)
    .query(updateQuery(query))
    .get()
    .json();
};
