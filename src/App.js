import React, { useState, useEffect } from "react";
import { loadIpoCalendarInformation } from "./services";

function App() {
  const [ipoCalendarInformation, setIpoCalendarInformation] = useState({
    ipoCalendar: []
  });

  useEffect(() => {
    loadIpoCalendarInformation({ from: "2020-01-01", to: "2021-01-01" })
      .then(response => {
        setIpoCalendarInformation(response);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <h1>IPO Calendar</h1>
      {ipoCalendarInformation.ipoCalendar.map(ipo => (
        <p key={ipo.name}>{ipo.name}</p>
      ))}
    </div>
  );
}

export default App;
