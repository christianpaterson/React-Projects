import "./App.css";
import { useState } from "react";

export default function App() {
  const [newTodoName, setNewTodoName] = useState("");
  const [todoList, setTodoList] = useState([]);

  function updateTodoList() {
    if (newTodoName === "") return;
    setTodoList(currentTodos => {
      return [
        ...currentTodos,
        { name: newTodoName, completed: false, id: crypto.randomUUID() },
      ];
    });
    setNewTodoName("");
  }

  function toggleTodo(todoId, completed) {
    setTodoList(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === todoId) return { ...todo, completed };
        return todo;
      });
    });
  }

  function deleteTodo(todoId) {
    setTodoList(currentTodos => {
      return currentTodos.filter(todo => todo.id !== todoId);
    });
  }

  return (
    <>
      <ul id="list">
        {todoList.map(todo => {
          return (
            <li key={todo.id} className="list-item">
              <label className="list-item-label">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={e => toggleTodo(todo.id, e.target.checked)}
                  data-list-item-checkbox
                />
                <span data-list-item-text>{todo.name}</span>
              </label>
              <button onClick={() => deleteTodo(todo.id)} data-button-delete>
                Delete
              </button>
            </li>
          );
        })}
      </ul>

      <div id="new-todo-form">
        <label htmlFor="todo-input">New Todo</label>
        <input
          type="text"
          id="todo-input"
          value={newTodoName}
          onChange={e => setNewTodoName(e.target.value)}
        />
        <button onClick={updateTodoList}>Add Todo</button>
      </div>
    </>
  );
}
