import React, { useEffect, useRef, useState } from "react";

export default function UseRefHook() {
  // eg 1
  const inputRef = useRef();

  const focusinput = () => {
    inputRef.current.focus();
  };
  // eg2
  const [sec, setsec] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setsec((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div>
      {/* eg1 */}
      <input type="text" placeholder="name" ref={inputRef} />
      <button onClick={focusinput}> focus input</button>
      {/* eg2 */}
      <h1>Seconds :{sec}</h1>
      <button onClick={() => clearInterval(intervalRef.current)}>Stop</button>
    </div>
  );
}
