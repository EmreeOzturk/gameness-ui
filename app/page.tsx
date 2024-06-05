import HeroSection from "./components/hero";
import { BackgroundBeams } from "./components/ui/background-beams";
import Header from "./components/header";

export default function Home() {
  return (
    <main className="flex select-none flex-col items-center overflow-hidden justify-center">
      <div className="pt-8  z-40">
        <Header />
      </div>
      <HeroSection />
      <BackgroundBeams />
    </main>
  );
}
