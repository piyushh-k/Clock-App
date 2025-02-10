import React, { useState, useEffect } from "react";
import "./App.css";

function MyComponent() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  function formatTime() {
    let hours = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    if (sec < 10) {
      sec = `${"0"}${sec}`;
    }

    return `${hours} : ${min} : ${sec} ${ampm}`;
  }

  function getRotation(degrees) {
    return {
      transform: `rotate(${degrees}deg)`,
    };
  }

  const secondsDegrees = (time.getSeconds() / 60) * 360;
  const minutesDegrees = (time.getMinutes() / 60) * 360 + (time.getSeconds() / 60) * 6;
  const hoursDegrees = (time.getHours() / 12) * 360 + (time.getMinutes() / 60) * 30;

  return (
    <>
      <div className="clock-container">
        <div className="clock">{formatTime()}</div>
        <div className="analog-clock">
          <div className="hand hour" style={getRotation(hoursDegrees)}></div>
          <div className="hand minute" style={getRotation(minutesDegrees)}></div>
          <div className="hand second" style={getRotation(secondsDegrees)}></div>
          <div className="center"></div>
        </div>
      </div>
    </>
  );
}

export default MyComponent;