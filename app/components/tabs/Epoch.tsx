import { TaskSchema } from "@/app/data/missions";
import MissionSection from "./MissionSection";
import Task from "@/app/models/TaskModel";
import { getTasks } from "@/app/action";
import { auth } from "@/auth";
import { Session } from "next-auth";
type EpochTabProps = {
  title: string;
  description: string;
  dailyTasks: TaskSchema[];
  weeklyTasks: TaskSchema[];
  value: string;
};

const Epoch: React.FC<EpochTabProps> = async ({
  title,
  description,
  value,
  // weeklyTasks,
  // dailyTasks,
}) => {
  const tasks = (await getTasks(value)) as TaskSchema[];
  const session = (await auth()) as Session;
  const dailyTasks = tasks.filter((task) => task.weekly);
  const weeklyTasks = tasks.filter((task) => !task.weekly);
  // const finishedDailyTasks = dailyTasks.filter((task) =>
  //   session.user?.finishedMissions.includes(task._id)
  // );
  // const finishedWeeklyTasks = weeklyTasks.filter((task) =>
  //   session.user?.finishedMissions.includes(task._id)
  // );

  return (
    <div className="w-full select-none text-zinc-300 overflow-hidden relative h-full rounded-2xl p-4 lg:p-10  font-bold  bg-gradient-to-t from-slate-950 via-slate-900 to-[#0282C5]">
      <p className="text-3xl lg:text-4xl">{title}</p>
      <div className="flex flex-col lg:flex-row justify-around text-center   gap-10 lg:text-2xl mt-6 items-center  md:px-6 mx-auto">
        {/* <p className="text-2xl ">
          Weekly Missions{" "}
          {weeklyTasks.length === 0
            ? "(0/0)"
            : `(${weeklyTasks.length}/${weeklyTasks.length})`}
        </p> */}
        {/* <p className="hidden lg:flex">
          Daily Missions{" "}
          {dailyTasks.length === 0
            ? "(0/0)"
            : `(${dailyTasks.length}/${dailyTasks.length})`}
        </p> */}
      </div>
      <div className="flex flex-col lg:flex-row items-start mt-4  gap-4 h-full justify-between">
        <MissionSection title="Weekly Missions" data={weeklyTasks} />
        {/* <p className="flex  text-2xl lg:hidden mx-auto">
          Daily Missions{" "}
          {dailyTasks.length === 0
            ? "(0/0)"
            : `(${dailyTasks.length}/${dailyTasks.length})`}
        </p> */}
        <MissionSection title="Daily Missions" data={dailyTasks} />
      </div>
    </div>
  );
};

export default Epoch;
