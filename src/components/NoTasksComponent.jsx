import React from "react";
import notaskImage from "../assets/Checklist-bro.svg";
import { AnimatePresence, motion } from "framer-motion";

export default function NoTasksComponent() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
      >
        <img
          className="mx-auto w-[50%]"
          src={notaskImage}
          alt="no tasks image"
        />
        <p className="mx-auto text-center text-base text-gray-400 max-w-[45ch] px-8">
          Seems like you don't have any tasks yet. Add a task to display tasks.
        </p>
      </motion.div>
    </AnimatePresence>
  );
}
