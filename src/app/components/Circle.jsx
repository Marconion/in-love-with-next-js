import Image from "next/image";
import React from "react";
import Circle_img from "../components/assets/Circle.png";

export const Circle = () => {
  return (
    <Image
      style={{
        zIndex: -10,
        position: "absolute",
        left: "-70px",
        top: "250px",
        rotate: "270deg",
        opacity: 0.3,
      }}
      src={Circle_img}
      alt="Next.js logo"
      width={180}
      height={38}
      priority
    />
  );
};
