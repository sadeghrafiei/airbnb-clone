import React from "react";
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search'
import { ExpandMore, Language } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";

function Header() {
  return (
    <div className="header">
      <img
      className="header__icon"
        src="data:image/png;base64,
        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"
        alt=""
      />

      <div className="header__center">
          <input type="text"/>
          <SearchIcon />
      </div>


      <div className="header__right">
        <p>Become a host</p>
        <Language />
        <ExpandMore />
        <Avatar />
      </div>
      
    </div>
  );
}

export default Header;
