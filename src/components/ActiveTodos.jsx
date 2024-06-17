import React from "react";
import { AnimatePresence } from "framer-motion";
import TodoItem from "./TodoItem";

export default function ActiveTodos({ setTodos, todos, onDeleteTask }) {
  const activeTodos = todos.filter((todo) => !todo.completed);

  return (
    <div className="px-3 mb-5 md:px-4">
      <p className="mb-3 text-sm font-bold text-gray-600 dark:text-neutral-50">
        TO DOs
      </p>
      <ul className="flex flex-col gap-2">
        <AnimatePresence>
          {activeTodos.map((todo) => {
            return (
              <TodoItem
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
