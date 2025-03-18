"use client";
import React, { useEffect } from "react";
import Preloader from "../Preloader/preloader";
import { WavyBackground } from "../Wavy Background/background";
import gsap from "gsap";
import { Separator } from "@/components/ui/separator";
import { useRef } from "react";

const Landing = () => {
  const aboutRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.fromTo(
      "#hero-text",
      {
        y: 50,
        opacity: 0,
      },
      {
        delay: 4,
        duration: 1,
        y: 0,
        opacity: 1,
      }
    );

    gsap.fromTo(
      "#hero-sub-text",
      {
        opacity: 0,
      },
      {
        delay: 5,
        duration: 1,
        opacity: 1,
      }
    );
  }, []);

  return (
    <div className="landing-container">
      <Preloader />
      <WavyBackground className="max-w-4xl mx-auto pb-40 wavy-background">
        <div className="text-center">
          <p
            id="hero-text"
            className="text-4xl font-primary md:text-7xl lg:text-7xl text-white font-bold inter-var"
          >
            Horizon
          </p>
          <p
            id="hero-sub-text"
            className="text-lg px-8 lg:text-xl md:text-lg mt-4 text-white font-normal inter-var"
          >
            Welcome to the Technical Festival of IIIT Vadodara - ICD.
          </p>
        </div>
      </WavyBackground>
      <div ref={aboutRef} className="w-full items-center flex justify-center">
        <h1 className=" font-mono w-full text-center text-6xl">
          About Horizon
        </h1>
      </div>
      <Separator className="my-6 w-11/12 mx-auto bg-zinc-700" />
      <div className=" text-left pl-12 pr-4 lg:text-center text-sm lg:text-lg font-mono mt-8 lg:mt-8 text-zinc-200 flex flex-col gap-8 items-center lg:px-16">
        <p>
          Join us for an incredible experience at{" "}
          <span className="font-primary tracking-widest">HORIZON</span>, the
          Annual Festival of Indian Institute of Information Technology
          Vadodara, International Campus Diu! It's not just an event, it's a
          celebration of technology, innovation, and intellect. Here,
          participants from all corners of India unite to create something truly
          extraordinary.
        </p>
      </div>
    </div>
  );
};

export default Landing;
