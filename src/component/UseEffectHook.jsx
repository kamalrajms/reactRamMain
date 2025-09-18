import React, { useState, useEffect } from "react";

export default function UseEffectHook() {
  const [count, setcount] = useState(0);
  useEffect(() => {
    console.log("component mounted");
  }, [count]);
  useEffect(() => {
    console.log(`count changed to : ${count}`);
  }, [count]);
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setcount(count + 1)}>increse</button>
    </div>
  );
}
