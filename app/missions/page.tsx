import Link from "next/link";
import MissionCard from "../components/missions/MissionCard";
import { BackgroundBeams } from "../components/ui/background-beams";
import mockMissionData from "../data/missions";
import { Xicon } from "../components/icons";
import InfoCard from "../components/missions/InfoCard";
const MissionsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full pt-32">
      <div className=" w-full   lg:w-full h-full items-start lg:mr-auto justify-center flex flex-col gap-4">
        <div className="flex flex-col items-center justify-center gap-4 w-full">
          <div className="bg-gradient-to-br text-center from-red-800 to-zinc-300 text-clip bg-clip-text text-transparent text-5xl lg:text-7xl font-bold">
            <h1>
              GNESS <br /> POINTS
            </h1>
          </div>
          {/* <h2 className="text-2xl lg:text-3xl text-center  font-bold text-zinc-300">
            GNESS POINTS
          </h2> */}
          <div className="flex items-center px-16 py-8 w-full justify-between ">
            <InfoCard title={"MISSIONS COMPLETED"} data={10} />
            <InfoCard title={"TOTAL REFERRALS"} data={100} />
            <InfoCard title={"REFERRAL POINTS"} data={20} />
            <InfoCard title={"REFERRAL MULTIPLER"} data={4} />
          </div>
        </div>
        <div className="w-full h-1.5 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4 mt-10 w-full">
        {mockMissionData.map((mission, index) => (
          <MissionCard
            key={index}
            title={mission.title}
            description={mission.description}
            points={mission.points}
          />
        ))}
        {/* <BackgroundBeams /> */}
      </div>
    </div>
  );
};

export default MissionsPage;
