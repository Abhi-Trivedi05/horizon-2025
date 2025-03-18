import SponsorCard from "@/components/SponsorCard/sponsorCard";
import React from "react";

const Sponsors = () => {
  return (
    <div className="pt-20 w-full">
      <h1 className="text-4xl font-mono w-screen pb-7 text-center">Sponsors</h1>
      <div className="flex flex-wrap lg:flex-row flex-col gap-y-10 gap-x-10 justify-evenly  lg:ml-0 ">
        <SponsorCard
          img="/images/SponsorLogos/Azure.svg"
          title="Ecosystem"
          subtitle="Partner"
          name="Azure"
          large = {true}
        />
        <SponsorCard
          img="/images/SponsorLogos/Reskilll.svg"
          title="Ecosystem"
          subtitle="Partner"
          name="Reskill"
          large = {true}
        />
      </div>
      <div className="flex gap-20 lg:flex-row flex-col justify-center items-center">
      <SponsorCard
          img="/images/SponsorLogos/hover.png"
          title="Title"
          subtitle="Sponsor"
          name="HoverRobotiX"
          large = {false}
        />
        <SponsorCard
          img="/images/SponsorLogos/MentorX.png"
          title="Title"
          subtitle="Sponsor"
          name="MentorX"
          large = {false}
        />
        <SponsorCard
          img="/images/SponsorLogos/RevUP.png"
          title="Title"
          subtitle="Sponsor"
          name="RevUP"
          large = {false}
        />
      </div>
      <div className="flex gap-20 lg:flex-row flex-col justify-center items-center">
      <SponsorCard
          img="/images/SponsorLogos/100X.png"
          title="Logistics"
          subtitle="Partner"
          name="100X"
          large = {false}
        />
        <SponsorCard
          img="/images/SponsorLogos/Wolfram.png"
          title="In Association"
          subtitle="With"
          name="Wolfram"
          large = {false}
        />
        <SponsorCard
          img="/images/SponsorLogos/Unstop.png"
          title="Powered By"
          subtitle=""
          name="Unstop"
          large = {false}
        />
      </div>
    </div>
  );
};

export default Sponsors;
