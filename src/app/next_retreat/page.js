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
import { CustomButton } from "../components/CustomButton";

const NextRetreat = () => {
  return (
    <div>
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
        <div style={{ marginTop: "-1rem" }}></div>
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
              bottom: "30px",
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
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "700px",
              overflow: "hidden",
            }}>
            <Image
              src={retreat1}
              // layout="fill"
              objectFit="cover"
              alt="Retreat 1"
              style={{
                position: "absolute",
                right: 0,
                top: 0,
                right: "-40%",
                borderRadius: "50px",
              }}
            />
            <Image
              src={retreat2}
              // layout="fill"
              objectFit="cover"
              alt="Retreat 2"
              style={{
                position: "absolute",
                // right: 0,
                top: "25%",
                left: "-65%",
                borderRadius: "50px",
              }}
            />
            <Image
              src={retreat3}
              // layout="fill"
              objectFit="cover"
              alt="Retreat 3"
              style={{
                position: "absolute",
                // right: 0,
                top: "50%",
                right: "-45%",
                borderRadius: "50px",
              }}
            />
            <Image
              style={{
                zIndex: -10,
                position: "absolute",
                right: "-70px",
                bottom: "350px",
                rotate: "120deg",
                opacity: 0.3,
              }}
              src={Circle_img}
              alt="Next.js logo"
              width={180}
              height={38}
              priority
            />
            <Image
              style={{
                zIndex: -10,
                position: "absolute",
                left: "-70px",
                bottom: "50px",
                rotate: "120deg",
                opacity: 0.3,
              }}
              src={Circle_img}
              alt="Next.js logo"
              width={180}
              height={38}
              priority
            />
          </div>
        </FadeInSection>
        <FadeInSection>
          <p className="mb-6">Join us on our next adventure</p>
          <div className="flex flex-col justify-center align-middle mx-24">
            <CustomButton type={"submit"} label="Register" />
          </div>
        </FadeInSection>
      </div>
      <Footer />
    </div>
  );
};

export default NextRetreat; // Ensure this is the default export
