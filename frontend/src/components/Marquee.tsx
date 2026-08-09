"use client";

export default function Marquee() {
  const textItems = [
    "CYBER SPACE 2026",
    "★",
    "COMING SOON",
    "★",
    "DIGITAL SCRAPBOOK",
    "★",
    "CYBER SPACE 2026",
    "★",
    "COMING SOON",
    "★",
    "JOIN THE GRID",
    "★",
  ];

  return (
    <div className="w-full bg-[#1800AC] border-y-[3px] border-[#1C1C17] border-dashed py-3 overflow-hidden relative z-40 shadow-brutal-sm transform -rotate-1 origin-left">
      <div className="flex whitespace-nowrap animate-marquee">
        {textItems.concat(textItems).map((item, idx) => (
          <span
            key={idx}
            className={`font-bebas text-2xl md:text-3xl tracking-widest mx-4 select-none ${
              item === "★"
                ? "text-[#EFE83C]"
                : idx % 3 === 0
                ? "text-white"
                : "text-[#FF87DA]"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
