import { TaskSchema } from "@/app/data/missions";
import MissionSection from "./MissionSection";
import clientPromise from "@/app/lib/db";

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
  weeklyTasks,
  dailyTasks,
}) => {
  // const client = await clientPromise;
  // const db = client.db("dats_task");
  // const collection = db.collection("task");
  // const fetchData = async () => {
  //   try {
  //     const res = await collection.find({}).toArray();
  //     return res;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const tasks = await fetchData();
  // const weeklyTasks = tasks?.filter((task) => !!task?.weekly === false);
  // const dailyTasks = tasks?.filter((task) => !!task?.weekly);
  return (
    <div className="w-full select-none text-zinc-300 overflow-hidden relative h-full rounded-2xl p-4 lg:p-10  font-bold  bg-gradient-to-t from-slate-950 via-slate-900 to-[#0282C5]">
      <p className="text-3xl lg:text-4xl">{title}</p>
      <div className="flex flex-col lg:flex-row justify-between text-center  lg:w-4/5 gap-10 lg:text-3xl mt-6 items-center  md:px-6 mx-auto">
        <p>
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
        <p className="flex lg:hidden mx-auto">
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
