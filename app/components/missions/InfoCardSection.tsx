import React from "react";
import InfoCard from "./InfoCard";
import { Calculator, Gem, Router, Users } from "lucide-react";

const InfoCardSection = () => {
  return (
    <div className="flex flex-wrap   lg:flex-row gap-3 md:gap-4 items-center px-16 py-8 w-full justify-center ">
      <InfoCard
        title={"Assigned Resource"}
        data={10}
        icon={<Calculator size={24} />}
      />
      <InfoCard title={"Assigned CPU"} data={100} icon={<Gem size={24} />} />
      <InfoCard
        title={"Assigned Bandwidth"}
        data={20}
        icon={<Router size={24} />}
        reverse
      />
      <InfoCard
        title={"Total Refferals"}
        data={4}
        icon={<Users size={24} />}
        reverse
      />
    </div>
  );
};

export default InfoCardSection;
