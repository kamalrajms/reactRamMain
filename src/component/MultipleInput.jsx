import React, { useState } from "react";

export default function MultipleInput() {
  const [formData, setFormdata] = useState({
    name: "",
    email: "rrgrio",
    age: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <h2>Multi fields</h2>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handlechange}
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handlechange}
      />
      <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handlechange}
      />
    </div>
  );
}
