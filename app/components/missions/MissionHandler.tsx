"use client";

type MissinHandlerProps = {
  //   payload?: string;
  type: string;
  mission_title: string;
  userId: string;
  _id: string;
};

import { useInformation } from "@/app/hooks/useInformation";
import { usePointUser } from "@/app/hooks/usePointUser";
import { useState } from "react";
import ConnectButton from "../ConnectButton";
import { useAccount } from "wagmi";
const MissionHandler: React.FC<MissinHandlerProps> = ({
  userId,
  _id,
  mission_title,
  type,
}) => {
  const { loading: informationLoading, trigerInformation } = useInformation();
  const { loading, triggerPointUser } = usePointUser();
  // const { address: account, isConnected } = useAccount();

  const [payload, setPayload] = useState<string>("");
  const handlePayload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPayload(e.target.value);
  };

  if (type === "dailyCheck") {
    return (
      <div className="py-2 flex items-center justify-center w-full space-y-4">
        <button
          onClick={() => {
            {
              !loading ? triggerPointUser(userId, _id) : null;
            }
          }}
          className={`border hover:scale-105 transition-all  w-1/2 m-auto rounded-full px-6 text-center py-2
              bg-gradient-to-r from-zinc-300 to-sky-500 font-bold text-transparent text-base/6 bg-clip-text ${
                !informationLoading
                  ? "bg-primary"
                  : "cursor-not-allowed bg-white/50"
              }`}
          disabled={informationLoading}
        >
          I am here!
        </button>
      </div>
    );
  }
  if (type === "discord") {
    return (
      <div className="py-2 flex items-center justify-center w-full space-y-4">
        <button
          onClick={() => {
            {
              !loading ? triggerPointUser(userId, _id) : null;
            }
          }}
          className={`border hover:scale-105 transition-all  w-1/2 m-auto rounded-full px-6 text-center py-2
              bg-gradient-to-r from-zinc-300 to-sky-500 font-bold text-transparent text-base/6 bg-clip-text ${
                !informationLoading
                  ? "bg-primary"
                  : "cursor-not-allowed bg-white/50"
              }`}
          disabled={informationLoading}
        >
          Check Out
        </button>
      </div>
    );
  }

  if (type === "wallet") {
    return (
      <div className="py-2 space-y-4">
        {/* <ConnectButton /> */}
        <button
          onClick={() => {
            // trigerInformation(userId, _id, account as string);
          }}
          // className={`text-center text-white rounded-full py-3 w-full font-bold ${
          // isConnected ? "bg-primary" : "bg-white/50 cursor-not-allowed"
          // }`}
          // disabled={!isConnected}
        >
          <span>Done the task</span>
        </button>
      </div>
    );
  }
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
        type={"text"}
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
