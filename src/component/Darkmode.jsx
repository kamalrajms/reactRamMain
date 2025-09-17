import React, { useState } from "react";

export default function Darkmode() {
  const [dark, setDark] = useState(true);
  return (
    <div
      style={{
        backgroundColor: dark ? "#333" : "#fff",
        color: dark ? "#fff" : "#333",
        padding: "40px",
      }}
    >
      <button onClick={() => setDark(!dark)}>
        switch to {dark ? "light" : "dark"} mode
      </button>
      <p>you are in {dark ? "dark" : "light"} mode</p>
    </div>
  );
}
