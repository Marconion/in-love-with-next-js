import React from "react";

export const CardInfo = ({ title, desc, children, bg_color }) => {
  return (
    <div
      style={{
        alignItems: "center",
        textAlign: "center",
        padding: "2rem 4rem",
        backgroundColor: bg_color || "#be9f8e",
        borderRadius: "1rem",
        margin: "0.5rem",
      }}>
      <h3 className="text-center w-50 text-2xl" style={{ color: "white" }}>
        {title}
      </h3>
      <div
        style={{
          color: "white",
          paddingTop: "1rem",
        }}>
        {desc}
      </div>
      {children}
    </div>
  );
};
