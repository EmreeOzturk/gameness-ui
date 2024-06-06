import React from "react";
import signWithX from "@/app/action";
import Xicon from "../icons/Xicon";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const CTA = ` Claim, compete, conquer your DATS Project’s XPs!`;

const CTASection = () => {
  return (
    <div className=" z-20  h-full lg:w-1/2 items-start  justify-center flex flex-col gap-4">
      <div className="flex flex-col items-center justify-center gap-4 w-full">
        <TextGenerateEffect
          className="text-2xl w-96 lg:text-xl text-center  font-normal text-slate-300"
          words={CTA}
        />
        <div className="bg-gradient-to-br text-center from-cyan-800 to-zinc-300 text-clip bg-clip-text text-transparent text-4xl my-2 lg:text-7xl font-bold">
          <h1>Community Campaign</h1>
        </div>
      </div>
      <div className="w-4/5 lg:w-full mx-auto h-1.5 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
      <div className="px-4 py-2 rounded-full relative mt-4 lg:mt-6 bg-transparent mx-auto text-zinc-300 text-lg font-bold hover:shadow-md w-1/2 hover:shadow-white/[0.4] transition duration-200 border border-slate-600">
        <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-xl  bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
        <div className="relative  flex justify-center items-center gap-2 z-20">
          <form action={signWithX}>
            <button className="flex items-center gap-1" type="submit">
              Sign in with <Xicon />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
