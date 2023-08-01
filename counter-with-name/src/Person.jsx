import { useState } from "react";

export function Person() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(50);

  return (
    <div>
      <div>
        <label htmlFor="nameInput">Enter your name:</label>
        <input
          type="text"
          id="nameInput"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="nameInput">Change your age:</label>
        <button
          id="minus"
          onClick={() => setAge((currentAge) => currentAge - 1)}
        >
          -
        </button>
        <button onClick={() => setAge((currentAge) => currentAge + 1)}>
          +
        </button>
      </div>
      <br />
      <div>
        {name} is {age} years old
      </div>
    </div>
  );
}
