import React from "react";
import { AiOutlineDashboard, AiFillFileImage } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./sidebar.css";
const Sidebar = () => {
  return (
    <div className="Sidebar_Container">
      <nav className="Sidebar_Menu">
        <div className="Sidebar_MenuButton">
          <span className="Sidebar_MenuSpan">
            <div className="Siderbar_Menu_span_icon">
              <AiOutlineDashboard />
            </div>
            <span className="Sidebar_Menu_list">
              <Link to={"/admin/dashboard"}>Хянах самбар</Link>
            </span>
          </span>
        </div>
        <div className="Sidebar_MenuButton">
          <span className="Sidebar_MenuSpan">
            <div className="Siderbar_Menu_span_icon">
              <AiFillFileImage />
            </div>
            <span className="Sidebar_Menu_list">
              <Link to={"/admin/todo"}>Todo</Link>
            </span>
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
