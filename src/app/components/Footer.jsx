import React from "react";
import "./Footer.css";
import { IoLogoInstagram } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="row">
        <p>© 2025 "In Love With"</p>
        <p>All rights reserved.</p>
      </div>

      <p>Follow us on social media!</p>
      <p
        style={{
          fontSize: "1rem",
          display: "flex",
          gap: "2rem",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "1rem",
        }}>
        <a
          href="https://www.instagram.com/yuliyavorobyova?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noreferrer">
          <IoLogoInstagram />
        </a>
        <FaTelegramPlane />
        <FaFacebookSquare />
        <FaTiktok />
      </p>
    </div>
  );
};
