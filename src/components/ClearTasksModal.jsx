import React from "react";
import { motion } from "framer-motion";
import { useLocalStorage } from "../utils/useLocalStorage";
import { toast } from "sonner";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function ClearTasksModal({
  setTodos,
  setShowClearTasksModal,
  setShowMenu,
}) {
  const handleClearAllTasks = () => {
    setShowClearTasksModal(true);
    setShowMenu(false);
    setTodos([]);

    const { removeItem } = useLocalStorage("todos");
    removeItem();

    toast.success("All Tasks Removed", {
      icon: (
        <CheckCircleIcon className="w-6 h-6 text-sky-900 dark:text-sky-100" />
      ),
      duration: 1500,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute w-full h-full z-[999] flex items-center justify-center"
    >
      <div className="bg-white w-[80%] p-3 z-10 rounded-md dark:bg-sky-900 dark:text-sky-50">
        <p className="mb-4">
          Are you sure you want to remove all tasks? This action cannot be
          undone.
        </p>
        <div className="flex justify-around gap-2">
          <button
            onClick={handleClearAllTasks}
            type="button"
            className="flex-1 py-2 text-white rounded-sm hover:bg-sky-400 bg-sky-500 "
          >
            Yes, I'm sure
          </button>
          <button
            type="button"
            onClick={() => setShowClearTasksModal(false)}
            className="flex-1 py-2 rounded-sm outline outline-sky-500 outline-1 hover:bg-sky-500 active:bg-sky-500 active:text-white hover:text-white"
          >
            Cancel
          </button>
        </div>
      </div>
      <div className="absolute w-full h-full bg-black opacity-40"></div>
    </motion.div>
  );
}
