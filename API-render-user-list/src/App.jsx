import { useState } from "react";
import { useEffect } from "react";
import { User } from "./User";
import "./App.css";

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const userNameArray = [];

  useEffect(() => {
    setLoading(true);
    setError(undefined);
    const constroller = new AbortController();
    fetch("https://jsonplaceholder.typicode.com/users", {
      signal: constroller.signal,
    })
      .then(res => {
        if (res.status === 200) {
          return res.json();
        } else {
          return Promise.reject(res);
        }
      })
      .then(data => {
        setUsers(data);
      })
      .catch(e => {
        if (e?.name === "AbortError") return;
        setError(e);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      constroller.abort();
    };
  }, []);

  return (
    <>
      <h1>User List</h1>
      <ul>
        {users.map(user => {
          return <User key={user.id} name={user.name} />;
        })}
      </ul>

      {error != null ? (
        <h4>Error!</h4>
      ) : loading ? (
        <h4>Loading...</h4>
      ) : (
        <h4>Data fetched</h4>
      )}
    </>
  );
}
