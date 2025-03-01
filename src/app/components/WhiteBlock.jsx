import React from "react";

const WhiteBlock = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        color: "black",
        padding: "0.5rem",
        borderRadius: "10px",
        // margin: "1rem 1rem",
      }}>
      {children}
    </div>
  );
};

export default WhiteBlock;
