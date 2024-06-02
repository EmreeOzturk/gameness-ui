import React, { ReactNode } from "react";
import { Button } from "../ui/moving-border";

type InfoCardProps = {
  title: string;
  data: number;
  icon?: ReactNode;
  reverse?: boolean;
};
const InfoCard: React.FC<InfoCardProps> = ({ title, data, icon, reverse }) => {
  return (
    <div className="relative">
      <div className="select-none tracking-wide">
        <Button
          reverse={reverse}
          className="text-zinc-300 px-6 py-4 text-base lg:text-xl flex flex-col w-64 "
        >
          <div className="w-full ">
            <div className="flex justify-center mb-2">{icon && icon}</div>
            <h3>{title}</h3>
          </div>
          <p className="mt-2">
            <span className="text-xl font-bold">{data}</span>
          </p>
        </Button>
      </div>
    </div>
  );
};

export default InfoCard;
