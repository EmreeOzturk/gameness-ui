import { auth } from "@/auth";
import { Session } from "next-auth";

const TotalXP = async () => {
  const session = (await auth()) as Session;
  return (
    <div className="bg-gradient-to-br text-center from-cyan-800 to-zinc-300 text-clip bg-clip-text text-transparent text-5xl lg:text-6xl font-bold">
      <h1 className="tracking-wide">
        Total XP:
        {session.user?.totalPoints}
      </h1>
    </div>
  );
};

export default TotalXP;
