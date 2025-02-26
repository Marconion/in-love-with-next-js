import React from "react";
import "./NavBar.css";
import Circle_img from "../components/assets/Circle.png";
import Image from "next/image";
export const NavBar = () => {
  return (
    <div className="nav-bar">
      <Image src={Circle_img} className="circle" alt="In Love logo" />
      <nav>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};
