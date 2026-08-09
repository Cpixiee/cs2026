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
      {/* Y2K Scrapbook Background Texture Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-30 pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDjfgcXkP7UzZPHKnuf1GusYMY_xyXq5hrUZOC2KooovQvj5cRsOH0992zTjPPmNimaKL8AGlGiszNCanRIlFEYh7KetJwV9doNgNSnOCIxVkCQ7e-XUo_eNS3mwNVrJ2Lh6KwXs4guEhaeIKJh9DsG1453IpL6bl2FfO9PHH1ymRHEZ5pIP0S8A_t1i9FCUczgiDK31VRyLDcnz0uzB8myOEcnm9jXTZlRwELJtOhohm0-aQfgzFq1pw')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "repeat-y",
        }}
      />

      {/* Top Header Navigation */}
      <Header />

      {/* Top Ribbon Marquee Banner (Pushed down slightly for fixed header offset) */}
      <div className="mt-16 md:mt-20 z-40">
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
