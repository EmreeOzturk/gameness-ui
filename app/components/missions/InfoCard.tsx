import React, { ReactNode } from "react";
import { Button } from "../ui/moving-border";

type InfoCardProps = {
  title: string;
  data: number;
  icon?: ReactNode;
};
const InfoCard: React.FC<InfoCardProps> = ({ title, data, icon }) => {
  return (
    <div
      // style={{
      //   border: "0 solid #33020285",
      //   width: "0",
      //   height: "0",
      //   borderLeft: "100px solid transparent",
      //   borderRight: "100px solid transparent",
      //   borderTop: "170px solid #045686e0",
      //   borderBottom: "0",
      // }}
      className="relative"
    >
      {/* <div className="absolute text-center text-zinc-300 select-none left-[50%] -translate-x-[50%] font-bold text-xl -top-[50%] -translate-y-[165%]">
        <h3 className="mt-2">
          {title.split(" ").map((word, index) => (
            <span key={index} className="block">
              {word}
            </span>
          ))}
        </h3>
        <p className="mt-2">
          <span className="text-xl font-bold">{data}</span>
        </p>
      </div> */}
      <div className="select-none  tracking-wide">
        <Button className="text-zinc-300 px-8 py-4 text-2xl flex flex-col w-64 ">
          <div>
            <div className="flex justify-center mb-2">{icon && icon}</div>
            <h3>
              {title.split(" ").map((word, index) => (
                <span key={index} className="block">
                  {word}
                </span>
              ))}
            </h3>
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
