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
      <h3 className="read-the-docs" style={{ color: "white" }}>
        {title}
      </h3>
      <p style={{ color: "white", paddingTop: "1rem" }}>{desc}</p>
    </div>
  );
};
