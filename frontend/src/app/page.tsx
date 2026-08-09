import Header from "@/components/Header";
import Marquee from "@/components/Marquee";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import InfoSection from "@/components/InfoSection";
import PreRegisterForm from "@/components/PreRegisterForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between relative overflow-hidden bg-[#FBF9F0] text-[#1C1C17]">
      {/* Top Header Navigation */}
      <Header />

      {/* Top Ribbon Marquee Banner (Pushed down slightly for fixed header offset) */}
      <div className="mt-16 md:mt-20">
        <Marquee />
      </div>

      {/* Main Canvas Content */}
      <main className="flex-grow flex flex-col items-center justify-start relative z-10">
        <Hero />
        <PreRegisterForm />
        <Highlights />
        <InfoSection />
      </main>

      {/* Footer Banner */}
      <Footer />
    </div>
  );
}
