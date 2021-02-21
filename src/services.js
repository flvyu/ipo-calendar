import {mockData} from './mocks/mock-data'
import wretch from "wretch";

const IPO_CALENDAR_API_ENDPOINT = "https://finnhub.io/api/v1/calendar/ipo";

const updateQuery = query => ({ ...query, token: process.env.REACT_APP_FINNHUB_API_TOKEN });


export const loadIpoCalendarInformation = query => {
  if (process.env.NODE_ENV === 'development') {
    return new Promise((resolve, _) => {
      resolve(mockData);
    });
  }
  
  return wretch(IPO_CALENDAR_API_ENDPOINT)
    .query(updateQuery(query))
    .get()
    .json();
};
