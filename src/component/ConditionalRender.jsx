import React, { useState } from "react";

export default function ConditionalRender() {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <div>
      {/* // ternary operator */}
      {isLogged ? <p>welcome back</p> : <p>Please login...</p>}
      <button onClick={() => setIsLogged(!isLogged)}>
        {isLogged ? "log out" : "log in"}
      </button>
      {/* logical operator */}

      {isLogged && <p>useer is loged inn....</p>}
    </div>
  );
}
