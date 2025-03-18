"use client";
import React from "react";
import BlurImage from "../BlurImage/blurimage";
import Image from "next/image";

interface SponsorCardProps {
  img: string;
  name: string;
  title: string;
  subtitle: string;
  large: boolean;
}

const SponsorCard: React.FC<SponsorCardProps> = (props) => {
  const { img, name, title, subtitle, large } = props;

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-mono text-xl">{title}</h1>
      <h1 className="font-mono text-xl">{subtitle}</h1>
      <div className="main-sponsor-box w-[22rem] h-[20rem] relative">
        <div className="absolute inset-0">
          <BlurImage
            image="/images/SponsorCard/basee.svg"
            width={190}
            height={190}
            alt="missing"
            // rounded="rounded-sm"
          />
        </div>
        <div
          className={`${name === "Azure" && "lg:w-[20rem] w-[18rem]"}  ${
            large ? "w-[20rem]" : "w-[16rem]"
          } absolute top-[30%] ${
            name === "Azure" ? "left-[54%]" : "left-[50%]"
          } transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center
           
            ${name === "RevUP" && "scale-150"}
          `}
        >
          <Image src={img} width={800} height={800} alt="missing" className="bg-cover" />
        </div>
      </div>
    </div>
  );
};

export default SponsorCard;
