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
          <div className="description">
            <FadeInSection>
              <p className="pb-6">
                This page is dedicated to exploring the world of Cosmo, its
                benefits, and how you can participate in upcoming sessions.
              </p>
            </FadeInSection>
            <FadeInSection>
              <h2>Cosmoenergetics</h2>
              <h3 className="pb-6 pt-6">How Cosmoenergetics Works</h3>
              <ol type="1" className="text-left">
                <li>
                  <b>Energy Channels</b>
                  <p>
                    Practitioners believe there are specific cosmic energy
                    channels that can be opened and directed toward a person to
                    remove blockages and restore balance.
                  </p>
                </li>
                <li>
                  <b>Healing Through Frequencies</b>
                  <p>
                    Different energy frequencies are associated with various
                    aspects of healing (e.g., health, emotions, protection).
                  </p>
                </li>
                <li>
                  <b>Chakras & Aura Cleansing</b>
                  <p>
                    Cosmoenergetics is often used to cleanse and restore the
                    human biofield (aura) and chakras.
                  </p>
                </li>
                <li>
                  <b>Remote Healing - Non-Invasive Approach</b>
                  <p>
                    Healing is typically done through meditation, visualization,
                    or distant energy transmission without physical touch.
                  </p>
                </li>
                <li>
                  <b>Spiritual Growth & Protection</b>
                  <p>
                    Besides healing, it is used for spiritual growth, removing
                    negative influences, and increasing intuition.
                  </p>
                </li>
              </ol>
            </FadeInSection>
            <FadeInSection>
              <h3 className="pb-6 pt-6">Applications of Cosmoenergetics</h3>
              <ul className="flex flex-col list-disc text-left pl-6">
                <li>
                  <p>
                    Healing physical ailments (alternative to traditional
                    medicine)
                  </p>
                </li>
                <li>
                  <p>Emotional and psychological balance</p>
                </li>
                <li>
                  <p>Protection from negative influences or energy</p>
                </li>
                <li>
                  <p>Spiritual awakening and higher consciousness</p>
                </li>
                <li>
                  <p>Improving mental clarity and focus</p>
                </li>
              </ul>
            </FadeInSection>
            <FadeInSection>
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
            </FadeInSection>
            <FadeInSection>
              <h2 className="text-2xl pb-2">Join Us!</h2>
              <p>
                Don't miss out on the opportunity to dive deeper into the world
                of Cosmo. Sign up for our newsletter for updates on upcoming
                sessions!
              </p>
            </FadeInSection>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cosmo;
