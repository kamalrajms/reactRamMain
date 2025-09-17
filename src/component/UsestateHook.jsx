import React, { useState } from "react";

export default function UsestateHook() {
  const [count, setCount] = useState(5);
  return (
    <div>
      <h1>count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>increse</button>
      <button onClick={() => setCount(count - 1)}>DEC</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
