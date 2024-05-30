import Link from "next/link";
import { Xicon, DiscordIcon, LogoIcon } from "../icons";

const navItems = [
  {
    name: "Gameness",
    link: "/",
    icon: <LogoIcon />,
  },
  {
    name: "Twitter",
    link: "/",
    icon: <Xicon />,
  },
  {
    name: "Discord",
    link: "/",
    icon: <DiscordIcon />,
  },
];

const Navbar = () => {
  return (
    <div className="flex items-center justify-center gap-4 z-20 ">
      {navItems.map((item) => (
        <Link
          className="text-zinc-300 flex items-center justify-center gap-2 text-md rounded-xl px-2 transition-all py-2 hover:text-red-300"
          href={item.link}
          key={item.name}
        >
          {item.icon}
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
