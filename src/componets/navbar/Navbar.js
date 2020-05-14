import React, { useState } from "react";

import NavList from "./NavbarList";

import "./styles/navbar.css";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const onPageChange = (index) => {
    console.log("clicked");
    setActiveIndex(index);
  };

  return (
    <nav className="navbar">
      <NavList onPageChange={onPageChange} activeIndex={activeIndex} />
    </nav>
  );
};

export default Navbar;
