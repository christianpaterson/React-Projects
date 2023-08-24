import { useState } from "react";
import { useRef } from "react";
import { useContext } from "react";
import { TodoContext } from "./App";

export function TodoItem({ id, name, completed }) {
  const { toggleTodo, updateTodoName, deleteTodo } = useContext(TodoContext);
  const [isEditing, setIsEditing] = useState(false);
  const nameRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    if (nameRef.current.value === "") return;
    updateTodoName(id, nameRef.current.value);
    setIsEditing(false);
  }

  return (
    <li className="list-item">
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input autoFocus type="text" defaultValue={name} ref={nameRef} />
          <button data-button-edit>Save</button>
        </form>
      ) : (
        <>
          <label className="list-item-label">
            <input
              type="checkbox"
              data-list-item-checkbox
              checked={completed}
              onChange={e => toggleTodo(id, e.target.checked)}
            />
            <span data-list-item-text>{name}</span>
          </label>
          <button data-button-edit onClick={() => setIsEditing(true)}>
            Edit
          </button>
          <button data-button-delete onClick={() => deleteTodo(id)}>
            Delete
          </button>
        </>
      )}
    </li>
  );
}
