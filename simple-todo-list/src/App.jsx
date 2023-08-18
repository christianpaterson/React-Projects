import "./App.css";
import { useState } from "react";
import { Todo } from "./Todo";

export default function App() {
  const [newTodoName, setNewTodoName] = useState("");
  const [todoList, setTodoList] = useState([]);

  function updateTodoList() {
    if (newTodoName === "") return;
    setTodoList(currentTodoList => {
      return [
        ...currentTodoList,
        { name: newTodoName, completed: false, id: crypto.randomUUID() },
      ];
    });
    setNewTodoName("");
  }

  function toggleTodo(todoId, completed) {
    setTodoList(currentTodoList => {
      return currentTodoList.map(todo => {
        if (todo.id === todoId) {
          return { ...todo, completed };
        } else {
          return todo;
        }
      });
    });
  }

  function deleteTodo(todoId) {
    setTodoList(currentTodoList => {
      return currentTodoList.filter(todo => todo.id !== todoId);
    });
  }

  return (
    <>
      <ul id="list">
        {todoList.map(todo => {
          return (
            <Todo
              key={todo.id}
              {...todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
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
