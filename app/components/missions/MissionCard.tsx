"use client";
import type { MissionCardProps } from "@/app/data/missions";
import { WobbleCard } from "../ui/wobble-card";
const MissionCard: React.FC<MissionCardProps> = ({
  title,
  description,
  image,
  points,
  onClick,
}) => {
  return (
    <WobbleCard containerClassName="h-48 relative select-none">
      <div className="">
        {/* <div className="w-14 h-14 rounded-md bg-gray-900 flex justify-center items-center">
          icon
        </div> */}
        <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold bg-gradient-to-br from-slate-200 to-slate-500 text-transparent tracking-tight  bg-clip-text">
          {title}
        </h2>
        <p className="mt-4 text-left  text-base/6 text-neutral-200">
          {description}
        </p>
        <p className="mt-4 text-left text-base/6 text-neutral-200">
          +{points} XP
        </p>
        <button className="absolute rounded-xl px-6 py-2 border-[.2px] border-sky-400 right-5 bottom-5 bg-gradient-to-br from-sky-200 to-sky-500 text-transparent text-base/6 bg-clip-text">
          Start
        </button>
      </div>
    </WobbleCard>
  );
};

export default MissionCard;
