import React from "react";
import { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import Header from "./Header";
import { useLocalStorage } from "../utils/useLocalStorage";
import Menu from "./Menu";
import { v4 as uuidv4 } from "uuid";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "sonner";
import { motion } from "framer-motion";

export default function TodoApp({ setDarkMode, darkMode }) {
  const [todos, setTodos] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const { setItem } = useLocalStorage("todos");

  const handleAddTask = (newTask) => {
    if (!newTask) return;

    const currentDate = new Date();

    const newTaskObj = {
      id: uuidv4(),
      task: newTask,
      completed: false,
      dateAdded: currentDate,
      dateCompleted: undefined,
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
      <AnimatePresence>
        {showMenu && (
          <Menu
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            setShowMenu={setShowMenu}
            setTodos={setTodos}
          />
        )}
      </AnimatePresence>

      <Header setShowMenu={setShowMenu} />
      <TodoInput onAddTask={handleAddTask} />
      <TodoList
        darkMode
        setTodos={setTodos}
        todos={todos}
        onDeleteTask={handleDeleteTask}
      />

      <Toaster
        toastOptions={{
          unstyled: true,
          classNames: {
            toast:
              "shadow-lg bg-white dark:bg-sky-900 flex items-center px-4 py-4 rounded-md gap-4 transition",
            title: "text-sky-900 dark:text-sky-100",
            description: "text-red-400",
            actionButton: "bg-zinc-400",
            cancelButton: "bg-orange-400",
            closeButton: "bg-lime-400",
          },
        }}
        position="bottom-center"
      />
    </main>
  );
}
