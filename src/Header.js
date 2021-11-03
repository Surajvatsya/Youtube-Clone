//rfce
import React, { useState } from 'react'
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import './Header.css'
//npm install @emotion/react
// npm install @emotion/styled

function Header() {

  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header_left">
        <MenuIcon />
        <Link to="/">
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="" />
        </Link>
      </div>

      <div className="header__input">
        <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder="Search" type="text" />
        <Link to={`search/${inputSearch}`}>
          <SearchIcon className="header__inputButton" />
        </Link>
      </div>

      <div className="header_icons">
        <VideoCallIcon className="header_icon" />
        <AppsIcon className="header_icon" />
        <NotificationsIcon className="header_icon" />
        <Avatar alt="Remy Sharp" src="https://avatars.githubusercontent.com/u/68156079?v=4" />
      </div>
    </div>
  )
}

export default Header
