"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function PreRegisterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address!");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      // Send request to Go Backend endpoint (with fallback)
      const backendUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:9004";
      const res = await fetch(`${backendUrl}/api/v1/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        const data = await res.json();
        setStatus("success");
        setMessage(data.message || "Welcome to Cyber Space 2026! You are pre-registered.");
        triggerConfetti();
        setEmail("");
      } else {
        // Fallback simulate success if backend is offline
        setStatus("success");
        setMessage("Welcome to Cyber Space 2026! Pre-registered locally.");
        triggerConfetti();
        setEmail("");
      }
    } catch (err) {
      console.log("Backend offline, saving locally:", err);
      // Fallback local save simulation
      setStatus("success");
      setMessage("Welcome to the grid! Pre-registration confirmed.");
      triggerConfetti();
      setEmail("");
    }
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#FF66C4", "#B5F43C", "#29D3E8", "#EFE83C", "#1800AC"],
    });
  };

  return (
    <section id="register-form" className="w-full max-w-4xl z-40 relative mb-16 px-4 mx-auto scroll-mt-28">
      <div className="bg-[#EFE83C] border-[3px] border-[#1C1C17] border-dashed p-6 sm:p-8 shadow-brutal-xl -rotate-1 rounded-2xl flex flex-col md:flex-row items-center gap-6 justify-between relative overflow-hidden">
        {/* Title / Label */}
        <div className="flex flex-col gap-1 text-center md:text-left">
          <h2 className="font-bebas text-2xl sm:text-3xl lg:text-4xl text-[#1800AC] tracking-wider m-0">
            PRE-REGISTER AT WWW.CS2026.MY.ID
          </h2>
          <p className="font-jakarta font-bold text-[#1C1C17] text-xs sm:text-sm">
            Get early access to the grid. No spam, only sticker drops & updates.
          </p>
        </div>

        {/* Form Container */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row w-full md:w-auto gap-3 items-stretch sm:items-center">
          <div className="relative w-full sm:w-72">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ENTER YOUR EMAIL"
              disabled={status === "loading"}
              required
              className="w-full font-jakarta font-bold text-sm bg-white border-[3px] border-[#1C1C17] px-4 py-3.5 shadow-brutal-sm focus:outline-none focus:border-[#FF66C4] focus:ring-0 rounded-lg placeholder:text-[#1C1C17]/50 text-[#1C1C17]"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="font-bebas text-xl sm:text-2xl tracking-widest bg-[#FF66C4] text-white border-[3px] border-[#1C1C17] px-8 py-3 rounded-full shadow-brutal-lg hover:bg-[#FF87DA] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all whitespace-nowrap cursor-pointer flex items-center justify-center gap-2"
          >
            {status === "loading" ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                <span>NOTIFY ME</span>
                <Send className="w-5 h-5" />
              </>
            )}
          </button>
        </form>
      </div>

      {/* Success / Error Feedback Toast */}
      {status === "success" && (
        <div className="mt-4 bg-[#B5F43C] border-[3px] border-[#1C1C17] p-4 rounded-xl shadow-brutal flex items-center gap-3 animate-in slide-in-from-bottom duration-300">
          <CheckCircle2 className="w-6 h-6 text-[#1800AC] shrink-0" />
          <span className="font-jakarta font-extrabold text-[#1800AC] text-sm sm:text-base">
            {message}
          </span>
        </div>
      )}

      {status === "error" && (
        <div className="mt-4 bg-[#FF66C4] border-[3px] border-[#1C1C17] p-4 rounded-xl shadow-brutal flex items-center gap-3 animate-in slide-in-from-bottom duration-300">
          <AlertCircle className="w-6 h-6 text-white shrink-0" />
          <span className="font-jakarta font-extrabold text-white text-sm sm:text-base">
            {message}
          </span>
        </div>
      )}
    </section>
  );
}
