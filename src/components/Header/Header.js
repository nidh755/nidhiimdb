import React from "react";
import { Link } from "react-router-dom";
import log from "../../images/logo.png";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">IMDb Movie App</div>
      </Link>
      <div className="log-image">
        <img src={log} alt="log" />
      </div>
    </div>
  );
};

export default Header;