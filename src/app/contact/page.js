import React from "react";
import "./page.css";
import { CustomButton } from "../components/CustomButton";

const Page = () => {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Contact Us</h1>
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
  );
};

export default Page;
