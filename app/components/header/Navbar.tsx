import Link from "next/link";

const navItems = [
  {
    name: "Gameness",
    link: "/",
  },
  {
    name: "Twitter",
    link: "/",
  },
  {
    name: "Discord",
    link: "/",
  },
];

const Navbar = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      {navItems.map((item) => (
        <Link href={item.link} key={item.name}>
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
