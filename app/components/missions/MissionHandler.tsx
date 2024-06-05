"use client";

type MissinHandlerProps = {
  //   payload?: string;
  type: string;
  mission_title: string;
  userId: string;
  _id: string;
};

import { useInformation } from "@/app/hooks/useInformation";
import { useState } from "react";
const MissionHandler: React.FC<MissinHandlerProps> = ({
  userId,
  _id,
  mission_title,
  type,
}) => {
  const { loading: informationLoading, trigerInformation } = useInformation();
  const [payload, setPayload] = useState<string>("");
  const handlePayload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPayload(e.target.value);
  };

  return (
    <form
      className="py-2 space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        trigerInformation(userId, _id, payload);
      }}
    >
      <input
        className="no-zoom w-full px-4 py-2 rounded-lg border border-white/10 focus:outline-none focus:border-white/30 bg-white/10 text-white/90"
        placeholder={`${mission_title}...`}
        value={payload}
        onChange={handlePayload}
        required
        id={type}
        name={type}
        type={type === ""}
      />
      <button
        type="submit"
        className={`text-center text-white rounded-full py-3 w-full font-bold ${
          !informationLoading && payload
            ? "bg-primary"
            : "cursor-not-allowed bg-white/50"
        }`}
        disabled={informationLoading || !payload}
      >
        <span>{mission_title}</span>
      </button>
    </form>
  );
};

export default MissionHandler;