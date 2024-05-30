import MissionCard from "../components/missions/MissionCard";
import { BackgroundBeams } from "../components/ui/background-beams";
import mockMissionData from "../data/missions";
const MissionsPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4">
      {mockMissionData.map((mission, index) => (
        <MissionCard
          key={index}
          title={mission.title}
          description={mission.description}
          points={mission.points}
        />
      ))}
      <BackgroundBeams />
    </div>
  );
};

export default MissionsPage;
