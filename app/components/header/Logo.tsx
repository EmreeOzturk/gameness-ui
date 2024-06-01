import Image from "next/image";
import Link from "next/link";
const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center z-20 justify-center relative w-64  h-14 md:w-80 md:h-16 cursor-pointer">
      <Image src="/mavi.png" alt="Dats Project" fill />
    </Link>
  );
};

export default Logo;
