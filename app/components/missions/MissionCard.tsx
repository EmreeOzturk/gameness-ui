"use client";
import type { TaskSchema } from "@/app/data/missions";
import { WobbleCard } from "../ui/wobble-card";
import { useState, useEffect } from "react";
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
  const [open, setOpen] = useState(false);
  useEffect(() => {
    console.log("is done changedddddddddddddddddddddd")
    if (isDone) {
      setOpen(false);
    }
  }, [isDone]);
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
              isDone ? "text-green-500" : "text-neutral-200"
            }`}
          >
            +{mission_point} XP
          </p>
          <button
            // disabled={isDone}
            onClick={() => {
              setOpen(true);
            }}
            className="disabled:bg-zinc-600 disabled:text-zinc-400 disabled:border-slate-600 disabled:cursor-not-allowed absolute rounded-xl px-6 py-2 border-[.2px] border-sky-400 right-5 bottom-5 bg-gradient-to-br from-sky-200 to-sky-500 text-transparent text-base/6 bg-clip-text"
          >
            Start
          </button>
        </div>
      </WobbleCard>
      <Dialog open={open} onOpenChange={setOpen}>
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
            <MissionLink
              _id={_id}
              userId={userId}
              mission_link={mission_link}
              mission_title={mission_title}
              key={_id}
            />
          ) : (
            <MissionHandler
              _id={_id}
              userId={userId}
              mission_title={mission_title}
              type={mission_type}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MissionCard;
