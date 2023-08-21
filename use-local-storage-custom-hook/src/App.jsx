import "./App.css";
import { useLocalStorage } from "./useLocalStorage";

export default function App() {
  const [firstName, setFirstName] = useLocalStorage("FIRST_NAME", "");

  const [lastName, setLastName] = useLocalStorage("LAST_NAME", () => {
    return "Default";
  });

  const [hobbies, setHobbies] = useLocalStorage("HOBBIES", [
    "Programming",
    "Weight Lifting",
  ]);

  return (
    <>
      <div>
        <label>First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
      </div>
      <div>{hobbies.join(", ")}</div>
      <button
        onClick={() =>
          setHobbies(currentHobbies => [...currentHobbies, "New Hobby"])
        }
      >
        Add Hobby
      </button>
    </>
  );
}
