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
      <h3
        className="read-the-docs w-44"
        style={{ color: "white", textShadow: "1px 2px 2px black" }}>
        {title}
      </h3>
      <p
        style={{
          color: "white",
          paddingTop: "1rem",
          textShadow: "1px 2px 2px black",
        }}>
        {desc}
      </p>
    </div>
  );
};
