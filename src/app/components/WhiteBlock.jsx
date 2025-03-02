import React from "react";

const WhiteBlock = ({
  children,
  borderSize,
  borderRadius,
  color,
  bg_color,
  borderHor,
}) => {
  return (
    <div
      style={{
        backgroundColor: bg_color || "#fff",
        color: color || "black",
        padding: "0.5rem",
        borderRadius: borderRadius || "0px", // Use the borderRadius prop
        border: borderSize ? `${borderSize}px solid white` : "none", // Re-enable the border prop
        borderTop: borderHor ? `${borderSize}px solid white` : "none",
        borderBottom: borderHor ? `${borderSize}px solid white` : "none",
      }}>
      {children}
    </div>
  );
};

export default WhiteBlock;
