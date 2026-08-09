"use client";

import { motion } from "framer-motion";

interface StickerProps {
  icon: string;
  color: string;
  size: number;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  rotation?: number;
  floatDuration?: number;
}

export default function FloatingSticker({
  icon,
  color,
  size,
  top,
  bottom,
  left,
  right,
  rotation = 0,
  floatDuration = 4,
}: StickerProps) {
  return (
    <motion.div
      style={{
        position: "absolute",
        top,
        bottom,
        left,
        right,
        zIndex: 20,
      }}
      initial={{ rotate: rotation, scale: 0.9 }}
      animate={{
        y: [0, -12, 0],
        rotate: [rotation, rotation + 5, rotation],
      }}
      transition={{
        duration: floatDuration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{ scale: 1.2, rotate: rotation + 15 }}
      whileTap={{ scale: 0.9 }}
      className="cursor-pointer select-none block"
    >
      <span
        className="material-symbols-outlined transition-transform filter drop-shadow-[5px_5px_0px_#1C1C17]"
        style={{
          fontSize: `${size}px`,
          color: color,
          fontVariationSettings: "'FILL' 1",
          WebkitTextStroke: "3.5px #1C1C17",
        }}
      >
        {icon}
      </span>
    </motion.div>
  );
}
