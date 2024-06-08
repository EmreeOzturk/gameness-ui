"use client";

import type { TaskSchema } from "@/app/data/missions";
import { WobbleCard } from "../ui/wobble-card";
import { useSession } from "next-auth/react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import MissionHandler from "./MissionHandler";
import MissionLink from "./MissionLink";
import Link from "next/link";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { usePointUser } from "@/app/hooks/usePointUser";
import { useInformation } from "@/app/hooks/useInformation";
import { Loader } from "lucide-react";
type MissionCardProps = {
  isDone?: boolean;
  userId: string;
} & TaskSchema;
const MissionCard: React.FC<MissionCardProps> = ({
  _id,
  mission_description,
  mission_point,
  mission_title,
  mission_type,
  mission_joiners,
  mission_link,
  mobile_mission_link,
  userId,
  isDone,
}) => {
  const router = useRouter();
  const session = useSession();

  const [payload, setPayload] = useState<string>("");
  const handlePayload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPayload(e.target.value);
  };
  const { triggerPointUser, error, loading, response } = usePointUser();
  const { loading: informationLoading, trigerInformation } = useInformation();
  const [isDoneMission, setIsDoneMission] = useState(isDone);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (response) {
      setOpen(false);
      router.refresh();
      console.log("is doneeeeeeee", isDone, mission_title);
      setIsDoneMission(true);
    }
  }, [response]);
  return (
    <>
      <WobbleCard containerClassName="lg:h-48  h-full relative select-none">
        <div>
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold bg-gradient-to-br from-slate-200 to-slate-500 text-transparent tracking-tight  bg-clip-text">
            {mission_title}
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            {mission_description}
          </p>
          <p
            className={`mt-4 text-left text-base/6  ${
              isDoneMission ? "text-green-500" : "text-neutral-200"
            }`}
          >
            +{mission_point} XP
          </p>
          <button
            onClick={() => {
              setOpen(true);
            }}
            disabled={isDoneMission}
            className="disabled:bg-zinc-600 disabled:text-zinc-400 disabled:border-slate-600 disabled:cursor-not-allowed absolute rounded-xl px-6 py-2 border-[.2px] border-sky-400 right-5 bottom-5 bg-gradient-to-br from-sky-200 to-sky-500 text-transparent text-base/6 bg-clip-text"
          >
            Start
          </button>
        </div>
      </WobbleCard>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild></DialogTrigger>
        <DialogContent className="border-none shadow-2xl shadow-blue-950 ">
          <DialogHeader>
            <DialogTitle className="text-center mb-4 text-2xl">
              {mission_title}
            </DialogTitle>
            <div className="w-4/5 lg:w-full mx-auto  h-1.5 bg-gradient-to-r  from-transparent via-sky-500 to-transparent" />
            <DialogDescription className="text-center pt-4 text-base">
              {mission_description}
            </DialogDescription>
          </DialogHeader>
          {mission_type === "joinTelegram" && (
            <>
              <DialogDescription>
                1. Join the{" "}
                <Link href="/" className="text-sky-500 cursor-pointer">
                  DATS Project
                </Link>{" "}
                Telegram group then come back to mission page.
              </DialogDescription>
              <DialogDescription>
                2. Ask new mission page code from{" "}
                <Link href="/" className="text-sky-500 cursor-pointer">
                  @DATSProjectBot
                </Link>
              </DialogDescription>
              <DialogDescription>
                3. Fill the input with code and done the mission.
              </DialogDescription>
            </>
          )}
          {mission_type === "joinDiscord" && (
            <>
              <DialogDescription>
                1. Join the{" "}
                <Link href="/" className="text-sky-500 cursor-pointer">
                  DATS Project
                </Link>{" "}
                Discord Server.
              </DialogDescription>
              <DialogDescription>
                2. Request the mission page code from the{" "}
                <span className="text-sky-500">#code-request</span> chat on
                Discord by clicking the{" "}
                <span className="text-sky-500">
                  &quot;Get your mission code ⚡&quot;{" "}
                </span>
                button.
              </DialogDescription>
              <DialogDescription>
                3. Fill the input with code and done the mission.
              </DialogDescription>
            </>
          )}
          {mission_link ? (
            <Link
              target="_blank"
              href={mission_link}
              className={`border hover:scale-105 transition-all  w-1/2 mx-auto rounded-full px-6 text-center py-2
              bg-gradient-to-r from-zinc-300 to-sky-500 font-bold text-transparent text-base/6 bg-clip-text ${
                !loading ? "" : "cursor-not-allowed text-red-500"
              } `}
              onClick={() => {
                triggerPointUser(userId as string, _id);
              }}
            >
              <p>
                {loading ? (
                  <Loader className="w-6 h-6  text-zinc-300 mx-auto animate-spin" />
                ) : (
                  mission_title
                )}
              </p>
            </Link>
          ) : (
            <>
              {mission_type === "dailyCheck" && (
                <div className="py-2 flex items-center justify-center w-full space-y-4">
                  <button
                    onClick={() => {
                      {
                        !loading ? triggerPointUser(userId, _id) : null;
                      }
                    }}
                    className={`border hover:scale-105 transition-all  w-1/2 m-auto rounded-full px-6 text-center py-2
              bg-gradient-to-r from-zinc-300 to-sky-500 font-bold text-transparent text-base/6 bg-clip-text ${
                !loading ? "bg-primary" : "cursor-not-allowed bg-white/50"
              }`}
                    disabled={loading}
                  >
                    <p>
                      {loading ? (
                        <Loader className="w-6 h-6  text-zinc-300 mx-auto animate-spin" />
                      ) : (
                        "I am here!"
                      )}
                    </p>
                  </button>
                </div>
              )}
              {mission_type === "discord" && (
                <div className="py-2 flex items-center justify-center w-full space-y-4">
                  <button
                    onClick={() => {
                      {
                        !loading ? triggerPointUser(userId, _id) : null;
                      }
                    }}
                    className={`border hover:scale-105 transition-all  w-1/2 m-auto rounded-full px-6 text-center py-2
              bg-gradient-to-r from-zinc-300 to-sky-500 font-bold text-transparent text-base/6 bg-clip-text ${
                !loading ? "bg-primary" : "cursor-not-allowed bg-white/50"
              }`}
                    disabled={loading}
                  >
                    <p>
                      {loading ? (
                        <Loader className="w-6 h-6  text-zinc-300 mx-auto animate-spin" />
                      ) : (
                        "Check Out"
                      )}
                    </p>
                  </button>
                </div>
              )}
              {mission_type === "wallet" && (
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
              )}
              {mission_type === "joinDiscord" && (
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
                    id={mission_type}
                    name={mission_type}
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
              )}
              {mission_type === "joinTelegram" && (
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
                    id={mission_type}
                    name={mission_type}
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
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MissionCard;
