import React from "react";
import { PlusIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

export default function TodoInput({ onAddTask }) {
  const [newTask, setNewTask] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    onAddTask(newTask);
    setNewTask("");
  };

  return (
    <form
      onSubmit={handleAddTask}
      className="px-3 mb-5 border-b dark:border-b-sky-700 mt-[5rem] md:px-4 dark:text-white"
    >
      <div className="flex items-center justify-between w-full gap-4 px-3 py-2 mb-4 leading-tight text-gray-700 bg-white border rounded dark:border-sky-700 dark:bg-sky-800">
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="w-full bg-transparent appearance-none focus:outline-none dark:text-white dark:placeholder-sky-100"
          placeholder="Add a task..."
          type="text"
        />
        <button
          type="submit"
          className="px-3 py-2 font-bold text-white rounded bg-sky-500 active:bg-sky-600 dark:bg-sky-400"
        >
          <PlusIcon className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
}
