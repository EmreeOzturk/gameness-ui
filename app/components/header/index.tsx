import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="flex items-center justify-between pt-8 pb-24">
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;
