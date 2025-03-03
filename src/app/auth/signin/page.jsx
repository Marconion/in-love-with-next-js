import MochaBack from "@/app/components/MochaBack";
import React from "react";
import "./page.css";
import { CustomButton } from "@/app/components/CustomButton";
import { Footer } from "@/app/components/Footer";
import signinImage from "../../../../public/signin.png";

import FadeIn from "@/app/components/FadeIn";
import Image from "next/image";
import { Circle } from "@/app/components/Circle";
import Link from "next/link";

const SignIn = () => {
  return (
    <div className="container w-full h-full" style={{ overflow: "hidden" }}>
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
            maxWidth: "100vw",
          }}
        />
      </FadeIn>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "30px 40px 0",
          margin: "0 auto", // Center the container
          maxWidth: "100%", // Ensure the container does not exceed the viewport width
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
          <div className="text-center">
            <p className="mb-2">You don't have an account?</p>
            <Link
              style={{
                color: "#be9f8e", // be9f8e f3ded1
                backgroundColor: "white",
                fontWeight: 400,
                zIndex: 5,
                padding: "5px 10px",
                borderRadius: "5px",
                border: "2px solid #be9f8e",
              }}
              href="/auth/signup">
              Sign Up
            </Link>
          </div>
        </form>
        <FadeIn>
          <Circle left={"150px"} top={"650px"} rotation={"0deg"} />
        </FadeIn>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
