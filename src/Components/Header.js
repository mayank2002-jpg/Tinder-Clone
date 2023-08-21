import React from "react";
import "../Styles/Header.css";
import PersonIcon from "@mui/icons-material/Person2";
import IconButton from "@mui/material/IconButton";
import logo from "../Img/logo.png";
import ForumIcon from "@mui/icons-material/Forum";
const Header = () => {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="medium" className="header_icon" />
      </IconButton>
      <img className="header_logo" src={logo} alt="logo" />
      <IconButton>
        <ForumIcon fontSize="medium" className="header_icon" />
      </IconButton>
    </div>
  );
};

export default Header;
