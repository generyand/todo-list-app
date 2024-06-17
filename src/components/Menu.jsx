import React from "react";
import Header from "./Header";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { AnimatePresence, easeInOut, motion, spring } from "framer-motion";
import { useLocalStorage } from "../utils/useLocalStorage";
import { DocumentIcon } from "@heroicons/react/16/solid";
import { DocumentMagnifyingGlassIcon } from "@heroicons/react/16/solid";
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
              className="flex items-center w-full gap-4 p-5 transition text-start hover:bg-sky-500 active:bg-sky-500 hover:text-white active:text-white"
              type="button"
              onClick={() => setShowMenu(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="text-sky-400 size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                />
              </svg>
              About
            </button>
          </li>
          <li>
            <button
              className="flex items-center w-full gap-4 p-5 transition text-start hover:bg-sky-500 active:bg-sky-500 hover:text-white active:text-white"
              type="button"
              onClick={() => setShowMenu(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="text-yellow-500 size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
              Theme
            </button>
          </li>
          <li>
            <button
              className="flex items-center w-full gap-4 p-5 transition text-start hover:bg-sky-500 active:bg-sky-500 hover:text-white active:text-white"
              type="button"
              onClick={handleClearAllTasks}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="text-red-500 size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
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
