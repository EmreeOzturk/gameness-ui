import CTASection from "./CTASection";
import HeroImage from "./HeroImage";
const HeroSection = () => {
  return (
    <div className="flex w-full flex-col-reverse -mt-20 md:mt-0 gap-8  md:pt-0 overflow-hidden md:flex-row items-center justify-center h-screen ">
      <CTASection />
      <HeroImage />
    </div>
  );
};

export default HeroSection;
