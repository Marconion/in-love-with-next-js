"use client";
import React from "react";
import "./CustomButton2.css";

export const CustomButton2 = ({
  type,
  label,
  onClick,
  bg_color,
  labelColor,
}) => {
  return (
    <button
      type={type}
      className="custom-button"
      onClick={onClick}
      style={{
        backgroundColor: bg_color || "#be9f8e",
        color: labelColor || "white",
      }}>
      <h3>{label}</h3>
    </button>
  );
};
