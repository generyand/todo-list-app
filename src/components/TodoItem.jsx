import React from "react";
import { TrashIcon } from "@heroicons/react/16/solid";
import { motion } from "framer-motion";
import { useState } from "react";
import { useLocalStorage } from "../utils/useLocalStorage";

export default function TodoItem({
  completed,
  todos,
  todo,
  setTodos,
  onDeleteTask,
  darkMode,
}) {
  const { setItem } = useLocalStorage("todos");
  const [isChecked, setIsChecked] = useState(todo.completed);

  const handleToggleTodo = (id) => {
    const currentDate = new Date();
    const updatedTodos = todos.map((todoItem) => {
      if (todoItem.id === id) {
        return {
          ...todoItem,
          completed: !todoItem.completed,
          dateCompleted: !todoItem.completed ? currentDate : undefined,
        };
      }
      return todoItem;
    });
    setTodos(updatedTodos);
    setItem(updatedTodos);
  };

  const handleDeleteTask = () => {
    setIsChecked(true);
    onDeleteTask(todo.id);
  };

  // alert(darkMode);

  return (
    <motion.li
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: { delay: isChecked ? 0.5 : 0 },
      }}
      exit={{
        opacity: 0,
        scale: 0.5,
        transition: { delay: !isChecked ? 0.5 : 0 },
      }}
      className="todo-item | px-4 py-3 border rounded bg-white dark:bg-sky-800 dark:border-sky-700"
      id="checklist"
    >
      <input
        className="bg-transparent"
        checked={completed}
        onChange={() => handleToggleTodo(todo.id)}
        type="checkbox"
        id={`${todo.id}`}
      />
      <label className="text-sky-900" htmlFor={`${todo.id}`}>
        {todo.task}
      </label>
      <div className="flex items-center justify-center place-self-end">
        <TrashIcon
          onClick={handleDeleteTask}
          className="w-6 h-6 text-red-500 cursor-pointer place-self-end"
        />
      </div>
    </motion.li>
  );
}
