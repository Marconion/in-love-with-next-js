import React from "react";
import "./page.css";
import { CardInfo } from "../components/CardInfo";
import { Footer } from "../components/Footer";
import Image from "next/image";
import img1 from "@/app/components/assets/images/img1.jpg";
import retreat1 from "@/app/components/assets/images/retreat1.jpg";
import retreat2 from "@/app/components/assets/images/retreat2.jpg";
import retreat3 from "@/app/components/assets/images/retreat3.jpg";
import Circle_img from "@/app/components/assets/Circle.png";

import FadeInSection from "../components/FadeInSection";
import FadeIn from "../components/FadeIn";

const NextRetreat = () => {
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
        <h1 className="text-center">
          Our next <br /> retreat
        </h1>
        <p>Here you will learn about our upcoming events.</p>
        <div style={{ marginTop: "-1rem" }}>
          <FadeInSection></FadeInSection>
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
          <Image
            style={{
              zIndex: -10,
              position: "absolute",
              left: "-70px",
              bottom: "50px",
              rotate: "45deg",
              opacity: 0.3,
            }}
            src={Circle_img}
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        </FadeInSection>
      </div>
      <div style={{ margin: "20px 0 30px" }}>
        <FadeInSection>
          <div className="m-4 align-middle flex justify-center">
            <Image
              src={retreat1}
              alt="Retreat 1"
              className="rounded-lg shadow-lg"
            />
          </div>
        </FadeInSection>
      </div>
      <Footer />
    </>
  );
};

export default NextRetreat; // Ensure this is the default export
