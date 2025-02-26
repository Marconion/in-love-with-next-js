import Image from "next/image";
import "./page.css";
import { NavBar } from "./components/NavBar";
import Circle_img from "./components/assets/Circle.png";
import logo from "./components/assets/Logo transparent.png";
import image1 from "@/app/components/assets/images/img1.jpg";
import image2 from "@/app/components/assets/images/img2.jpg";
import { Card } from "./components/Card";

export default function Home() {
  return (
    <>
      <div className="nav">
        <NavBar />
      </div>
      <div>
        <Image src={logo} className="logo" alt="In Love logo" />
      </div>
      <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
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
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
      </div>
    </>
  );
}
