import { TaskSchema } from "@/app/data/missions";
import MissionSection from "./MissionSection";
import Task from "@/app/models/TaskModel";
type EpochTabProps = {
  title: string;
  description: string;
  points: number;
  dailyTasks: TaskSchema[];
  weeklyTasks: TaskSchema[];
};
const Epoch: React.FC<EpochTabProps> = async ({
  title,
  description,
  points,
  // weeklyTasks,
  // dailyTasks,
}) => {
  const tasks: TaskSchema[] = (await Task.find({})).map((task) => {
    return {
      _id: task._id.toString(),
      mission_title: task.mission_title,
      mission_description: task.mission_description,
      mission_point: task.mission_point,
      mission_type: task.mission_type,
      weekly: task.weekly,
      mission_joiners: task.mission_joiners,
      mission_link: task.mission_link,
      mobile_mission_link: task.mobile_mission_link,
    } as TaskSchema;
  });

  const dailyTasks = tasks.filter((task) => task.weekly);
  const weeklyTasks = tasks.filter((task) => !task.weekly);
  return (
    <div className="w-full select-none text-zinc-300 overflow-hidden relative h-full rounded-2xl p-4 lg:p-10  font-bold  bg-gradient-to-t from-slate-950 via-slate-900 to-[#0282C5]">
      <p className="text-3xl lg:text-4xl">{title}</p>
      <div className="flex flex-col lg:flex-row justify-around text-center   gap-10 lg:text-2xl mt-6 items-center  md:px-6 mx-auto">
        <p className="text-2xl ">
          Weekly Missions{" "}
          {weeklyTasks.length === 0
            ? "(0/0)"
            : `(${weeklyTasks.length}/${weeklyTasks.length})`}
        </p>
        <p className="hidden lg:flex">
          Daily Missions{" "}
          {dailyTasks.length === 0
            ? "(0/0)"
            : `(${dailyTasks.length}/${dailyTasks.length})`}
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-start mt-4  gap-4 h-full justify-between">
        <MissionSection data={weeklyTasks} />
        <p className="flex  text-2xl lg:hidden mx-auto">
          Daily Missions{" "}
          {dailyTasks.length === 0
            ? "(0/0)"
            : `(${dailyTasks.length}/${dailyTasks.length})`}
        </p>
        <MissionSection data={dailyTasks} />
      </div>
    </div>
  );
};

export default Epoch;
