import mockMissionData from "@/app/data/missions";
import React from "react";
import MissionCard from "../missions/MissionCard";

type MissionSectionProps = {
  title: string;
};

const MissionSection: React.FC<MissionSectionProps> = ({ title }) => {
  return (
    <div className="no-visible-scrollbar flex flex-col pt-36 overflow-y-auto  border rounded-xl py-4 h-[90%] w-1/2 items-start justify-center">
      <p>{title}</p>
      <div className="gap-4 mt-20 flex flex-col p-4 w-full">
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
