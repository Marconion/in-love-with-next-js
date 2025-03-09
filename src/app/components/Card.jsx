import React from "react";
import "./Card.css";
import { CustomButton } from "./CustomButton";
import Image from "next/image";

export const Card = ({
  img,
  title,
  content,
  buttonLink,
  showButton = true,
}) => {
  return (
    <div className="card">
      <Image src={img} alt="Card" className="card-image" />
      <h2>{title}</h2>
      <p className="card-content">{content}</p>
      {showButton && <CustomButton label="Read More" buttonLink={buttonLink} />}
    </div>
  );
};
