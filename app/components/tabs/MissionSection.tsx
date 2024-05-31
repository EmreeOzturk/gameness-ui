import mockMissionData from "@/app/data/missions";
import React from "react";
import MissionCard from "../missions/MissionCard";

type MissionSectionProps = {
  title: string;
};

const MissionSection: React.FC<MissionSectionProps> = ({ title }) => {
  return (
    <div className="no-visible-scrollbar flex flex-col py-4 overflow-y-auto border border-blue-400 bg-blue-400/30 rounded-xl h-[90%] w-1/2 items-start justify-start">
      <p className="text-center w-full">{title}</p>
      <div className="gap-4  flex  flex-col p-4 w-full">
        {mockMissionData.map((mission, index) => (
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
