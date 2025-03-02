import MochaBack from "@/app/components/MochaBack";
import React from "react";
import "./page.css";
import { CustomButton } from "@/app/components/CustomButton";
import { Footer } from "@/app/components/Footer";
import signinImage from "../../../../public/signin.png";

import FadeIn from "@/app/components/FadeIn";
import Image from "next/image";

const SignIn = () => {
  return (
    <div className="container">
      <FadeIn>
        <Image
          src={signinImage}
          alt="Sign In"
          // width={250}
          // height={250}
          style={{
            position: "absolute",
            // top: "4rem",
            right: 0,
            zIndex: -1,
            opacity: 0.3,
            width: "100%",
            height: "auto",
            overflow: "hidden",
          }}
        />
      </FadeIn>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "0 40px",
        }}>
        <h1>Sign In</h1>
        <p className="par">
          Feel free to reach out for any inquiries or feedback.
        </p>
        <form className="contact-form">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />

          <CustomButton type={"submit"} label="Sign In" />
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
