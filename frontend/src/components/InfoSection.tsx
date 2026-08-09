"use client";

import { motion } from "framer-motion";
import { HelpCircle, Calendar, Users } from "lucide-react";

export default function InfoSection() {
  const infoCards = [
    {
      title: "WHAT IS IT?",
      color: "bg-[#c1c1ff]",
      rotate: "rotate-1 hover:-rotate-1",
      icon: HelpCircle,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "WHEN & WHERE",
      color: "bg-[#EFE83C]",
      rotate: "-rotate-2 hover:rotate-2",
      icon: Calendar,
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "JOIN THE CREW",
      color: "bg-[#FF87DA]",
      rotate: "rotate-2 hover:-rotate-2",
      icon: Users,
      text: "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida.",
    },
  ];

  return (
    <section className="w-full max-w-4xl z-30 mb-20 relative px-4 mx-auto">
      <div className="flex flex-col gap-8">
        {infoCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
              className={`${card.color} border-[3px] border-[#1C1C17] shadow-brutal-lg p-6 sm:p-8 rounded-2xl ${card.rotate} transition-transform duration-300 relative`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white border-2 border-[#1C1C17] p-2 rounded-lg shadow-brutal-sm">
                  <Icon className="w-6 h-6 text-[#1800AC]" />
                </div>
                <h3 className="font-rubik font-black text-2xl sm:text-3xl text-[#1C1C17] tracking-wide">
                  {card.title}
                </h3>
              </div>
              <p className="font-jakarta font-bold text-[#1C1C17] leading-relaxed text-base sm:text-lg">
                {card.text}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
