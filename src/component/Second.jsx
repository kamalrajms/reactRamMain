import React, { useState, useEffect } from "react";

export default function Second() {
  const [sec, Setsec] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      Setsec((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <h1>Seconds :{sec}</h1>
    </div>
  );
}
