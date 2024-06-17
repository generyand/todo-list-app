import React from "react";
import { motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function AboutModal({ setShowAboutModal }) {
  const handleAbout = () => {
    setShowAboutModal(!true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute w-full h-full z-[999] flex items-center justify-center"
    >
      <div className="bg-white w-[80%] p-3 z-10 rounded-md dark:bg-sky-900 dark:text-sky-50">
        <header className="flex justify-between mb-4">
          <h1 className="font-bold">
            Gotta<span className=" text-sky-500 dark:text-sky-400">Dos</span>
          </h1>

          <XMarkIcon
            className="w-6 h-6 cursor-pointer text-end dark:text-white"
            onClick={handleAbout}
          />
        </header>
        <div className="flex flex-col gap-4 text-sky-900 dark:text-sky-50">
          <p className="">
            <span className="font-bold">
              Gotta<span className="text-sky-500 dark:text-sky-400">Dos</span>
            </span>{" "}
            is a straightforward to-do list application designed to help you
            manage your tasks with ease. Simply add your tasks, and cross them
            off once completed.
          </p>
          <p>
            As a developer, I know how easy it is to get bogged down by
            complexity. That's why I created{" "}
            <span className="font-bold">
              Gotta<span className="text-sky-500 dark:text-sky-400">Dos</span>
            </span>{" "}
            — a simple to-do list app that lets you focus on what matters most.
            Let's get things done together!
          </p>

          <p className="">Hi, Jamie Denise Corte ng Manila! 🙋‍♂️😊</p>
          <p className="mt-4 text-xs text-center">
            © 2024{" "}
            <a
              href="https://github.com/generyand"
              target="_blank"
              className="text-sky-500"
            >
              Gene Ryan
            </a>{" "}
            | All Rights Reserved
          </p>
        </div>
      </div>
      <div
        onClick={handleAbout}
        className="absolute w-full h-full bg-black opacity-40"
      ></div>
    </motion.div>
  );
}
