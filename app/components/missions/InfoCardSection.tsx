import InfoCard from "./InfoCard";
import { Calculator, Gem, Router, Users } from "lucide-react";
import { auth } from "@/auth";
import { Session } from "next-auth";
const InfoCardSection = async () => {
  const session = (await auth()) as Session;
  const refCount = session.user?.refList.length;
  const resources = await fetch(
    "https://report.datsproject.io/leader-board/all",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await resources.json();
  const assignedResource = data.filter(
    (resource: any) => resource?.address === session.user?.walletAddress
  );
  const assignedCPU = assignedResource[0]?.assignedCpuCount;
  const assignedBandwidth = assignedResource[0]?.assignedBandwith;
  const assignedResourceCount = assignedResource[0]?.assignedResourceCount;
  return (
    <div className="flex flex-wrap   lg:flex-row gap-3 md:gap-4 items-center px-16 py-8 w-full justify-center ">
      <InfoCard
        title={"Assigned Resource"}
        data={assignedResourceCount ? assignedResourceCount : 0}
        icon={<Calculator size={24} />}
      />
      <InfoCard
        title={"Assigned CPU"}
        data={assignedCPU ? assignedCPU : 0}
        icon={<Gem size={24} />}
      />
      <InfoCard
        title={"Assigned Bandwidth"}
        data={assignedBandwidth ? assignedBandwidth : 0}
        icon={<Router size={24} />}
        reverse
      />
      <InfoCard
        title={"Total Refferals"}
        data={refCount}
        icon={<Users size={24} />}
        reverse
      />
    </div>
  );
};

export default InfoCardSection;
