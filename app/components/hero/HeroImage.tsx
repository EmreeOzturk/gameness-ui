import Image from "next/image";

const HeroImage = () => {
  return (
    <div className="relative z-10 w-full hidden lg:flex lg:w-1/2 h-full  ">
      <Image
        src="/mavi2.png"
        alt="Hero"
        className="object-contain bg-transparent  h-full"
        fill
      />
    </div>
  );
};

export default HeroImage;
