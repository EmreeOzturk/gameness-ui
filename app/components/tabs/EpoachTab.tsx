import MissionSection from "./MissionSection";

type EpoachTabProps = {
  title: string;
  description: string;
  points: number;
};

const EpoachTab: React.FC<EpoachTabProps> = ({
  title,
  description,
  points,
}) => {
  return (
    <div className="w-full select-none overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-t from-sky-700 via-sky-950 to-slate-950">
      <p>{title}</p>
      {/* <div className="flex items-center h-full gap-4 justify-between">
        <MissionSection title="Daily Missions" />
        <MissionSection title="Weekly Missions" />
      </div> */}
    </div>
  );
};

export default EpoachTab;
