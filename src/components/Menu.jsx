import React from "react";
import Header from "./Header";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { AnimatePresence, easeInOut, motion, spring } from "framer-motion";
import { useLocalStorage } from "../utils/useLocalStorage";
useLocalStorage;

export default function Menu({ setShowMenu, setTodos }) {
  const handleClearAllTasks = () => {
    setShowMenu(false);
    setTodos([]);
    const { removeItem } = useLocalStorage("todos");
    removeItem();
  };

  return (
    <div className="fixed left-0 right-0 z-10 w-full h-[100vh] md:h-auto sm:static">
      <motion.div
        initial={{ opacity: 0, x: "-100%" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.25, ease: easeInOut }}
        className="w-[85%] z-20 absolute h-full bg-white  border"
      >
        <header className="flex items-center justify-between w-full gap-2 px-2 py-3 mb-2 text-xl font-bold text-gray-700 border-b text-end md:text-2xl md:gap-5">
          <h1 className="">
            Gotta<span className="text-sky-500">Dos</span>
          </h1>
          <XMarkIcon
            className="w-6 h-6 mx-2"
            onClick={() => setShowMenu(false)}
          />
        </header>
        <ul className="flex flex-col text-lg">
          <li>
            <button
              className="w-full p-3 transition text-start hover:bg-sky-500 active:bg-sky-500 hover:text-white active:text-white"
              type="button"
              onClick={() => setShowMenu(false)}
            >
              About
            </button>
          </li>
          <li>
            <button
              className="w-full p-3 transition text-start hover:bg-sky-500 active:bg-sky-500 hover:text-white active:text-white"
              type="button"
              onClick={() => setShowMenu(false)}
            >
              Theme
            </button>
          </li>
          <li>
            <button
              className="w-full p-3 transition text-start hover:bg-sky-500 active:bg-sky-500 hover:text-white active:text-white"
              type="button"
              onClick={handleClearAllTasks}
            >
              Clear All Tasks
            </button>
          </li>
        </ul>
      </motion.div>

      <motion.div
        onClick={() => setShowMenu(false)}
        initial={{ opacity: 0 }}
        animate={{ opacity: "40%" }}
        className="absolute z-10 w-full h-full bg-black opacity-40 outlined"
      ></motion.div>
    </div>
  );
}
