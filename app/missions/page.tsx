"use client";
import InfoCard from "../components/missions/InfoCard";
import { Tabs } from "../components/ui/tabs";
import Epoch from "../components/tabs/Epoch";
import { CircleCheck, Users, Lollipop, Gem, Copy } from "lucide-react";
import {
  week1DailyTasks,
  week1WeeklyTasks,
  week2DailyTasks,
  week2WeeklyTasks,
  week3DailyTasks,
  week3WeeklyTasks,
  week4DailyTasks,
  week4WeeklyTasks,
} from "../data/missions";

const tabs = [
  {
    title: "1. Epoch",
    value: "epoch1",
    content: (
      <Epoch
        title="Epoch 1"
        description="Epoch 1 Description"
        points={100}
        dailyTasks={week1DailyTasks}
        weeklyTasks={week1WeeklyTasks}
      />
    ),
  },
  {
    title: "2. Epoch",
    value: "epoch2",
    content: (
      <Epoch
        title="Epoch 2"
        description="Epoch 2 Description"
        points={200}
        dailyTasks={week2DailyTasks}
        weeklyTasks={week2WeeklyTasks}
      />
    ),
  },
  {
    title: "3. Epoch",
    value: "epoch3",
    content: (
      <Epoch
        title="Epoch 3"
        description="Epoch 3 Description"
        points={300}
        dailyTasks={week3DailyTasks}
        weeklyTasks={week3WeeklyTasks}
      />
    ),
    // disabled: true,
  },
  {
    title: "4. Epoch",
    value: "epoch4",
    content: (
      <Epoch
        title="Epoch 4"
        description="Epoch 4 Description"
        points={400}
        dailyTasks={week4DailyTasks}
        weeklyTasks={week4WeeklyTasks}
      />
    ),
    disabled: true,
  },
];

const MissionsPage = () => {
  return (
    <div className="flex flex-col items-start  justify-start w-full pt-36">
      <div className=" w-full lg:w-full h-fit items-start lg:mr-auto justify-start flex flex-col gap-4 mb-12">
        <div className="flex flex-col items-center justify-center gap-4 w-full">
          <div className="bg-gradient-to-br text-center from-cyan-800 to-zinc-300 text-clip bg-clip-text text-transparent text-5xl lg:text-6xl font-bold">
            <h1 className="tracking-wide">Total XP: 1000</h1>
          </div>
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-0 items-center px-16 py-8 w-full justify-between ">
            <InfoCard
              title={"MISSIONS COMPLETED"}
              data={10}
              icon={<CircleCheck size={24} />}
            />
            <InfoCard
              title={"TOTAL REFERRALS"}
              data={100}
              icon={<Users size={24} />}
            />
            <InfoCard
              title={"REFERRAL POINTS"}
              data={20}
              icon={<Lollipop size={24} />}
              reverse
            />
            <InfoCard
              title={"REFERRAL MULTIPLER"}
              data={4}
              icon={<Gem size={24} />}
              reverse
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center  mb-6 gap-4 w-full text-center text-zinc-500">
          <p>Invite friends using Referral Code for bonus points.</p>
          <button className="bg-sky-500 hover:scale-105 transition-all  text-zinc-300 text-base font-bold px-6 py-3 rounded-full flex items-center justify-center gap-2">
            DATS Project
            <Copy size={24} />
          </button>
        </div>
        <div className="lg:w-full w-4/5 mx-auto lg:mb-10 h-1.5 bg-gradient-to-r from-transparent via-sky-600 to-transparent" />
      </div>
      <div className="h-[50rem] z-10  [perspective:1000px] px-4 lg:px-8 mb-20 relative flex flex-col max-w-7xl mx-auto w-full  items-start justify-start ">
        <Tabs tabs={tabs} />
      </div>
      {/* <BackgroundBeams /> */}
    </div>
  );
};

export default MissionsPage;
