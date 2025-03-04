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

import FadeInSection from "../components/FadeInSection";
import FadeIn from "../components/FadeIn";
import { CustomButton } from "../components/CustomButton";

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
          <div style={{ padding: "0rem 2rem 0rem", textAlign: "center" }}>
            <h1 className="pb-4">In Love With... Portugal</h1>
            <TransparentBlock>
              <h2> A 7-Day Yoga & Energy Practice Retreat</h2>
            </TransparentBlock>
            <p className="pb-4">
              Escape to the breathtaking landscapes of Portugal for a
              transformative 7-day retreat, where you’ll reconnect with yourself
              through yoga, energy practices, and soulful experiences. Nestled
              in a serene location, this retreat is designed to nourish your
              body, mind, and spirit—immersing you in nature, deep relaxation,
              and self-discovery.
            </p>
            <TransparentBlock>
              <h2>What Awaits You</h2>
            </TransparentBlock>
            <ul className="flex flex-col mb-4">
              <li>
                🌿 Morning Yoga & Meditation – Start each day with grounding
                yoga flows and guided meditations overlooking the ocean or
                surrounded by lush greenery.
              </li>
              <li>
                💫 Energy Practices & Healing Sessions – Connect with your inner
                power through breathwork, sound healing, and movement-based
                energy work.
              </li>
              <li>
                🏝️ Nature & Exploration – Experience Portugal’s raw beauty with
                beach walks, mindful hikes, and sunset rituals.
              </li>
              <li>
                🧘‍♀️ Sacred Circles & Reflection – Gather with like-minded women
                for heart-opening conversations and deep personal insights.
              </li>
              <li>
                ✨ Time for You – Whether you crave relaxation, journaling, or
                simply gazing at the stars, this retreat offers space to just
                be.
              </li>
            </ul>
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
              objectFit: "cover",
            }}>
            <Image
              key="retreat1"
              src={retreat1}
              alt="Retreat 1"
              style={{
                position: "absolute",
                right: 0,
                top: 0,
                right: "-40%",
                borderRadius: "50px",
                objectFit: "cover",
              }}
            />
            <Image
              key="retreat2"
              src={retreat2}
              alt="Retreat 2"
              style={{
                position: "absolute",
                top: "25%",
                left: "-65%",
                borderRadius: "50px",
                objectFit: "cover",
              }}
            />
            <Image
              key="retreat3"
              src={retreat3}
              alt="Retreat 3"
              style={{
                position: "absolute",
                top: "50%",
                right: "-45%",
                borderRadius: "50px",
              }}
            />
            <Image
              key="circle1"
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
              key="circle2"
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
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </FadeInSection>

        <FadeInSection>
          <p className="my-6 p-6">
            Join us in Portugal for an unforgettable week of self-love, renewal,
            and connection. Leave feeling lighter, stronger, and truly in love
            with yourself and life.
          </p>
          <div className="flex flex-col justify-center align-middle mx-24">
            <CustomButton type={"submit"} label="Register" />
          </div>
        </FadeInSection>
      </div>
      <Footer />
    </div>
  );
};

export default NextRetreat;
