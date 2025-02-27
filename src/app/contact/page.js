import React from "react";
import "../about/page.css";
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
          height: "100vh",
          padding: "0 40px",
          // gap: "1.5rem",
          paddingTop: "30px",
        }}>
        <h1>Contact Me</h1>
        <p>Feel free to reach out for any inquiries or feedback.</p>
        <form className="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          {/* <button type="submit">Send</button> */}
          <CustomButton type={"submit"} label="Send" />
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Page;
