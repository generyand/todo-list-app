import React from "react";
import { AnimatePresence } from "framer-motion";
import TodoItem from "./TodoItem";
import { motion } from "framer-motion";

export default function ActiveTodos({
  setTodos,
  todos,
  onDeleteTask,
  darkMode,
}) {
  const activeTodos = todos.filter((todo) => !todo.completed);

  return (
    <div className="px-3 mb-5 md:px-4">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25, delay: 0.3 }}
        className="mb-3 text-sm font-bold text-gray-600 dark:text-neutral-50"
      >
        TO DOs
      </motion.p>
      <ul className="flex flex-col gap-2">
        <AnimatePresence>
          {activeTodos.map((todo) => {
            return (
              <TodoItem
                darkMode={darkMode}
                todos={todos}
                todo={todo}
                setTodos={setTodos}
                onDeleteTask={onDeleteTask}
                key={todo.id}
              />
            );
          })}
        </AnimatePresence>
      </ul>
    </div>
  );
}
