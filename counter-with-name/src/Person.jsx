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
          name="nameInput"
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
        My name is {name} and I am {age} years old
      </div>
    </div>
  );
}

// update the age state and display the state between the two buttons
