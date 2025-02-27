import React from "react";
import AppStoreBadge from "@/app/components/assets/images/app-store-badge-128x128.png";
import GoogleStoreBadge from "@/app/components/assets/images/google-icon.svg";
import Image from "next/image";

export const StoreBadges = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "1rem",
        paddingBottom: "2rem",
      }}>
      <Image
        src={AppStoreBadge}
        style={{ width: "150px" }}
        alt="App Store Badge"
      />
      <Image
        src={GoogleStoreBadge}
        style={{ width: "150px" }}
        alt="Google Store Badge"
      />
    </div>
  );
};
