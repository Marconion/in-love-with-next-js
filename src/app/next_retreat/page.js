"use client";
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
import Morning_Yoga from "@/app/components/assets/images/Morning-Yoga.webp";
import Healing from "@/app/components/assets/images/Healing.png";
import Sacred_Circles from "@/app/components/assets/images/Sacred_Circles.png";
import Nature from "@/app/components/assets/images/Nature.png";
import Time from "@/app/components/assets/images/Time.png";

import FadeInSection from "../components/FadeInSection";
import FadeIn from "../components/FadeIn";
import { CustomButton } from "../components/CustomButton";
import Video from "next-video";
// import video from "/videos/Portugal.mp4";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import TransparentBlock from "../components/TransparentBlock";
import GreyBack from "../components/GreyBack";
import MochaBack from "../components/MochaBack";
import { Card } from "../components/Card";

const retreatCardInfo = [
  {
    img: Morning_Yoga,
    title: "Morning Yoga & Meditation",
    content:
      "Start each day with grounding yoga flows and guided meditations overlooking the ocean or surrounded by lush greenery.",
    buttonLink: "/next_retreat",
    showButton: false,
  },
  {
    img: Healing,
    title: "Energy Practices & Healing Sessions",
    content:
      "Connect with your inner power through breathwork, sound healing, and movement-based energy work.",
    showButton: false,
  },
  {
    img: Sacred_Circles,
    title: "Sacred Circles & Reflection",
    content:
      "Gather with like-minded women for heart-opening conversations and deep personal insights",
    showButton: false,
  },
  {
    img: Nature,
    title: "Nature & Exploration",
    content:
      "Experience Portugal's raw beauty with beach walks, mindful hikes, and sunset rituals.",
    showButton: false,
  },
  {
    img: Time,
    title: "Time for You",
    content:
      "Whether you crave relaxation, journaling, or simply gazing at the stars, this retreat offers space to just be.",
    showButton: false,
  },
];

const NextRetreat = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000 }),
  ]);

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
          <div>
            <h1 className="pb-6 text-center mt-12">In Love With... Portugal</h1>
          </div>
          {/* Video Section */}
          <FadeInSection key={"video-section"}>
            <div className="w-full">
              <Video
                width="100%"
                // height="240"
                autoPlay
                controls={false}
                muted
                loop
                preload="auto"
                poster="https://image.mux.com/4baiQRbOFUll4mjeBcfMEGSecwyASDoNTjIpDRFZ201Q/thumbnail.webp"
                src={
                  "https://stream.mux.com/4baiQRbOFUll4mjeBcfMEGSecwyASDoNTjIpDRFZ201Q.m3u8"
                }
                type="application/x-mpegURL"
              />
            </div>
          </FadeInSection>
          <div style={{ padding: "1rem 0rem 0rem", textAlign: "center" }}>
            <div className="mb-8">
              <MochaBack>A 7-Day Yoga & Energy Practice Retreat</MochaBack>
            </div>
            <div>
              <p className="pb-4">
                Escape to the breathtaking landscapes of Portugal for a
                transformative 7-day retreat, where you’ll reconnect with
                yourself through yoga, energy practices, and soulful
                experiences. Nestled in a serene location, this retreat is
                designed to nourish your body, mind, and spirit—immersing you in
                nature, deep relaxation, and self-discovery.
              </p>
            </div>
            <div className="mb-8 mt-4">
              <MochaBack>What Awaits You</MochaBack>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {retreatCardInfo.map((card, index) => (
                <Card key={index} {...card} />
              ))}
            </div>
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
      <div className="container">
        <div className="text-container">
          <h1>Gallery</h1>
        </div>
      </div>
      <div className="mt-8">
        <FadeInSection>
          <Carousel
            plugins={[
              Autoplay({
                delay: 5000,
                loop: true,
                disableOnInteraction: false,
                autoplay: true,
                autoplaySpeed: 5000,
              }),
            ]}>
            <CarouselContent style={{ width: "100%" }}>
              <CarouselItem className="flex justify-center items-center">
                {" "}
                <Image
                  key="retreat1"
                  src={retreat1}
                  alt="Retreat 1"
                  style={{
                    // position: "absolute",
                    // right: 0,
                    // top: 0,
                    // right: "-40%",
                    height: "250px",
                    width: "250px",
                    borderRadius: "50px",
                    objectFit: "cover",
                  }}
                />
              </CarouselItem>
              <CarouselItem className="flex justify-center items-center">
                {" "}
                <Image
                  key="retreat2"
                  src={retreat2}
                  alt="Retreat 2"
                  style={{
                    // position: "absolute",
                    // right: 0,
                    // top: 0,
                    // right: "-40%",
                    height: "250px",
                    width: "250px",
                    borderRadius: "50px",
                    objectFit: "cover",
                  }}
                />
              </CarouselItem>
              <CarouselItem className="flex justify-center items-center">
                {" "}
                <Image
                  key="retreat3"
                  src={retreat3}
                  alt="Retreat 3"
                  style={{
                    // position: "absolute",
                    // right: 0,
                    // top: 0,
                    // right: "-40%",
                    height: "250px",
                    width: "250px",
                    borderRadius: "50px",
                    objectFit: "cover",
                  }}
                />
              </CarouselItem>
            </CarouselContent>
            {/* <CarouselPrevious /> */}
            {/* <CarouselNext /> */}
          </Carousel>
        </FadeInSection>

        <FadeInSection>
          <p className="my-6 p-6">
            Join us in Portugal for an unforgettable week of self-love, renewal,
            and connection. Leave feeling lighter, stronger, and truly in love
            with yourself and life.
          </p>
          <div className="flex flex-col justify-center align-middle mx-24 mb-10">
            <CustomButton type={"submit"} label="Register" />
          </div>
        </FadeInSection>
      </div>
    </div>
  );
};

export default NextRetreat;
