"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring physics for the outer cobalt ring
  const ringX = useSpring(mouseX, { stiffness: 320, damping: 28, mass: 0.4 });
  const ringY = useSpring(mouseY, { stiffness: 320, damping: 28, mass: 0.4 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest(
        "a, button, input, textarea, select, [role='button'], .cursor-pointer"
      );
      setHovered(Boolean(interactive));
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, visible]);

  if (isTouch) return null;

  return (
    <>
      {/* Outer Spring Cobalt Halo */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hovered ? 44 : 28,
          height: hovered ? 44 : 28,
          scale: clicked ? 0.85 : 1,
          opacity: visible ? 1 : 0,
          borderColor: hovered ? "rgba(56, 189, 248, 0.9)" : "rgba(56, 189, 248, 0.45)",
          backgroundColor: hovered ? "rgba(56, 189, 248, 0.1)" : "rgba(37, 99, 235, 0.04)",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className="pointer-events-none fixed top-0 left-0 z-[9998] rounded-full border shadow-[0_0_18px_rgba(56,189,248,0.35)] backdrop-blur-[1px]"
      />

      {/* Inner Precision Cyan Core Dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: clicked ? 1.5 : hovered ? 0.6 : 1,
          opacity: visible ? 1 : 0,
        }}
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-2 w-2 rounded-full bg-sky-300 shadow-[0_0_10px_#38bdf8]"
      />
    </>
  );
}