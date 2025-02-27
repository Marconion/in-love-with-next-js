import React from "react";

export const CardInfo = ({ title, desc }) => {
  return (
    <div
      style={{
        alignItems: "center",
        textAlign: "center",
        padding: "2rem",
        backgroundColor: "#be9f8e",
        borderRadius: "1rem",
        margin: "0.5rem",
      }}>
      <p className="read-the-docs" style={{ color: "white" }}>
        {title}
      </p>
      <h3 style={{ color: "white" }}>{desc}</h3>
    </div>
  );
};
