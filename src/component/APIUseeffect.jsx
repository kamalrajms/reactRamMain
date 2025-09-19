import React, { useEffect, useState } from "react";

export default function APIUseeffect() {
  const [user, setuser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setuser(data);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {loading ? (
        <p>Loading.....</p>
      ) : (
        <ul>
          {user.map((user) => (
            <li key={user.id}>
              name: {user.name}---Emai:{user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
