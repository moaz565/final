import Navbar from "@/components/Navbar";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";
import SelectedWorks from "@/components/SelectedWorks";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen text-charcoal font-display">
      {/* Main content wrapper */}
      <div className="relative z-10 bg-paynes-grey shadow-2xl">
        <Navbar />

        <ScrollExpandMedia
          mediaSrc="/vid/14522333_3840_2160_25fps.mp4"
          bgImageSrc="/vid/I_want_an_2k_202601012257.jpeg"
          mediaType="video"
          title="DIGITAL CRAFTSMAN"
          scrollToExpand="Scroll to Expand"
          textBlend={true}
        >
          <div className="flex flex-col items-center gap-6 mt-4 text-center">
            <p className="max-w-2xl text-lg md:text-xl text-gray-600 leading-relaxed font-light text-center">
              Senior Full Stack Developer specializing in building exceptional digital experiences. Based in San Francisco, working globally.
            </p>
            <div className="flex flex-col items-center gap-2 mt-4 text-white/80 animate-bounce">
              <span className="text-sm font-light tracking-wide">want to see more</span>
              <span className="material-symbols-outlined text-xl">arrow_downward</span>
            </div>
          </div>
        </ScrollExpandMedia>

        <SelectedWorks />
        <Services />

      </div>

      {/* Footer handles its own spacer */}
      <Footer />

      {/* Background grain */}
      <div className="fixed inset-0 -z-50 opacity-[0.4] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>
    </main>
  );
}
