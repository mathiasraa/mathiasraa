"use client";

import { Variants, motion } from "framer-motion";
import { type PropsWithChildren } from "react";

export const AnimatedBlock: React.FC<
  PropsWithChildren & { index: number; className?: string }
> = ({ children, className, index }) => {
  const variants: Variants = {
    hidden: {
      y: 30,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.5,
        delay: 0.3 * index,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      viewport={{ once: true }}
      key={index}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};
