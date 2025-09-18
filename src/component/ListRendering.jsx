import React from "react";

export default function ListRendering() {
  const fruits = ["apple", "banana", "orange", "mango", "kamal", "hhbfhwe"];

  const user = [
    { id: 1, name: "raju" },
    { id: 2, name: "kumar" },
    { id: 3, name: "sans" },
  ];
  console.log(fruits);

  return (
    <div>
      <ul>
        {/* <li>apple</li>
        <li>banana</li>
        <li>orange</li>
        <li>mango</li> */}
        {fruits.map((name, ind) => (
          <li key={ind}>{name}</li>
        ))}
      </ul>

      <h2>persons detailes</h2>
      {user.length > 0 ? (
        <ol>
          {user.map((person) => (
            <li key={person.id}>{person.name}</li>
          ))}
        </ol>
      ) : (
        <p>no data found</p>
      )}
    </div>
  );
}
