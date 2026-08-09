"use client";

import FloatingSticker from "./FloatingSticker";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[65vh] flex flex-col items-center justify-center pt-12 pb-16 px-4 overflow-hidden bg-dots-light">
      {/* Absolute Decorative Y2K Stickers */}
      <FloatingSticker
        icon="local_florist"
        color="#FFFFFF"
        size={80}
        top="8%"
        left="8%"
        rotation={-15}
        floatDuration={4.5}
      />
      <FloatingSticker
        icon="sentiment_satisfied"
        color="#EFE83C"
        size={95}
        top="10%"
        right="12%"
        rotation={20}
        floatDuration={3.8}
      />
      <FloatingSticker
        icon="rocket_launch"
        color="#29D3E8"
        size={110}
        top="42%"
        left="5%"
        rotation={10}
        floatDuration={4}
      />
      <FloatingSticker
        icon="public"
        color="#9D4EDD"
        size={120}
        top="35%"
        right="5%"
        rotation={-10}
        floatDuration={5}
      />
      <FloatingSticker
        icon="star"
        color="#B5F43C"
        size={65}
        top="22%"
        right="22%"
        rotation={45}
        floatDuration={3.2}
      />
      <FloatingSticker
        icon="favorite"
        color="#FF66C4"
        size={85}
        bottom="12%"
        right="10%"
        rotation={-25}
        floatDuration={4.2}
      />
      <FloatingSticker
        icon="local_florist"
        color="#FFFFFF"
        size={70}
        bottom="10%"
        left="12%"
        rotation={15}
        floatDuration={4.8}
      />
      <FloatingSticker
        icon="bolt"
        color="#EFE83C"
        size={75}
        bottom="25%"
        left="45%"
        rotation={-5}
        floatDuration={3.5}
      />

      {/* Main Hero Banner */}
      <div className="text-center z-30 flex flex-col items-center max-w-4xl w-full px-4 mb-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -4 }}
          animate={{ opacity: 1, scale: 1, rotate: -2 }}
          transition={{ duration: 0.6, ease: "backOut" }}
          whileHover={{ rotate: 0, scale: 1.02 }}
          className="relative mb-6 cursor-default"
        >
          <h1 className="font-rubik font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white uppercase tracking-tight leading-none sticker-text-white select-none">
            COMING<br className="sm:hidden" /> SOON!!!
          </h1>

          {/* Yellow Bolt Badge */}
          <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-12 h-12 md:w-16 md:h-16 bg-[#EFE83C] border-[3px] border-[#1C1C17] rounded-full flex items-center justify-center shadow-brutal hover:scale-110 transition-transform">
            <Zap className="w-6 h-6 md:w-8 md:h-8 text-[#1C1C17] fill-[#1C1C17]" />
          </div>
        </motion.div>

        {/* Subtitle Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ rotate: -1, scale: 1.01 }}
          className="bg-white border-[3px] border-[#1C1C17] p-6 shadow-brutal-lg rotate-1 transition-transform max-w-2xl mx-auto rounded-xl relative"
        >
          <p className="font-jakarta font-extrabold text-[#1800AC] text-lg sm:text-xl md:text-2xl leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Prepare for the ultimate digital scrapbook experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
