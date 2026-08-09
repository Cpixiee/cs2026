import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cs2026.my.id"),
  title: "Cyber Space 2026 ★ Ultimate Digital Scrapbook Experience",
  description: "Prepare for Cyber Space 2026. Digital Archives, Web Aesthetics, and Community. Pre-register now at www.cs2026.my.id!",
  keywords: ["cs2026.my.id", "Cyber Space 2026", "Digital Scrapbook", "Y2K", "Cyberpop", "Web Aesthetics"],
  authors: [{ name: "Cyberpop Mission Control" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased light">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col selection:bg-[#FF66C4] selection:text-white bg-[#FBF9F0] text-[#1C1C17]">
        {children}
      </body>
    </html>
  );
}
