import React from "react";
import TodoItem from "./TodoItem";
import { AnimatePresence, motion } from "framer-motion";

export default function CompletedTodos({ setTodos, todos, onDeleteTask }) {
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div className="px-3 pb-5 md:px-4">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25, delay: 0.5 }}
        className="mb-3 text-sm font-bold text-gray-600 dark:text-neutral-50"
      >
        COMPLETED
      </motion.p>
      <div className="flex flex-col gap-2">
        <AnimatePresence>
          {completedTodos.map((todo) => {
            return (
              <TodoItem
                darkMode
                completed={true}
                todos={todos}
                todo={todo}
                setTodos={setTodos}
                onDeleteTask={onDeleteTask}
                key={todo.id}
              />
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
