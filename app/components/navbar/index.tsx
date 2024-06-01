"use client";
// import {
//   Users,
//   LayoutDashboard,
//   BarChart3,
//   GlobeLock,
//   BookText,
//   SearchCheck,
//   LaptopMinimal,
//   ShieldCheck,
// } from "lucide-react";

// import Link from "next/link";
// import { motion } from "framer-motion";
const CollapsableNavbar = () => {
  return (
    <nav className="bg-slate-800  gap-4 flex flex-col justify-start py-6 items-start fixed left-0 top-0 overflow-hidden w-20 hover:w-60 group transition-all duration-300 h-screen z-30">
      <div className="opacity-0 absolute top-6 left-0 right-0 duration-300  group-hover:opacity-100 flex flex-col items-center justify-start pt-6 w-5/6 h-56 rounded-lg bg-slate-800 border mx-auto">
        <img
          className="w-16 h-16 rounded-full"
          src="https://pagedone.io/asset/uploads/1704275541.png"
          alt="Fully large avatar"
        />
        <p className="text-base font-bold mt-2 text-zinc-300">Emre Ozturk</p>
        <p className="text-xs font-thin text-zinc-300">emreozturk.dev</p>
      </div>
      {/* <div className="w-full flex flex-col justify-center items-center gap-4 group-hover:mt-64 transition-all duration-500">
        <Link
          href="/"
          className="flex relative justify-start mx-auto items-center gap-3  w-[95%]  rounded-lg h-10 pl-6  hover:bg-slate-900   transition-all"
        >
          <LayoutDashboard className="w-6 h-6" />
          <p className="w-96 hidden absolute left-14 group-hover:flex group-hover:opacity-100 transition-all">
            Dashboard
          </p>
        </Link>
        <Link
          href="/"
          className="flex relative justify-start mx-auto items-center gap-3  w-[95%]  rounded-lg h-10 pl-6  hover:bg-slate-900  transition-all"
        >
          <BarChart3 className="w-6 h-6" />
          <p className="w-96 hidden absolute left-14 group-hover:flex group-hover:opacity-100 transition-all">
            Stats
          </p>
        </Link> */}
        {/* <p className="group-hover:opacity-100 flex mt-6 opacity-0 justify-start items-center gap-3 w-full h-10  pl-6 font-thin ">
        Services
      </p> */}
        {/* <Link
          href="/"
          className="flex relative justify-start mx-auto items-center gap-3  w-[95%]  rounded-lg h-10 pl-6  hover:bg-slate-900  transition-all"
        >
          <GlobeLock className="w-6 h-6" />
          <p className="w-96 hidden absolute left-14 group-hover:flex group-hover:opacity-100 transition-all">
            DDOS Test
          </p>
        </Link>
        <Link
          href="/"
          className="flex relative justify-start mx-auto items-center gap-3  w-[95%]  rounded-lg h-10  pl-6 hover:bg-slate-900  transition-all"
        >
          <BookText className="w-6 h-6" />
          <p className="hidden w-96 absolute left-14 group-hover:flex group-hover:opacity-100 transition-all">
            Cyber Sec. Research
          </p>
        </Link>
        <Link
          href="/"
          className="flex relative justify-start mx-auto items-center gap-3  w-[95%]  rounded-lg h-10  pl-6 hover:bg-slate-900  transition-all"
        >
          <SearchCheck className="w-6 h-6" />
          <p className="w-96 hidden absolute  left-14  group-hover:flex transition-all">
            Vulnerability Scanning
          </p>
        </Link>
        <Link
          href="/"
          className="flex relative justify-start mx-auto items-center gap-3 w-[95%] rounded-lg h-10  pl-6 hover:bg-slate-900  transition-all"
        >
          <LaptopMinimal className="w-6 h-6" />
          <p className="w-96 hidden absolute left-14 group-hover:flex group-hover:opacity-100 transition-all">
            Super Computer
          </p>
        </Link>
        <Link
          href="/"
          className="flex relative justify-start mx-auto items-center gap-3  w-[95%]  rounded-lg h-10  pl-6 hover:bg-slate-900  transition-all"
        >
          <ShieldCheck className="w-6 h-6" />
          <p className="w-96 hidden absolute left-14 group-hover:flex group-hover:opacity-100 transition-all">
            Blockchain Security
          </p>
        </Link> */}
        {/* <p className="group-hover:opacity-100 flex mt-6 opacity-0 justify-start items-center gap-3 w-full h-10  pl-6 font-thin ">
        Others
      </p> */}
        {/* <Link
          href="/"
          className="flex relative justify-start mx-auto items-center gap-3  w-[95%]  rounded-lg h-10  pl-6 hover:bg-slate-900  transition-all"
        >
          <Users className="w-6 h-6" />
          <p className=" w-96 hidden absolute left-14 group-hover:w-full group-hover:flex transition-all">
            Referral
          </p>
        </Link>
      </div> */}
    </nav>
  );
};

export default CollapsableNavbar;
