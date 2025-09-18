import React, { useState } from "react";

export default function Form() {
  const [formData, setFormdata] = useState({
    username: "",
    email: "",
    password: "",
    terms: false,
  });
  const [error, setError] = useState("");

  const handleInput = (e) => {
    const { name, value, type, checked } = e.target;
    setFormdata({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleform = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password || !formData.email) {
      setError("All fields are required");
      return;
    }
    if (!formData.terms) {
      setError("Accept condition");
      return;
    }
    setError("");
    alert("form submitted successfully");
    console.log(formData);
  };

  return (
    <div>
      <form onSubmit={handleform}>
        <h2>Registeration form</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <input
          type="text"
          name="username"
          value={formData.username}
          placeholder="name"
          onChange={handleInput}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="email"
          onChange={handleInput}
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="password"
          onChange={handleInput}
        />
        <input
          type="checkbox"
          name="terms"
          onChange={handleInput}
          checked={formData.terms}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
