import React from "react";
import Greeting from "./component/Greeting";
import Hello from "./component/Hello";

export default function App() {
  const name = "rambabu";

  return (
    <>
      <Greeting name={name} />
      <Greeting />
      hello every one
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor labore
        fugit, eveniet voluptates harum obcaecati perspiciatis architecto rem
        illo consequatur.
      </p>
      <h2 style={{ color: "violet", padding: "40px" }}>Good evening</h2>
      <Hello />
      <h1>My name is {name} </h1>
    </>
  );
}
