"use client";
import React from "react";

interface LectureCardProps {
  img: string;
  name: string;
  eventDate: string;
  speaker: string;
}

const LectureCard: React.FC<LectureCardProps> = (props) => {
  const { img, name, eventDate, speaker} = props;

  return (
    <div className="border justify-center items-center lg:w-max w-[80vw] border-gray-300 rounded-lg p-4 shadow-md flex flex-col">
      <div className="flex  items-center justify-center">
        <img src={img} alt="" loading="lazy" className="w-[20rem] h-[31.25rem] object-contain rounded-xl"/>
      </div>
      <div className="mt-4 font-mono">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-100">
          <span className="text-zinc-500 underline">Event Date</span> :{" "}
          {eventDate}
        </p>
        <p className="text-gray-100">
          <span className="text-zinc-500 underline">Speaker</span> :{" "}
          {speaker}
        </p>
      </div>
    </div>
  );
};

export default LectureCard;
