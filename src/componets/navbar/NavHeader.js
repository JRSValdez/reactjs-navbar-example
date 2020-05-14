import React from "react";

import { FaCode } from "react-icons/fa";

const NavHeader = () => {
  return (
    <li className="logo">
      <a href="#" className="nav-link">
        <span className="link-text logo-text">J R S V</span>
        <FaCode size="32px" color="#9fff05" />
      </a>
    </li>
  );
};

export default NavHeader;
