import React from "react";
import { AnimatePresence } from "framer-motion";
import TodoItem from "./TodoItem";

export default function ActiveTodos({ setTodos, todos, onDeleteTask }) {
  const activeTodos = todos.filter((todo) => !todo.completed);

  return (
    <div className="px-2 mb-5 md:px-4">
      <p className="mb-3 text-sm font-bold text-gray-600">TO DOs</p>
      <div className="flex flex-col gap-2">
        <AnimatePresence>
          {activeTodos.map((todo) => {
            return (
              <TodoItem
                todos={todos}
                todo={todo}
                setTodos={setTodos}
                onDeleteTask={onDeleteTask}
                key={todo.task}
              />
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
