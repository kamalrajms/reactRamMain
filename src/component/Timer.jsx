import React, { useState, useEffect } from "react";

export default function Timer() {
  const [sec, setSec] = useState(0);
  const [isRunning, setIsRunnig] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setSec((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const start = () => {
    setIsRunnig(true);
  };
  const stop = () => {
    setIsRunnig(false);
  };
  const reset = () => {
    setSec(0);
    setIsRunnig(false);
  };
  return (
    <div>
      <h2>Timer :{sec}</h2>
      <button onClick={start}>Start</button>
      <button onClick={stop}>stop</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}
