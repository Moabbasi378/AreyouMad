"use client";

import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";

export const MainBox: React.FC = () => {
  const [isMad, setIsMad] = useState<boolean | null>(null);
  const yesButtonControls = useAnimation();

  const handleQuestion = () => {
    const answer = Math.random() < 0.5;
    setIsMad(answer);
  };

  const handleYesButtonHover = async () => {
    const maxX = window.innerWidth / 4;
    const maxY = window.innerHeight / 4;

    await yesButtonControls.start({
      x: Math.random() * maxX,
      y: Math.random() * maxY,
    });

    await yesButtonControls.start({});
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl mb-4">از دست من ناراحتی؟</h1>
      {isMad === null ? (
        <div>
          <motion.button
            className="py-2 px-4 bg-blue-500 text-white rounded-md mr-4"
            onClick={handleQuestion}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            نه
          </motion.button>
          <motion.button
            className="py-2 px-4 bg-red-500 text-white rounded-md"
            initial={{ opacity: 1 }}
            animate={yesButtonControls}
            onHoverStart={handleYesButtonHover}
          >
            آره
          </motion.button>
        </div>
      ) : (
        <h2 className="text-2xl mt-4">میدونستم</h2>
      )}
    </div>
  );
};
