import React from "react";

type InfoCardProps = {
  title: string;
  data: number;
};

const InfoCard: React.FC<InfoCardProps> = ({ title, data }) => {
  return (
    <div
      style={{
        border: "0 solid #33020285",
        width: "0",
        height: "0",
        borderLeft: "100px solid transparent",
        borderRight: "100px solid transparent",
        borderTop: "160px solid #e8040485",
        borderBottom: "0",
      }}
      className="relative"
    >
      <div className="absolute text-center select-none left-[50%] -translate-x-[50%] font-bold text-xl -top-[50%] -translate-y-[165%]">
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
      </div>
    </div>
  );
};

export default InfoCard;
