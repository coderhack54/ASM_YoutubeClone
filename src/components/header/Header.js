import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  const [inputSearch, setInputSearch] = useState("")

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">

        <img
          src="https://lh4.googleusercontent.com/kkYl5eJg7PEYSeUb1EaHEgI1ce1DyY-hu_X0nYOLvdc5iG721bF0_GJIXJBNVI8Jjxo-76E6fBzeWF6HLQyNPqUTjKUigdodYmP6JQXYlQ8BBZyIsMHctMhPokkmgwuKv0cz5bWT"
          alt=""
          className="header__logo"
        />
        </Link>
      </div>
      <div className="header__input">
        <input value={inputSearch} onChange={(e)=>setInputSearch(e.target.value)} type="text" placeholder="Search" />
        <Link to={`/search/${inputSearch}`}>
        <SearchIcon className="header__searchIcon" />
         </Link>
      </div>
      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
