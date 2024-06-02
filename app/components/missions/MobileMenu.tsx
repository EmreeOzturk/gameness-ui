"use client";
import Header from "../header";
import { Menu } from "lucide-react";
import { useState } from "react";
const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex items-center pt-8 justify-between pr-6 w-full ">
      <Header />
      <div className="flex relative lg:hidden items-center justify-center">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex z-10 items-center justify-center gap-2 bg-slate-900 p-2 rounded-full"
        >
          <Menu size={24} />
        </button>

        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } absolute top-12 right-0 w-64 h-48 bg-slate-500 rounded-lg`}
        >
          <div className="flex z-20 flex-col items-center justify-start pt-6 w-full rounded-lg bg-slate-800 border mx-auto">
            <img
              className="w-16 h-16 rounded-full"
              src="https://pagedone.io/asset/uploads/1704275541.png"
              alt="Fully large avatar"
            />
            <p className="text-base font-bold mt-2 text-zinc-300">
              Emre Ozturk
            </p>
            <p className="text-xs font-thin text-zinc-300">emreozturk.dev</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
