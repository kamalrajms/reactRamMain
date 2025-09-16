import React from "react";
import "./Greeting.css";

export default function Greeting({ name }) {
  const theme = {
    color: "blue",
    padding: "50px",
    backgroungColor: "yellow",
  };
  return (
    <div>
      <h2 style={theme}>Hello Ram {name}</h2>
      <p className="lorem">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
        recusandae obcaecati reiciendis natus eius fugiat, enim vitae ipsum est
        aperiam omnis eum, labore, consectetur minima sint similique iure quos
        ex?
      </p>
    </div>
  );
}
