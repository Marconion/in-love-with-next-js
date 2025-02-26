import React from "react";
import "./CustomButton.css";

export const CustomButton = ({ label, onClick }) => {
  return (
    <button className="custom-button" onClick={onClick}>
      <h3>{label}</h3>
    </button>
  );
};
