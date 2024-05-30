"use client";
import type { MissionCardProps } from "@/app/data/missions";
import { Button } from "../ui/moving-border";
const MissionCard: React.FC<MissionCardProps> = ({
  title,
  description,
  image,
  points,
  onClick,
}) => {
  return (
    <div
      className="w-full flex flex-col h-48 border rounded-md"
      onClick={onClick}
    >
      <h2 className="text-2xl text-zinc-300 font-bold">{title}</h2>
      <p className="text-sm text-slate-300 overflow-hidden overflow-ellipsis h-16">
        {description}
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span>+{points} GNESS Point</span>
        <button
          className="bg-red-500/40 text-zinc-300 px-4 py-2 rounded-md"
          onClick={onClick}
        >
          Complete
        </button>
      </div>
    </div>
  );
};

export default MissionCard;
