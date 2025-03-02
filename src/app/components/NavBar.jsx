import React from "react";
import "./NavBar.css";
import Circle_img from "../components/assets/Circle.png";
import Image from "next/image";
import Link from "next/link";
export const NavBar = () => {
  return (
    <div className="nav-bar">
      <Image src={Circle_img} className="circle" alt="In Love logo" />
      <nav>
        <ul className="nav-links">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/auth/signin">Sign</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
