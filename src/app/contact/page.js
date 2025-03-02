import React from "react";
import "./page.css";
import { CustomButton } from "../components/CustomButton";
import { Footer } from "../components/Footer";

const Page = () => {
  //   function handleSubmit(event) {
  //     event.preventDefault();
  //   }

  return (
    <>
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
        <form className="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <CustomButton type={"submit"} label="Send" />
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Page;
