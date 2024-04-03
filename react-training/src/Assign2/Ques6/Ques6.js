// Create a functional component called Clock.
// Use the useState hook to manage a state variable named time initialized to the current time.
// Use the useEffect hook to update the time state every second to display the current time.
// Render the current time in a <p> element.
// When the component unmounts, clear the interval to stop updating the time.

import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
      console.log("1st");
    }, 1000);

    return () => {
      console.log("2nd");
      clearInterval(intervalId);
    };
  }, []);

  return <p>{time.toLocaleTimeString()}</p>;
}

export default Clock;