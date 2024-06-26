import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="flex lg:absolute  z-20 max-w-7xl mx-auto top-5 left-0 right-0 md:h-32 justify-start w-full items-start lg:justify-start md:pt-8 md:pb-24">
      <Logo />
      {/* <Navbar /> */}
    </header>
  );
};

export default Header;
