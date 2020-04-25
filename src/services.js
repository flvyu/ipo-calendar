import wretch from "wretch";

const IPO_CALENDAR_API_ENDPOINT = "https://finnhub.io/api/v1/calendar/ipo";

const updateQuery = query => ({ ...query, token: process.env.REACT_APP_FINNHUB_API_TOKEN });

export const loadIpoCalendarInformation = query => {
  return wretch(IPO_CALENDAR_API_ENDPOINT)
    .query(updateQuery(query))
    .get()
    .json();
};
