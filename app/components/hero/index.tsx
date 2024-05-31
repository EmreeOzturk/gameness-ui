import Image from "next/image";
import Xicon from "../icons/Xicon";
import Link from "next/link";
import { TextGenerateEffect } from "../ui/text-generate-effect";
const words = ` Claim, Compete, Conquer Your DATS Project Airdrop Awaits!`;
const HeroSection = () => {
  return (
    <div className="flex w-full flex-col  lg:flex-row items-center justify-center h-screen ">
      <div className=" w-full   lg:w-1/2 h-full items-start lg:mr-auto justify-center flex flex-col gap-4">
        <div className="flex flex-col items-center justify-center gap-4 w-full">
          <TextGenerateEffect
            className="text-2xl w-96 lg:text-3xl text-center  font-normal text-slate-300"
            words={words}
          />
          <div className="bg-gradient-to-br text-center from-cyan-800 to-zinc-300 text-clip bg-clip-text text-transparent text-5xl lg:text-7xl font-bold">
            <h1>
              DATS Project <br /> AIRDROP
            </h1>
          </div>
        </div>
        <div className="w-full h-1.5 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
        <Link
          href="/missions"
          className="px-4 py-2 rounded-full relative mt-4 lg:mt-10 bg-transparent mx-auto text-zinc-300 text-lg font-bold hover:shadow-md w-1/2 hover:shadow-white/[0.1] transition duration-200 border border-slate-600"
        >
          <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-xl  bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
          <div className="relative  flex justify-center items-center gap-2 z-20">
            <Xicon />
            <p>Claim Now</p>
          </div>
        </Link>
      </div>
      <div className="lg:absolute relative z-10 bg-clip-text right-0 lg:top-14 bottom-0 w-2/3 lg:w-1/2 h-full lg:h-4/5 ">
        <Image
          src="/beyaz2.png"
          alt="Hero"
          className="object-contain bg-transparent "
          fill
        />
      </div>
    </div>
  );
};

export default HeroSection;
