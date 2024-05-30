import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between h-screen ">
      <div className=" w-1/2 h-full flex flex-col gap-4">
        <h2>Claim, Compete, Conquer – Your Gameness Airdrop Awaits!</h2>
        <div className="bg-gradient-to-br from-red-800 to-zinc-300 text-clip bg-clip-text text-transparent text-7xl font-bold">
          <h1>
            GAMENESS <br /> AIRDROP
          </h1>
        </div>
        <div className="w-full h-1.5 bg-gradient-to-r from-red-500 to-transparent" />
        <button>Sign in with X</button>
      </div>
      <div className="md:absolute relative z-10 bg-clip-text right-0 top-10 bottom-0 w-1/2 h-56 md:h-4/5 ">
        <Image
          src="/image.webp"
          alt="Hero"
          className="object-cover bg-transparent "
          fill
        />
      </div>
    </div>
  );
};

export default HeroSection;
