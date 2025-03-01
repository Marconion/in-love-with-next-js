import Image from "next/image";
// import "./page.css";
import { Footer } from "./components/Footer";
import { StoreBadges } from "./components/StoreBadges";
import { Card } from "./components/Card";
import { CardInfo } from "./components/CardInfo";
import logo from "./components/assets/Logo transparent.png";
import Circle_img from "./components/assets/Circle.png";
import image1 from "@/app/components/assets/images/img1.jpg";
import image2 from "@/app/components/assets/images/img2.jpg";
// import video from "@/app/components/assets/images/video.mp4";
import { Circle } from "./components/Circle";
import Video from "next-video";
import video from "/videos/video.mp4";

import FadeInSection from "./components/FadeInSection";
import FadeIn from "./components/FadeIn";

export default function Home() {
  return (
    <>
      <FadeIn>
        <div>
          <Image src={logo} className="logo" alt="In Love logo" />
        </div>
      </FadeIn>

      <main className="flex flex-col gap-6 row-start-2 sm:items-start">
        {/* Background Circle */}
        <FadeIn>
          <Circle />
        </FadeIn>

        {/* First Section */}
        <FadeInSection>
          <div
            style={{
              textAlign: "center",
              marginTop: "2rem",
              marginBottom: "2rem",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
            }}>
            <p className="read-the-docs">Welcome to My Website!</p>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
              animi vitae! Eligendi non optio repellendus ad exercitationem, ab
              reiciendis iure?
            </p>
          </div>
        </FadeInSection>

        {/* Video Section */}
        <FadeInSection>
          <div className="w-full">
            <Video
              width="100%"
              // height="240"
              autoPlay
              controls={false}
              muted
              loop
              preload="auto"
              src={video}
            />
          </div>
        </FadeInSection>

        {/* Text Section */}
        <FadeInSection>
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
          {/* <Image
            style={{
              zIndex: -10,
              position: "absolute",
              right: "-70px",
              bottom: "0px",
              rotate: "225deg",
              opacity: 0.3,
            }}
            src={Circle_img}
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          /> */}
          <div
            style={{
              textAlign: "center",
              marginTop: "2rem",
              marginBottom: "2rem",
            }}>
            <p className="read-the-docs">Join me on a journey</p>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
              animi vitae! Eligendi non optio repellendus ad exercitationem, ab
              reiciendis iure?
            </p>
          </div>
        </FadeInSection>

        {/* Retreat Card */}
        <FadeInSection>
          <Card
            img={image1}
            title="Our next retreat"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, animi vitae"
            buttonLink="/next_retreat"
          />
        </FadeInSection>

        {/* Meditation Card */}
        <FadeInSection>
          <Card
            img={image2}
            title="Online Cosmo Meditation"
            content="Based on donations. I will guide you through a meditation and it will be in Russian language"
            buttonLink={"/cosmo"}
          />
        </FadeInSection>

        {/* Dark Section */}
        <FadeInSection>
          <div
            className="text-center"
            style={{ backgroundColor: "rgb(66, 66, 66)", padding: "2rem" }}>
            <p style={{ color: "white" }}>Join me on a journey</p>
            <p className="desc" style={{ color: "rgb(192, 192, 192)" }}>
              Yoga By Yuliya creates transformative, long lasting and
              sustainable results.
            </p>
          </div>
        </FadeInSection>

        {/* Sign Up Section */}
        <FadeInSection>
          <div>
            <Image
              style={{
                zIndex: -10,
                position: "absolute",
                left: "-70px",
                bottom: "250px",
                rotate: "180deg",
                opacity: 0.3,
              }}
              src={Circle_img}
              alt="Next.js logo"
              width={180}
              height={38}
              priority
            />
            {/* <div>
              <Image
                style={{
                  zIndex: -10,
                  position: "absolute",
                  right: "-70px",
                  bottom: "200px",
                  rotate: "135deg",
                  opacity: 0.3,
                }}
                src={Circle_img}
                alt="Next.js logo"
                width={180}
                height={38}
                priority
              />
            </div> */}
            <p
              className="desc text-center"
              style={{ color: "black", padding: "2rem" }}>
              Whether you have 5 or 45 minutes to dedicate that day, there is
              something for everyone to practice anywhere and anytime.
            </p>

            {/* SIGN UP */}
            <FadeInSection>
              <CardInfo
                title="Signup to the platform"
                desc="Monthly $20 // Yearly $150"
              />
              <StoreBadges />
            </FadeInSection>
          </div>
        </FadeInSection>
      </main>

      <Footer />
    </>
  );
}
