import Image from "next/image";
const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <Image src="/logo.webp" alt="Gameness" width={300} height={200} />
    </div>
  );
};

export default Logo;
