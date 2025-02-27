import Image from "next/image";
import "./page.css";
import { NavBar } from "./components/NavBar";
import Circle_img from "./components/assets/Circle.png";
import logo from "./components/assets/Logo transparent.png";
import image1 from "@/app/components/assets/images/img1.jpg";
import image2 from "@/app/components/assets/images/img2.jpg";
import video from "../../videos/video.mp4";

import { Card } from "./components/Card";
import { Footer } from "./components/Footer";

import { motion } from "framer-motion";
import { StoreBadges } from "./components/StoreBadges";
import { CardInfo } from "./components/CardInfo";

export default function Home() {
  return (
    <>
      <div>
        <Image src={logo} className="logo" alt="In Love logo" />
      </div>
      <div>
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Image
            style={{
              zIndex: -10,
              position: "absolute",
              left: "-70px",
              top: "250px",
              rotate: "270deg",
              opacity: 0.3,
            }}
            // className="dark:invert"
            src={Circle_img}
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
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
          <div className="video">
            <video
              src={video}
              controls
              autoFocus
              loop
              muted
              autoPlay
              style={{ width: "100%", maxWidth: "600px" }}
            />
          </div>{" "}
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
          <Card
            img={image1}
            title={`Our next retreat`}
            content={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, animi
        vitae`}
            buttonLink="/pages/About"
          />
          <Card
            img={image2}
            title={`Online Cosmo Meditation`}
            content={`Based on donations. I will guide you through a meditation and it will be in russian language`}
          />
          <div
            style={{
              backgroundColor: "rgb(66, 66, 66)",
              paddingTop: "2rem",
              paddingBottom: "2rem",
            }}>
            <p className="read-the-docs" style={{ color: "white" }}>
              Join me on a journey
            </p>
            <p className="desc" style={{ color: "rgb(192, 192, 192)" }}>
              Yoga By Yuliya creates transformative, long lasting and
              sustainable results.
            </p>
          </div>
          <div>
            <p className="desc" style={{ color: "black", padding: "2rem" }}>
              Whether you have 5 or 45 minutes to dedicate that day there is
              something for everyone to practise anywhere and anytime.
            </p>

            {/* SIGN UP */}
            <CardInfo
              title={"Signup to the platform"}
              desc={"Monthly 20$ // Yearly 150$"}
            />
            <StoreBadges />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
