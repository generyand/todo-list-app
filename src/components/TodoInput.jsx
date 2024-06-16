import React from "react";
import { PlusIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

export default function TodoInput({ onAddTask }) {
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    onAddTask(newTask);
    setNewTask("");
  };

  return (
    <header className="px-2 mb-5 border-b md:px-4">
      <div className="flex items-center justify-between w-full gap-4 px-2 py-1 mb-6 leading-tight text-gray-700 border rounded">
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="w-full appearance-none focus:outline-none"
          placeholder="Add a task..."
          type="text"
        />
        <button className="px-3 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
          <PlusIcon onClick={handleAddTask} className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}
