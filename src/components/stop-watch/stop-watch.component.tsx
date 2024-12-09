import React, { useEffect, useState } from 'react';

const StopWatch = () => {
  const [time, setTime] = useState(0.0);
  const [isRunning, setIsRunning] = useState(false);

  //implement the logic stopwatch with useEffect
  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isRunning && intervalId !== null) {
      clearInterval(intervalId);
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning]);

  return (
    <div>
      <h1>Stop Watch</h1>
      TIMER: {time}
      <button onClick={() => setIsRunning(true)}>START</button>
      <button onClick={() => setIsRunning(false)}>STOP</button>
      <button
        onClick={() => {
          setIsRunning(false);
          setTime(0);
        }}
      >
        RESET
      </button>
    </div>
  );
};

export default StopWatch;
