"use client";
import Link from "next/link";
import MissionCard from "../components/missions/MissionCard";
import { BackgroundBeams } from "../components/ui/background-beams";
import mockMissionData from "../data/missions";
import { Xicon } from "../components/icons";
import InfoCard from "../components/missions/InfoCard";
import { Tabs } from "../components/ui/tabs";
import EpoachTab from "../components/tabs/EpoachTab";
import Image from "next/image";

const tabs = [
  {
    title: "1. Epoach",
    value: "epoach1",
    content: (
      <EpoachTab
        title="Epoach 1"
        description="Epoach 1 Description"
        points={100}
      />
    ),
  },
  {
    title: "2. Epoach",
    value: "epoach2",
    content: (
      <EpoachTab
        title="Epoach 2"
        description="Epoach 2 Description"
        points={200}
      />
    ),
  },
  {
    title: "3. Epoach",
    value: "epoach3",
    content: (
      <EpoachTab
        title="Epoach 3"
        description="Epoach 3 Description"
        points={300}
      />
    ),
  },
  {
    title: "4. Epoach",
    value: "epoach4",
    content: (
      <EpoachTab
        title="Epoach 4"
        description="Epoach 4 Description"
        points={400}
      />
    ),
  },
];

const MissionsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full pt-32">
      <div className=" w-full lg:w-full h-full items-start lg:mr-auto justify-center flex flex-col gap-4">
        <div className="flex flex-col items-center justify-center gap-4 w-full">
          <div className="bg-gradient-to-br text-center from-red-800 to-zinc-300 text-clip bg-clip-text text-transparent text-5xl lg:text-7xl font-bold">
            <h1>
              GNESS <br /> POINTS
            </h1>
          </div>

          <div className="flex items-center px-16 py-8 w-full justify-between ">
            <InfoCard title={"MISSIONS COMPLETED"} data={10} />
            <InfoCard title={"TOTAL REFERRALS"} data={100} />
            <InfoCard title={"REFERRAL POINTS"} data={20} />
            <InfoCard title={"REFERRAL MULTIPLER"} data={4} />
          </div>
        </div>
        <div className="w-full mb-10 h-1.5 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
      </div>
      <div className="h-[40rem]  [perspective:1000px] mb-32 relative flex flex-col max-w-7xl mx-auto w-full  items-start justify-start ">
        <Tabs tabs={tabs} />
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4 mt-10 w-full">
        {mockMissionData.map((mission, index) => (
          <MissionCard
            key={index}
            title={mission.title}
            description={mission.description}
            points={mission.points}
          />
        ))} */}
      {/* <BackgroundBeams /> */}
      {/* </div> */}
    </div>
  );
};

export default MissionsPage;
{
  /* <h2 className="text-2xl lg:text-3xl text-center  font-bold text-zinc-300">
            GNESS POINTS
          </h2> */
}
