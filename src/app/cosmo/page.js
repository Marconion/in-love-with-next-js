import React from "react";
import "./page.css";
import image2 from "@/app/components/assets/images/img2.jpg";
import Image from "next/image";
import { Footer } from "../components/Footer";
import FadeIn from "../components/FadeIn";
import FadeInSection from "../components/FadeInSection";
import MochaBack from "../components/MochaBack";
import GreyBack from "../components/GreyBack";
import TransparentBlock from "../components/TransparentBlock";
import WhiteBlock from "../components/WhiteBlock";
import { Circle } from "../components/Circle";
import { CustomButton } from "../components/CustomButton";
import Link from "next/link";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { CustomButton2 } from "../components/CustomButton2";

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
        </div>
        <div>
          <div className="description">
            <FadeInSection>
              <p className="pb-10 px-6">
                This page is dedicated to exploring the world of Cosmo, its
                benefits, and how you can participate in upcoming sessions.
              </p>
            </FadeInSection>
            <FadeInSection>
              <MochaBack>
                <div className="pt-4 pb-2">
                  <WhiteBlock
                    borderSize={2}
                    borderRadius={10}
                    color={"#fff"}
                    bg_color={"transparent"}
                    borderHor={true}>
                    <h2>Cosmoenergetics</h2>
                  </WhiteBlock>
                  <h3 className="pb-6 pt-6">How Cosmoenergetics Works</h3>
                  <ol type="1" className="text-left">
                    <li>
                      <b>Energy Channels</b>
                      <p>
                        Practitioners believe there are specific cosmic energy
                        channels that can be opened and directed toward a person
                        to remove blockages and restore balance.
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
                        Healing is typically done through meditation,
                        visualization, or distant energy transmission without
                        physical touch.
                      </p>
                    </li>
                    <li>
                      <b>Spiritual Growth & Protection</b>
                      <p>
                        Besides healing, it is used for spiritual growth,
                        removing negative influences, and increasing intuition.
                      </p>
                    </li>
                  </ol>
                </div>
              </MochaBack>
            </FadeInSection>
            <FadeInSection>
              <GreyBack>
                <div className="mb-8">
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
                </div>
              </GreyBack>
            </FadeInSection>
            <FadeInSection>
              <MochaBack>
                <div className="py-2">
                  <WhiteBlock
                    borderSize={2}
                    borderRadius={10}
                    color={"#fff"}
                    bg_color={"transparent"}
                    borderHor={true}>
                    <h2 className="text-2xl">Upcoming Sessions</h2>
                  </WhiteBlock>
                  <ul className="grid grid-cols-1 gap-4 mt-6">
                    <WhiteBlock borderRadius={10}>
                      <li>
                        <p className="text-md underline underline-offset-4">
                          Session 1:{" "}
                        </p>
                        <p>Introduction to Cosmo</p>
                      </li>
                    </WhiteBlock>
                    <WhiteBlock borderRadius={10}>
                      <li>
                        <p className="text-md underline underline-offset-4">
                          Session 2:{" "}
                        </p>
                        <p>Advanced Techniques</p>
                      </li>
                    </WhiteBlock>
                    <WhiteBlock borderRadius={10}>
                      <li>
                        <p className="text-md underline underline-offset-4">
                          Session 3:{" "}
                        </p>
                        <p>Q&A with me - Ask and I will gladly answer to you</p>
                      </li>
                    </WhiteBlock>
                  </ul>
                </div>
              </MochaBack>
            </FadeInSection>
            <FadeInSection>
              <TransparentBlock>
                <h2 className="text-2xl">Join Us!</h2>
                <p>
                  Don't miss out on the opportunity to dive deeper into the
                  world of Cosmo. Sign up for our newsletter for updates on
                  upcoming sessions!
                </p>
                <div className="mt-4">
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <CustomButton2
                        label={"Sign Up"}
                        buttonLink={"/auth/signup"}
                      />
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently
                          delete your account and remove your data from our
                          servers.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </TransparentBlock>
            </FadeInSection>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cosmo;
