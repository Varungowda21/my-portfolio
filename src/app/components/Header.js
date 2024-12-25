"use client";

import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header id="home">
      <nav id="dekstop-nav">
        <div className="logo_title">Varun Gowda.K</div>
        <ul className="nav-links">
          <li>
            <Link href="#home">Home</Link>
          </li>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#skills">Skills</Link>
          </li>
          {/* <li>
            <Link href="#projects">Projects</Link>
          </li> */}
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">Varun Gowda.K</div>
        <div className="hamburger-menu">
          <div
            className={`hamburger-icon ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul
            className={`menu-links ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            {/* <li>
              <a href="#projects">Projects</a>
            </li> */}
            <li>
              <a href="#contact">Contact</a>
            </li>
            {/* Uncomment this if you want a blog link */}
            {/* <li><a href="/blog.html" target="_blank">Blog</a></li> */}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
