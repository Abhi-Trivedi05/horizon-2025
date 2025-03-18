"use client";
import React from "react";
import Image from "next/image";
import Preloader from "@/components/Preloader/preloader";
import Landing from "@/components/Landing/landing";
import { Separator } from "@radix-ui/react-separator";
import SponsorInfinite from "@/components/SponsorLogoMoving/SponsorInfinite";
import KeyEventCards from "@/components/KeyEventCards/keyeventcards";
import { eventDets } from "@/components/KeyEventCards/KeyEventsCardsDB";
import VerticalTimeline from "@/components/VerticalTimeline/verticaltimeline";


const Home = () => {

  return (
    <div className="flex flex-col items-center">
      <Landing />
      <Separator className="my-6 w-11/12 mx-auto p-[0.05rem] bg-zinc-700"/>
      <div className="flex flex-col items-center w-full overflow-hidden">
        <h1 className="font-mono text-center text-4xl mb-8">Meet our Sponsors!</h1>
        <SponsorInfinite />
      </div>
      {/* <Separator className="my-6 w-11/12 mx-auto p-[0.05rem] bg-zinc-700"/> */}
      {/* <div className="flex flex-col items-center w-full">
        <h1 className="font-fancy pb-8 text-3xl ">Key Events</h1>
        <div className="flex flex-col w-full  justify-center items-center gap-8">
          {eventDets.map((event, index) => (
            <KeyEventCards
              key={index}
              title={event.title}
              poster={event.poster}
              desc={event.desc}
              reverse={index % 2 === 1} 
            />
          ))}
        </div>
      </div> */}

      <Separator className="my-6 w-11/12 mx-auto p-[0.05rem] bg-zinc-700"/>
      <div>
        <VerticalTimeline />
      </div>
    </div>
  );
};

export default Home;
