import React from "react";
import "./page.css";
import { CardInfo } from "../components/CardInfo";
import { Footer } from "../components/Footer";
import Image from "next/image";
import img1 from "@/app/components/assets/images/img1.jpg";

import FadeInSection from "../components/FadeInSection";
import FadeIn from "../components/FadeIn";

const Page = () => {
  return (
    <>
      <FadeIn>
        <Image
          src={img1}
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
        <h1>About</h1>
        <p>Learn more about me and my mission.</p>
        <div style={{ marginTop: "3rem" }}>
          <FadeInSection>
            <CardInfo
              title={"My vision..."}
              desc={
                <section>
                  <ul
                    style={{
                      flexDirection: "column",
                      textAlign: "center",
                      marginTop: "1rem",
                    }}>
                    <li>Love</li>
                    <li>Energy</li>
                    <li>Self-awarenesss</li>
                    <li>Empower</li>
                    <li>Encourage</li>
                    <li>Enlighten</li>
                  </ul>
                </section>
              }
            />
          </FadeInSection>
        </div>
        <FadeInSection>
          <div style={{ padding: "2rem" }}>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim,
              reprehenderit quo earum aliquam deserunt, sequi voluptatum
              similique pariatur accusantium, voluptates dolores at harum.
              Quaerat repudiandae reiciendis nihil, voluptate minima quibusdam.
            </p>
          </div>
        </FadeInSection>
      </div>
      <div style={{ margin: "20px 0 30px" }}></div>
      <Footer />
    </>
  );
};

export default Page; // Ensure this is the default export
