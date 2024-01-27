import React from 'react'
import '../navigation/Sidenav.css'
import logo from '../assets/Instagram_logo.png'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MenuIcon from '@mui/icons-material/Menu';

const Sidenav = () => {
  return (
    <div className='sidenav'>
      <img src={logo} alt=""  className='sidenav__logo'/>
      <div className="sidenav__buttons">

        <button className="sidenav__button">
          <HomeIcon/>
          <span>Home</span>
        </button>

        <button className="sidenav__button">
          <SearchIcon/>
          <span>Search</span>
        </button>

        <button className="sidenav__button">
          <ExploreIcon/>
          <span>Explore</span>
        </button>

        <button className="sidenav__button">
          <SlideshowIcon/>
          <span>Reels</span>
        </button>

        <button className="sidenav__button">
          <ChatIcon/>
          <span>Messages</span>
        </button>

        <button className="sidenav__button">
          <FavoriteBorderIcon/>
          <span>Notifications</span>
        </button>

        <button className="sidenav__button">
          <AddCircleOutlineIcon/>
          <span>Create</span>
        </button>

      </div>
      <div className="sidenav__more">
        <button className='sidenav__button'>
          <MenuIcon/>
          <span>More</span>
        </button>
      </div>
    </div>
  )
}

export default Sidenav