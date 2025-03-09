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

const SignUp = () => {
  return (
    <div>
      <div className="container w-full mb-10">
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
            zIndex: 1,
          }}>
          <h1>Sign Up</h1>
          <p className="par">
            Sign up to access exclusive content and features that are only
            available to registered users.
          </p>
          <form className="contact-form">
            <label htmlFor="Name">Name</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />

            <label htmlFor="password">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              style={{ zIndex: 5, marginBottom: "1rem" }}
              required
            />
            <CustomButton type={"submit"} label="Sign Up" />
            <div className="text-center z-10">
              <p className="mb-4">You already have an account?</p>
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
                href="/auth/signin">
                Sign In
              </Link>
            </div>
          </form>
          <FadeIn>
            <Circle left={"150px"} top={"650px"} rotation={"0deg"} />
          </FadeIn>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
