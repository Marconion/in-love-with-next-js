import React from "react";

const GreyBack = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "#e6e6e6",
        color: "black",
        padding: "1rem",
        marginLeft: "1rem",
        marginRight: "1rem",
        borderRadius: "10px",
        marginTop: "1rem",
        marginBottom: "1rem",
        boxShadow:
          "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, " +
          "rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, " +
          "rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
      }}>
      {children}
    </div>
  );
};

export default GreyBack;
