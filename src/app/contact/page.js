import React from "react";
import "./page.css";
import { CustomButton } from "../components/CustomButton";
import { Footer } from "../components/Footer";
import FadeIn from "../components/FadeIn";
import Image from "next/image";
import signinImage from "../../../public/signin.png";

const Page = () => {
  //   function handleSubmit(event) {
  //     event.preventDefault();
  //   }

  return (
    <>
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
          // justifyContent: "center",
          padding: "0 40px",
          // paddingTop: "30px",
          paddingBottom: "50px",
        }}>
        <h1>Contact Me</h1>
        <p className="par">
          Feel free to reach out for any inquiries or feedback.
        </p>
        <form className="contact-form z-10">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <CustomButton type={"submit"} label="Send" />
        </form>
      </div>
    </>
  );
};

export default Page;
