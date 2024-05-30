import Image from "next/image";
import Link from "next/link";
const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center z-20 justify-center cursor-pointer"
    >
      <Image src="/mavi.png" alt="Dats Project" width={300} height={200} />
    </Link>
  );
};

export default Logo;
