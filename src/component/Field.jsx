import React, { useState } from "react";

export default function Field() {
  const [name, setName] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <h2>Input fields</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
    </div>
  );
}
