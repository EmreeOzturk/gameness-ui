"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/app/lib/cn";
import { Lock, LockOpen } from "lucide-react";
type Tab = {
  title: string;
  value: string;
  disabled?: boolean;
  content?: string | React.ReactNode | any;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  return (
    <>
      <div
        className={cn(
          "flex flex-row  flex-wrap items-center h-fit lg:h-fit select-none justify-center gap-8 [perspective:1000px] relative  sm:overflow-visible no-visible-scrollbar max-w-full w-full",
          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn(
              "relative border border-sky-950 disabled:border-none px-3 py-1.5 lg:px-8 lg:py-3 rounded-full disabled:bg-gray-800 disabled:text-gray-500/20 dark:bg-zinc-800  dark:hover:bg-zinc-700 dark:hover:text-zinc-100  transition-all duration-300 ease-in-out z-20 text-lg font-semibold",
              tabClassName,
              active.value === tab.value && "border-sky-700 text-sky-700"
            )}
            style={{
              transformStyle: "preserve-3d",
            }}
            disabled={tab.disabled}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-1  bg-gray-900 z-10 dark:bg-zinc-800 rounded-full ",
                  activeTabClassName
                )}
              />
            )}

            <span className="relative flex text-sm lg:text-base gap-4 items-center z-20  ">
              {tab.disabled ? <Lock /> : <LockOpen />}
              {tab.title}
            </span>
          </button>
        ))}
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hovering}
        className={cn("mt-20", contentClassName)}
      />
    </>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  hovering,
  active,
}: {
  className?: string;
  key?: string;
  tabs: Tab[];
  active: Tab;
  hovering?: boolean;
}) => {
  const isActive = (tab: Tab) => {
    return tab.value === tabs[0].value;
  };
  return (
    <div className={`relative  w-full h-full`}>
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -55 : -30,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
            // height: isActive(tab) ? "100%" : "1000px",
          }}
          animate={{
            y: isActive(tab) ? [0, 20, 0] : 0,
          }}
          className={cn(
            "w-full absolute h-full top-0 left-0",
            tab.value == "epoch2" ? "h-[240vh]" : "h-[200vh]",
            isActive(tab) ? "h-fit" : "h-[30rem]",
            className
          )}
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
  );
};
