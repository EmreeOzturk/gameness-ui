import { Tabs } from "../components/ui/tabs";
import { BackgroundBeams } from "../components/ui/background-beams";
import InfoCardSection from "../components/missions/InfoCardSection";
import RefCodeSection from "../components/missions/RefCodeSection";
import MobileMenu from "../components/missions/MobileMenu";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import TotalXP from "./TotalXP";
import { tabs } from "@/app/data/tabs";
import { Session } from "next-auth";


const MissionsPage = async () => {
  const session = (await auth()) as Session;
  if (!session) return redirect("/");
  console.log("revalidateddddddddddddddddddddddddddddddddddddd")
  return (
    <>
      <MobileMenu />
      <div className="flex flex-col items-start  justify-start w-full pt-16 md:pt-36">
        <div className=" w-full lg:w-full h-fit items-start lg:mr-auto justify-start flex flex-col gap-4 mb-12">
          <div className="flex flex-col items-center justify-center gap-4 w-full">
            <TotalXP />
            <InfoCardSection />
          </div>
          <RefCodeSection />
          <div className="lg:w-full w-4/5 mx-auto lg:mb-10 h-1.5 bg-gradient-to-r from-transparent via-sky-600 to-transparent" />
        </div>
        <div className="h-[50rem] z-10  [perspective:1000px] px-4 lg:px-8 mb-20 relative flex flex-col max-w-7xl mx-auto w-full  items-start justify-start ">
          <Tabs tabs={tabs} />
        </div>
        {/* <BackgroundBeams /> */}
      </div>
    </>
  );
};

export default MissionsPage;
