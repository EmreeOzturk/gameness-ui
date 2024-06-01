import { MissionCardProps } from "@/app/data/missions";
import MissionSection from "./MissionSection";

type EpochTabProps = {
  title: string;
  description: string;
  points: number;
  dailyTasks: MissionCardProps[];
  weeklyTasks: MissionCardProps[];
};

const Epoch: React.FC<EpochTabProps> = ({
  title,
  description,
  points,
  weeklyTasks,
  dailyTasks,
}) => {
  return (
    <div className="w-full select-none text-zinc-300 overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold  bg-gradient-to-t from-slate-950 via-slate-900 to-[#0282C5]">
      <p>{title}</p>
      <div className="flex justify-between w-4/5 gap-10 text-3xl mt-6 items-center  md:px-6 mx-auto">
        <p>
          Weekly Missions{" "}
          {weeklyTasks.length === 0
            ? "(0/0)"
            : `(${weeklyTasks.length}/${weeklyTasks.length})`}
        </p>
        <p>
          Daily Missions{" "}
          {dailyTasks.length === 0
            ? "(0/0)"
            : `(${dailyTasks.length}/${dailyTasks.length})`}
        </p>
      </div>
      <div className="flex items-start mt-4  gap-4 h-full justify-between">
        <MissionSection data={weeklyTasks} />
        <MissionSection data={dailyTasks} />
      </div>
    </div>
  );
};

export default Epoch;
