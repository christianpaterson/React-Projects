import { useState } from "react";
import "./App.css";

const INITIAL_VALUE = ["A", "B", "C"];

export default function App() {
  const [array, setArray] = useState(INITIAL_VALUE);
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");

  /*
  Good thing slice returns a copy. Splice modifies the array and woudn't work.
  We cannot modify currentArray because it is the same as array (reference type).
  currentArray is just a pointer pointing to the same array as our state var.
  This is why we need to return via slice, which returns a modified copy.
  If we modified currentArray directly, it would still work as expected.
  It wouldn't work if in our onClick event we called the fn twice.
  */
  function removeFirstElement() {
    setArray((currentArray) => currentArray.slice(1));
  }
  function removeSpecificLetter(letter) {
    setArray((currentArray) => {
      return currentArray.filter((el) => el !== letter);
    });
  }
  function addLetterToStart(letter) {
    setArray((currentArray) => {
      return [letter, ...currentArray];
    });
  }
  function add2Letters(letter) {
    setArray((currentArray) => {
      return [letter, letter, ...currentArray];
    });
  }
  function addLetterToEnd(letter) {
    setArray((currentArray) => {
      return [...currentArray, letter];
    });
  }
  function switchLetterToH(letter) {
    setArray((currentArray) => {
      return currentArray.map((el) => {
        if (el === letter) return "H";
        return el;
      });
    });
  }
  function addLetterAtIndex(letter, index) {
    setArray((currentArray) => {
      return [
        ...currentArray.slice(0, index),
        letter,
        ...currentArray.slice(index),
      ];
    });
  }
  function addToEnd() {
    // This works too because its a new array
    // Can also do like addLetterToEnd
    const newArray = [].concat(...array, value2);
    setArray(newArray);
  }
  function removeSpecifiedElement() {
    setArray((currentArray) => {
      return currentArray.filter((el) => el !== value3);
    });
    // Same thing because filter returns copy, stored in minusSpecific
    // const minusSpecific = array.filter((el) => el !== value3);
    // setArray(minusSpecific);
  }

  return (
    <>
      <button onClick={() => setArray([])}>Clear Array</button>
      <button onClick={() => setArray(INITIAL_VALUE)}>Reset Array</button>
      <button onClick={removeFirstElement}>Remove First Element</button>
      <button onClick={() => removeSpecificLetter("B")}>Remove All B's</button>

      <button onClick={() => add2Letters("L")}>Add 2 L's to Start</button>
      <button onClick={() => addLetterToEnd("D")}>Add D's to End</button>
      <button onClick={() => addLetterToEnd("E")}>Add E's to End</button>
      <button onClick={() => addLetterToStart("E")}>Add E's to Start</button>

      <button onClick={() => addLetterToStart("Z")}>Add Z's to Start</button>
      <button onClick={() => switchLetterToH("Z")}>Switch Z's to H's</button>
      <button onClick={() => addLetterAtIndex("O", 5)}>Add O at Index 5</button>

      <div>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="grouped-input"
        />
        <button
          onClick={() => addLetterToStart(value)}
          className="grouped-input"
        >
          Add Custom To Start
        </button>
      </div>

      <div>
        <input
          type="text"
          value={value2}
          className="grouped-input"
          onChange={(e) => setValue2(e.target.value)}
        />
        <button className="grouped-input" onClick={addToEnd}>
          Add Custom To End
        </button>
      </div>

      <div>
        <input
          type="text"
          value={value3}
          className="grouped-input"
          onChange={(e) => setValue3(e.target.value)}
        />
        <button className="grouped-input" onClick={removeSpecifiedElement}>
          Remove Specified Element
        </button>
      </div>

      <button
        onClick={() => {
          removeSpecificLetter("A");
          removeSpecificLetter("E");
          removeSpecificLetter("I");
          removeSpecificLetter("O");
          removeSpecificLetter("U");
        }}
      >
        Remove All Vowels
      </button>

      {array.join(", ")}
    </>
  );
}
