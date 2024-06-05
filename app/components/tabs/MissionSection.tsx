import { TaskSchema } from "@/app/data/missions";
import React from "react";
import MissionCard from "../missions/MissionCard";
import { auth } from "@/auth";
import { Session } from "next-auth";

type MissionSectionProps = {
  title?: string;
  data?: TaskSchema[];
};

const MissionSection: React.FC<MissionSectionProps> = async ({
  title,
  data,
}) => {
  const session = (await auth()) as Session;
  return (
    <div className="no-visible-scrollbar flex flex-col   mb-6 rounded-xl h-full w-full lg:w-1/2 bgitems-start justify-start">
      <p className="text-center w-full">{title}</p>
      <div className="gap-4  flex flex-col lg:p-4 w-full">
        {data?.map((mission, index) => (
          <MissionCard
            key={mission._id}
            _id={mission._id}
            mission_description={mission.mission_description}
            mission_point={mission.mission_point}
            mission_title={mission.mission_title}
            mission_type={mission.mission_type}
            mission_joiners={mission.mission_joiners}
            mission_link={mission.mission_link}
            mobile_mission_link={mission.mobile_mission_link}
            isDone={session.user?.finishedMissions.includes(mission._id)}
            userId={session.user?._id}
          />
        ))}
      </div>
    </div>
  );
};

export default MissionSection;
