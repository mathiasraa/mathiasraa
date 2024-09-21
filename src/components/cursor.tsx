"use client";

import dynamic from "next/dynamic";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

export const Cursor: React.FC = () => {
  return <AnimatedCursor color="115, 172, 76" />;
};

export default Cursor;
