import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import React from "react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
          <div className="items">
            <div className="item">
              <LanguageOutlinedIcon />
              English
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
