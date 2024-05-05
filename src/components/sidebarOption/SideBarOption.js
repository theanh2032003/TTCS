import React from "react";
import "./SidebarOption.css";
import { Link } from "react-router-dom";

const SideBarOption = ({ active, text, Icon, to }) => {
  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
        <Icon />
        <h2>{text}</h2>
      </div>
    </Link>
  );
};

export default SideBarOption;
