'use client'
import React from "react";
import { Button } from "../ui/button";
import BlurImage from "../BlurImage/blurimage";
interface EventCardProps {
  img: string;
  name: string;
  eventDate: string;
  regDate: string;
  organizingClub: string;
  accent: string;
}

const EventCard: React.FC<EventCardProps> = (props) => {
  const { img, name, eventDate, regDate, organizingClub, accent } = props;

  return (
    <div className="border lg:w-max w-[full] mx-2 lg:max-w-[24rem] border-gray-300 rounded-lg lg:p-4 p-6 shadow-md flex flex-col">
      <div className="flex items-center rounded-xl overflow-hidden justify-center object-cover">
      <img src={img} alt="" className="object-contain rounded-xl w-[75vw] lg:w-[19.6875rem] h-[27.8125rem] lg:h-[28rem]" loading="lazy" />
      </div>
      <div className="mt-4 font-mono">
        <h2 className="text-xl lg:text-[1.25rem] font-semibold">{name}</h2>
        <p className="text-gray-100">
          <span className="text-zinc-500 underline">Event Date</span> :{" "}
          {eventDate}
        </p>
        <p className="text-gray-100">
          <span className="text-zinc-500 underline">Registration Date</span> : {regDate}
        </p>
        <p className="text-gray-100">
          <span className="text-zinc-500 underline">Organizing Club</span> :{" "}
          {organizingClub}
        </p>
      </div>
    </div>
  );
};

export default EventCard;
