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
    <WobbleCard containerClassName="col-span-1  h-full bg-transparent">
      <div>
        <div className="w-14 h-14 rounded-md bg-gray-900 flex justify-center items-center">
          icon
        </div>
        <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold bg-gradient-to-br from-slate-200 to-slate-500 text-transparent tracking-tight  bg-clip-text">
          {title}
        </h2>
        <p className="mt-4 text-left  text-base/6 text-neutral-200">
          {description}
        </p>
      </div>
    </WobbleCard>
  );
};

export default MissionCard;
