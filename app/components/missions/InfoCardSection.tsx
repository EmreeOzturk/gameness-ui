import React from "react";
import InfoCard from "./InfoCard";
import { CircleCheck, Gem, Lollipop, Users } from "lucide-react";

const InfoCardSection = () => {
  return (
    <div className="flex flex-wrap   lg:flex-row gap-3 md:gap-4 items-center px-16 py-8 w-full justify-center ">
      <InfoCard
        title={"Assigned Resource Count"}
        data={10}
        icon={<CircleCheck size={24} />}
      />
      <InfoCard
        title={"Assigned CPU Count"}
        data={100}
        icon={<Users size={24} />}
      />
      <InfoCard
        title={"Assigned Bandwidth"}
        data={20}
        icon={<Lollipop size={24} />}
        reverse
      />
      <InfoCard
        title={"Total Refferals"}
        data={4}
        icon={<Gem size={24} />}
        reverse
      />
    </div>
  );
};

export default InfoCardSection;
