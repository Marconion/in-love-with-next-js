import React from "react";
import "./page.css";
import image2 from "@/app/components/assets/images/img2.jpg";
import Image from "next/image";
import { Footer } from "../components/Footer";
import FadeIn from "../components/FadeIn";
import FadeInSection from "../components/FadeInSection";

const Cosmo = () => {
  return (
    <>
      <div className="container">
        <FadeIn>
          <Image src={image2} alt="Cosmo" width={"100%"} height={250} />
        </FadeIn>

        <div className="text-container">
          <h1>Cosmo</h1>
          <p>Learn more about Cosmo.</p>
          <p>
            This page is dedicated to exploring the world of Cosmo, its
            benefits, and how you can participate in upcoming sessions.
          </p>
          <div style={{ margin: "3rem 0", textAlign: "center" }}>
            <h2>Upcoming Sessions</h2>
            <ul>
              <li>Session 1: Introduction to Cosmo</li>
              <li>Session 2: Advanced Techniques</li>
              <li>Session 3: Q&A with Experts</li>
            </ul>
          </div>
          {/* Additional content: Call to action for joining the sessions */}
          <h2>Join Us!</h2>
          <p>
            Don't miss out on the opportunity to dive deeper into the world of
            Cosmo. Sign up for our newsletter for updates on upcoming sessions!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cosmo;
