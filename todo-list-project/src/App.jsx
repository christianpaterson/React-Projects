import "./App.css";
import { useEffect, useReducer, createContext } from "react";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";

const LOCAL_STORAGE_KEY = "TODOS";
const ACTIONS = {
  ADD: "ADD",
  UPDATE: "UPDATE",
  TOGGLE: "TOGGLE",
  DELETE: "DELETE",
};

function reducer(todos, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD:
      return [
        ...todos,
        { name: payload.name, completed: false, id: crypto.randomUUID() },
      ];
    case ACTIONS.TOGGLE:
      return todos.map(todo => {
        if (todo.id === payload.id)
          return { ...todo, completed: payload.completed };
        return todo;
      });
    case ACTIONS.DELETE:
      return todos.filter(todo => todo.id !== payload.id);
    default:
      throw new Error(`No action found for ${type}.`);
  }
}

export const TodoContext = createContext();

export default function App() {
  const [todos, dispatch] = useReducer(reducer, [], initialValue => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos == null) return initialValue;
    return storedTodos;
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addNewTodo(name) {
    dispatch({ type: ACTIONS.ADD, payload: { name } });
  }

  function toggleTodo(todoId, completed) {
    dispatch({ type: ACTIONS.TOGGLE, payload: { id: todoId, completed } });
  }

  function deleteTodo(todoId) {
    dispatch({ type: ACTIONS.DELETE, payload: { id: todoId } });
  }

  return (
    <TodoContext.Provider value={{ todos, addNewTodo, toggleTodo, deleteTodo }}>
      <TodoList />
      <NewTodoForm />
    </TodoContext.Provider>
  );
}
