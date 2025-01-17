import React from "react";
import "./Navbar.css";
import { AvatarIcon, NotificationIcon } from "../../../assets";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="/applications">
            <h4>JobTracker</h4>
          </a>
          <a className="nav-link" href="/application">
            <h5>Applications</h5>
          </a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2 input-searchbar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          <div className="d-flex gap-2">
            <div>
              <img height={25} src={NotificationIcon} alt="" />
            </div>
            <div className="avatar">
              <img height={25} src={AvatarIcon} alt="" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
