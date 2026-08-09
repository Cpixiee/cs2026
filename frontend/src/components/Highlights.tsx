"use client";

import { motion } from "framer-motion";
import { Save, Sparkles, Hand } from "lucide-react";

export default function Highlights() {
  const cards = [
    {
      title: "DIGITAL ARCHIVES",
      bg: "bg-[#B5F43C]",
      rotate: "-rotate-2 hover:rotate-1",
      icon: Save,
      badgeRotate: "rotate-6",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.",
    },
    {
      title: "WEB AESTHETICS",
      bg: "bg-[#FF66C4]",
      rotate: "rotate-2 hover:-rotate-1",
      icon: Sparkles,
      badgeRotate: "-rotate-6",
      desc: "Donec ac fringilla turpis. Aliquam id erat non libero venenatis condimentum. Phasellus quis dui quis enim dignissim aliquet.",
    },
    {
      title: "COMMUNITY",
      bg: "bg-[#29D3E8]",
      rotate: "-rotate-1 hover:rotate-2",
      icon: Hand,
      badgeRotate: "rotate-12",
      desc: "Maecenas ultricies nisl eu ipsum suscipit, id placerat justo consequat. Mauris non erat mauris. Sed fermentum justo id turpis.",
    },
  ];

  return (
    <section className="w-full max-w-6xl z-30 mb-20 relative px-4 mx-auto">
      {/* Section Title Badge */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="inline-block font-rubik font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase rotate-1 bg-[#1800AC] px-8 py-3 border-[3px] border-[#1C1C17] shadow-brutal-lg tracking-wider"
        >
          WHAT TO EXPECT
        </motion.h2>
      </div>

      {/* Grid of 3 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
        {cards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className={`${card.bg} border-[3px] border-[#1C1C17] p-6 shadow-brutal-lg ${card.rotate} transition-all duration-300 rounded-2xl flex flex-col items-center text-center relative overflow-hidden bg-dots`}
            >
              {/* Top Badge Icon */}
              <div
                className={`bg-white border-[3px] border-[#1C1C17] rounded-full p-4 shadow-brutal-sm mb-4 -mt-11 ${card.badgeRotate} transition-transform hover:scale-110`}
              >
                <Icon className="w-8 h-8 text-[#1800AC]" />
              </div>

              {/* Card Content Area */}
              <div className="bg-white/95 border-[3px] border-[#1C1C17] p-5 rounded-xl w-full flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-rubik font-black text-2xl text-[#1800AC] mb-3 uppercase tracking-wide">
                    {card.title}
                  </h3>
                  <p className="font-jakarta font-bold text-[#1C1C17] text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
