import React from "react";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { easeInOut, motion, spring } from "framer-motion";
import { useLocalStorage } from "../utils/useLocalStorage";
import {
  SunIcon,
  MoonIcon,
  TrashIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

useLocalStorage;

export default function Menu({ setShowMenu, setTodos, setDarkMode, darkMode }) {
  const { setItem } = useLocalStorage("theme");
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);

    if (darkMode) setItem("light");
    else setItem("dark");
  };

  const handleClearAllTasks = () => {
    setShowMenu(false);
    setTodos([]);

    const { removeItem } = useLocalStorage("todos");
    removeItem();
  };

  return (
    <div className="fixed left-0 top-0 z-[999] w-full sm:absolute sm:h-full h-[100vh] text-neutral-800 ">
      <motion.div
        initial={{ opacity: 0, x: "-100%" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.25, ease: easeInOut }}
        className="w-[85%] z-20 absolute h-full bg-white dark:bg-sky-950 dark:text-white"
      >
        {/* HEADER */}
        <header className="flex items-center justify-between w-full gap-2 px-4 py-3 mb-2 text-xl font-bold text-gray-700 border-b text-end md:text-2xl md:gap-5 ">
          <h1 className="dark:text-white">
            Gotta<span className="text-sky-500 dark:text-sky-400">Dos</span>
          </h1>
          <XMarkIcon
            className="w-6 h-6 dark:text-white"
            onClick={() => setShowMenu(false)}
          />
        </header>

        {/* MENU BUTTONS*/}
        <ul className="flex flex-col text-lg">
          <li>
            <button
              className="flex items-center w-full gap-4 px-4 py-3 transition text-start hover:bg-sky-500 active:bg-sky-500 hover:text-white active:text-white"
              type="button"
              onClick={() => setShowMenu(false)}
            >
              <DocumentMagnifyingGlassIcon
                className="w-6 h-6 text-sky-500"
                aria-hidden="true"
              />
              About
            </button>
          </li>
          <li>
            <button
              className="flex items-center w-full gap-4 px-4 py-3 transition text-start active:bg-sky-500 active:text-white"
              type="button"
              onClick={toggleDarkMode}
            >
              {darkMode ? (
                <MoonIcon
                  className="w-6 h-6 text-blue-500"
                  aria-hidden="true"
                />
              ) : (
                <SunIcon
                  className="w-6 h-6 text-yellow-500"
                  aria-hidden="true"
                />
              )}
              Current Theme: {darkMode ? "Dark" : "Light"}
            </button>
          </li>
          <li>
            <button
              className="flex items-center w-full gap-4 px-4 py-3 transition text-start hover:bg-sky-500 active:bg-sky-500 hover:text-white active:text-white"
              type="button"
              onClick={handleClearAllTasks}
            >
              <TrashIcon className="w-6 h-6 text-red-500" aria-hidden="true" />
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
