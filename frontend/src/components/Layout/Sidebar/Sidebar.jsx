import React, { useState } from "react";
import Applications from "../../Applications/Application";
import Analytics from "../../Analytics/Analytics";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Sidebar.css";
import { AnalyticsIcon, ApplicationIcon } from "../../../assets";

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState("Applications");

  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        {/* Sidebar */}
        <div className="col-12 col-md-3 bg-light p-0 shadow-sm">
          <ul className="nav flex-column">
            <li
              className={`nav-item py-2 px-3 ${
                activeMenu === "Applications" ? "bg-selected" : ""
              }`}
              onClick={() => setActiveMenu("Applications")}
            >
              <div className="d-flex align-items-center gap-2">
                <img
                  src={ApplicationIcon}
                  alt="Applications Icon"
                  className="me-2"
                  style={{ width: "20px", height: "20px" }}
                />
                <span>Applications</span>
              </div>
            </li>
            <li
              className={`nav-item py-2 px-3 ${
                activeMenu === "Analytics" ? "bg-selected" : ""
              }`}
              onClick={() => setActiveMenu("Analytics")}
            >
              <div className="d-flex align-items-center gap-2">
                <img
                  src={AnalyticsIcon}
                  alt="Analytics Icon"
                  className="me-2"
                  style={{ width: "20px", height: "20px" }}
                />
                <span>Analytics</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Content Section */}
        <div className="col-12 col-md-9 p-4 section">
          {activeMenu === "Applications" && <Applications />}
          {activeMenu === "Analytics" && <Analytics />}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
