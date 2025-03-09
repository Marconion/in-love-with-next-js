"use client";
import React from "react";
import "./CustomButton.css";

export const CustomButton = ({
  type,
  label,
  onClick,
  buttonLink,
  bg_color,
  labelColor,
}) => {
  const handleButtonClick = () => {
    window.location.href = buttonLink;
  };

  return (
    <button
      type={type}
      className="custom-button z-10"
      onClick={handleButtonClick}
      style={{
        backgroundColor: bg_color || "#be9f8e",
        color: labelColor || "white",
      }}>
      <h3>{label}</h3>
    </button>
  );
};
