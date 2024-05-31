import MissionSection from "./MissionSection";

type EpochTabProps = {
  title: string;
  description: string;
  points: number;
};

const Epoch: React.FC<EpochTabProps> = ({ title, description, points }) => {
  return (
    <div className="w-full select-none text-zinc-300 overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold  bg-gradient-to-t from-sky-800 via-sky-950 to-slate-900">
      <p>{title}</p>
      <div className="flex justify-between w-4/5 gap-10 text-3xl mt-6 items-center  md:px-6 mx-auto">
        <p>Daily Missions (4/10)</p>
        <p>Weekly Missions (6/6)</p>
      </div>
      <div className="flex items-start mt-4  gap-4 h-full justify-between">
        <MissionSection />
        <MissionSection />
      </div>
    </div>
  );
};

export default Epoch;
