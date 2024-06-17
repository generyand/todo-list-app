import { Bars3BottomLeftIcon } from "@heroicons/react/16/solid";
import React from "react";

export default function Header() {
  return (
    <header className="absolute flex items-center gap-2 p-2 mb-2 text-xl font-bold text-gray-700 text-end md:text-2xl md:gap-5">
      <Bars3BottomLeftIcon className="w-6 h-6 " />
      <h1 className="">GottaDos</h1>
    </header>
  );
}
