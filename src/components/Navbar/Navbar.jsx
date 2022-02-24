import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import images from "../../constants/images";
import { navbarLinks } from "../../constants/data";

import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app logo" />
      </div>
      <ul className="app__navbar-links">
        {navbarLinks.map((tab) => (
          <li key={tab.id} className="p__opensans">
            <a href={`${tab.link}`}>{tab.title}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          Log In
        </a>
        <div />
        <a href="/" className="p__opensans">
          Book Table
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              {navbarLinks.map((tab) => (
                <li key={tab.id + "xs"} className="p__opensans">
                  <a href={`${tab.link}`}>{tab.title}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
