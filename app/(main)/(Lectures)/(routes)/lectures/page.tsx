import React from "react";
import LectureCard from "@/components/EventCard/LectureCard";
import { Separator } from "@/components/ui/separator";
import lectures from "@/components/EventCard/lectures.json";


const Page = () => {
  return (
   

    <div className="w-screen pt-20">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl font-mono text-center">Workshops</h1>
        <Separator className="mt-9 w-[90%] bg-zinc-500" />
      </div>

      <div className="flex lg:flex-row flex-col flex-wrap lg:py-8 py-4 justify-center items-center gap-8">
        {lectures.map((event) => (
          <LectureCard
            name={event.name}
            img={event.img}
            eventDate={event.eventDate}
            speaker={event.speaker}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
