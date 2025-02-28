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
      <FadeIn>
        <Image
          src={image2}
          alt="About"
          width={250}
          height={250}
          style={{
            position: "absolute",
            // top: "4rem",
            zIndex: -1,
            opacity: 0.3,
            width: "100%",
            height: "auto",
          }}
        />
      </FadeIn>

      <div className="container">
        <div className="text-container">
          <h1>Cosmo</h1>
          <p>Learn more about Cosmo.</p>
          <FadeInSection>
            <div className="description">
              <p>
                This page is dedicated to exploring the world of Cosmo, its
                benefits, and how you can participate in upcoming sessions.
              </p>
              <div style={{ margin: "3rem 0", textAlign: "center" }}>
                <h2 className="text-2xl pb-2">Upcoming Sessions</h2>
                <ul>
                  <li>
                    <p className="text-md underline underline-offset-4">
                      Session 1:{" "}
                    </p>
                    <p>Introduction to Cosmo</p>
                  </li>
                  <li>
                    <p className="text-md underline underline-offset-4">
                      Session 2:{" "}
                    </p>
                    <p>Advanced Techniques</p>
                  </li>
                  <li>
                    <p className="text-md underline underline-offset-4">
                      Session 3:{" "}
                    </p>
                    <p>Q&A with Experts</p>
                  </li>
                </ul>
              </div>
              {/* Additional content: Call to action for joining the sessions */}
              <h2 className="text-2xl pb-2">Join Us!</h2>
              <p>
                Don't miss out on the opportunity to dive deeper into the world
                of Cosmo. Sign up for our newsletter for updates on upcoming
                sessions!
              </p>
            </div>
          </FadeInSection>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cosmo;
