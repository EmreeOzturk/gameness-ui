import Image from "next/image";
import HeroSection from "./components/hero";
import { BackgroundBeams } from "./components/ui/background-beams";

export default function Home() {
  return (
    <main className="flex items-center justify-center">
      <HeroSection />
      <BackgroundBeams />
    </main>
  );
}
