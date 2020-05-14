import React from "react";

import { Link } from "react-router-dom";

const NavItem = ({ page, activeIndex, onPageClick }) => {
  const { icon, title, id, path } = page;

  const isActive = id == activeIndex;

  return (
    <li className="nav-item" onClick={() => onPageClick(id)}>
      <Link to={path} className={`nav-link ${isActive && "nav-link-active"}`}>
        {icon}
        <span className="link-text">{title}</span>
      </Link>
    </li>
  );
};

export default NavItem;
