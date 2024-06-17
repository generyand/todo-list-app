import React from "react";
import { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import Header from "./Header";
import { useLocalStorage } from "../utils/useLocalStorage";
import Menu from "./Menu";

export default function TodoApp({ setDarkMode, darkMode }) {
  const [todos, setTodos] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const { setItem } = useLocalStorage("todos");

  const handleAddTask = (newTask) => {
    if (!newTask) return;
    const newTaskObj = {
      id: todos.length + 1,
      task: newTask,
      completed: false,
    };

    setTodos([...todos, newTaskObj]);
    setItem([...todos, newTaskObj]);
  };

  const handleDeleteTask = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    setItem(newTodos);
  };

  useEffect(() => {
    const { getItem } = useLocalStorage("todos");
    setTodos(getItem() || []);
  }, []);

  return (
    <main className="main | max-w-[32rem] mx-auto sm:mt-[10vh] dark:bg-sky-950 dark:text-white bg-sky-50 sm:rounded-md h-[100vh] w-full sm:w-auto overflow-y-scroll sm:max-h-[40rem] relative sm:shadow-md sm:outline sm:outline-1 sm:outline-gray-300">
      {showMenu && (
        <Menu
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          setShowMenu={setShowMenu}
          setTodos={setTodos}
        />
      )}
      <Header setShowMenu={setShowMenu} />
      <TodoInput onAddTask={handleAddTask} />
      <TodoList
        setTodos={setTodos}
        todos={todos}
        onDeleteTask={handleDeleteTask}
      />
    </main>
  );
}
