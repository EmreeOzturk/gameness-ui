import { MissionCardProps } from "@/app/data/missions";
import React from "react";
import MissionCard from "../missions/MissionCard";

type MissionSectionProps = {
  title?: string;
  data?: MissionCardProps[];
};

const MissionSection: React.FC<MissionSectionProps> = ({ title, data }) => {
  return (
    <div className="no-visible-scrollbar flex flex-col   mb-6 rounded-xl h-full w-full lg:w-1/2 bgitems-start justify-start">
      <p className="text-center w-full">{title}</p>
      <div className="gap-4  flex flex-col lg:p-4 w-full">
        {data?.map((mission, index) => (
          <MissionCard
            key={index}
            title={mission.title}
            description={mission.description}
            points={mission.points}
          />
        ))}
      </div>
    </div>
  );
};

export default MissionSection;
