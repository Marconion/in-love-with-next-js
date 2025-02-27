import React from "react";
import "./CustomButton.css";

export const CustomButton = ({ type, label, onClick }) => {
  return (
    <button type={type} className="custom-button" onClick={onClick}>
      <h3>{label}</h3>
    </button>
  );
};
