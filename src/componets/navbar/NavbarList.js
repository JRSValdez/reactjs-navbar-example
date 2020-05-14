import React from "react";

import NavItem from "./NavItem";
import NavHeader from "./NavHeader";

import { FaUsers, FaBox, FaHome, FaPowerOff } from "react-icons/fa";

const NavbarList = ({ onPageChange, activeIndex }) => {
  const icon_color = "#9fff05";
  const pages = [
    {
      id: 1,
      path: "/",
      title: "Home",
      icon: <FaHome color={icon_color} size="32px" />,
    },
    {
      id: 2,
      path: "/users",
      title: "Users",
      icon: <FaUsers color={icon_color} size="32px" />,
    },
    {
      id: 3,
      path: "/products",
      title: "Products",
      icon: <FaBox color={icon_color} size="32px" />,
    },
    {
      id: 4,
      path: "",
      title: "Salir",
      icon: <FaPowerOff color={icon_color} size="32px" />,
    },
  ];

  return (
    <ul className="navbar-nav">
      <NavHeader />
      {pages.map((page) => (
        <NavItem
          key={page.id}
          page={page}
          activeIndex={activeIndex}
          onPageClick={onPageChange}
        />
      ))}
    </ul>
  );
};

export default NavbarList;
