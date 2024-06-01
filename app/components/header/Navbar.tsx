import Link from "next/link";
import { Xicon, DiscordIcon } from "../icons";
import Image from "next/image";
const navItems = [
  {
    name: "DATS Project",
    link: "/",
    // iconUri: "/mavi3.svg",
  },
  {
    name: "Twitter",
    link: "/",
    // icon: <Xicon />,
  },
  {
    name: "Discord",
    link: "/",
    // icon: <DiscordIcon />,
  },
] as {
  name: string;
  link: string;
  iconUri?: string;
  icon?: JSX.Element;
}[];

const Navbar = () => {
  return (
    <div className="flex  items-center justify-center gap-4 z-20 ">
      {navItems.map((item) => (
        <Link
          className="text-zinc-300 flex items-center justify-center gap-2 text-md rounded-xl px-2 transition-all py-2 hover:text-cyan-300"
          href={item.link}
          key={item.name}
        >
          {item.iconUri && (
            <Image
              src={item.iconUri!}
              alt="Picture of the author"
              width={21}
              height={21}
            />
          )}
          {item.icon && item.icon}
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
