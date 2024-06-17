import { Bars3BottomLeftIcon } from "@heroicons/react/16/solid";
import React from "react";

export default function Header({ setShowMenu }) {
  return (
    <header className="absolute flex items-center w-full gap-3 px-2 py-4 mb-2 text-xl font-bold text-gray-700 bg-white dark:bg-sky-950 dark:text-white text-end md:text-2xl md:gap-5">
      <Bars3BottomLeftIcon
        className="w-6 h-6"
        onClick={() => setShowMenu(true)}
      />
      <h1 className="">
        Gotta<span className="text-sky-500 dark:text-sky-400">Dos</span>
      </h1>
    </header>
  );
}
