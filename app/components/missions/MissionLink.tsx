import { Loader } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { usePointUser } from "@/app/hooks/usePointUser";
import { pointUser } from "@/app/action";
import { useRouter } from "next/navigation";
type MissionLinkProps = {
  mission_link: string;
  mission_title: string;
  userId: string;
  _id: string;
  setOpen?: any;
  isDone?: boolean;
};
const MissionLink: React.FC<MissionLinkProps> = ({
  mission_link,
  mission_title,
  userId,
  _id,
  setOpen,
  isDone,
}) => {
  const { triggerPointUser, error, loading, response } = usePointUser();
  const router = useRouter();

  console.log(response);
  useEffect(() => {
    if (response) {
      setOpen(false);
      router.refresh();
      console.log("is doneeeeeeee", isDone, mission_title);
    }
  }, [response]);
  return (
    <>
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
    </>
  );
};

export default MissionLink;
