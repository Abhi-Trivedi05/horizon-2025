import React from "react";
import EventCard from "@/components/EventCard/EventCard";
import { Separator } from "@/components/ui/separator";
import events from "@/components/EventCard/events.json";
import Link from "next/link";

import { ComingSoon } from "@/components/ComingSoon/comingSoon";

// ... (your imports remain the same)

const Page = () => {
  return (

    // <div className='lg:pt-20 pt-12'>
    //   <ComingSoon />

    // </div>

    <div className="w-screen pt-20">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl font-fancy">Events</h1>
        <Separator className="mt-9 w-[90%] bg-zinc-500" />
      </div>

      <div className="flex lg:flex-row flex-col flex-wrap lg:py-8 py-4 justify-center items-center gap-8">
        {events.map((event) => (
          <Link key={event.Wname} href={`/events/${event.Wname}`}>
            <EventCard
              name={event.name}
              img={event.img}
              eventDate={event.eventDate}
              regDate={event.regDate}
              organizingClub={event.organizingClub}
              accent={event.accent}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
