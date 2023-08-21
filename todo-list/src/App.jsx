import "./App.css";
import { useState } from "react";
import { Todo } from "./Todo";

export default function App() {
  const [newTodoName, setNewTodoName] = useState("");
  const [todoList, setTodoList] = useState([]);

  function updateTodoList(e) {
    e.preventDefault();
    if (newTodoName === "") return;
    setTodoList(currentList => {
      return [
        ...currentList,
        { name: newTodoName, completed: false, id: crypto.randomUUID() },
      ];
    });
    setNewTodoName("");
  }

  function toggleTodo(todoId, checked) {
    setTodoList(currentList => {
      return currentList.map(todo => {
        if (todo.id === todoId) {
          return { ...todo, completed: checked };
        } else {
          return todo;
        }
      });
    });
  }

  function deleteTodo(todoId) {
    setTodoList(currentList => {
      return currentList.filter(todo => todo.id !== todoId);
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
      <form onSubmit={updateTodoList} id="new-todo-form">
        <label htmlFor="todo-input">New Todo</label>
        <input
          type="text"
          id="todo-input"
          value={newTodoName}
          onChange={e => setNewTodoName(e.target.value)}
        />
        <button>Add Todo</button>
      </form>
    </>
  );
}
