import { TrashIcon } from "@heroicons/react/16/solid";
import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function TodoItem({
  completed,
  todos,
  todo,
  setTodos,
  onDeleteTask,
}) {
  const handleToggleTodo = (id) => {
    const updatedTodos = todos.map((todoItem) => {
      if (todoItem.id === id) {
        return {
          ...todoItem,
          completed: !todoItem.completed,
        };
      }
      return todoItem;
    });
    setTodos(updatedTodos);
  };

  const handleDeleteTask = () => {
    setIsChecked(true);
    onDeleteTask(todo.id);
  };

  const [isChecked, setIsChecked] = useState(todo.completed);

  return (
    <motion.div
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
      className="px-4 py-3 border rounded "
      id="checklist"
    >
      <input
        checked={completed}
        onChange={() => handleToggleTodo(todo.id)}
        type="checkbox"
        id={`${todo.id}`}
        // onClick={() => handleToggleTodo(todo.id)}
      />
      <label htmlFor={`${todo.id}`}>{todo.task}</label>
      <div className="flex items-center justify-center place-self-end">
        <TrashIcon
          onClick={handleDeleteTask}
          className="w-6 h-6 text-red-500 cursor-pointer place-self-end"
        />
      </div>
    </motion.div>
  );
}
