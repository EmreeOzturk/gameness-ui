import Image from "next/image";
import Xicon from "../icons/Xicon";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between h-screen ">
      <div className=" w-1/2 h-full flex flex-col gap-4">
        <h2 className="text-3xl md:text-3xl text-center font-normal text-slate-300">
          Claim, Compete, Conquer <br /> Your Gameness Airdrop Awaits!
        </h2>
        <div className="bg-gradient-to-br text-center from-red-800 to-zinc-300 text-clip bg-clip-text text-transparent text-7xl font-bold">
          <h1>
            GAMENESS <br /> AIRDROP
          </h1>
        </div>
        <div className="w-full h-1.5 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
        <Link
            href="/missions"
        className="px-4 py-2 rounded-full relative mt-10 bg-transparent mx-auto text-zinc-300 text-lg font-bold hover:shadow-md w-1/2 hover:shadow-white/[0.1] transition duration-200 border border-slate-600">
          <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-xl  bg-gradient-to-r from-transparent via-red-500 to-transparent" />
          <div className="relative  flex justify-center items-center gap-2 z-20">
            <Xicon />
            <p>Claim Now</p>
          </div>
        </Link>
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
