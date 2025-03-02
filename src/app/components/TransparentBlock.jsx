import React from "react";

const TransparentBlock = ({ children }) => {
  return (
    <div
      style={{
        // backgroundColor: "#c6c6c6",
        color: "black",
        padding: "1rem",
        borderRadius: "10px",
        borderColor: "#333",
        borderWidth: "1px",
        margin: "1rem 1rem",
      }}>
      {children}
    </div>
  );
};

export default TransparentBlock;
