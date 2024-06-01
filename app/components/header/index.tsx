import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="flex absolute  max-w-7xl mx-auto top-5 left-0 right-0 h-32  items-center justify-between pt-8 pb-24">
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;
