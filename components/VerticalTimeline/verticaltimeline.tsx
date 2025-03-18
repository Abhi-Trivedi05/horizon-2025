import React from "react";

interface TimelineEventProps {
  title: string;
  startTime: string;
  endTime: string;
}

interface TimelineElementProps {
  date: string;
  events: TimelineEventProps[];
}

const tlDb = [
  {
    date: "24th March",
    events: [
      {
        title: "Inauguration Ceremony",
        startTime: "",
        endTime: "",
      },
      {
        title: "Catch the flag(CTF)",
        startTime: "",
        endTime: "",
      },
      {
        title: "Robo War Round 1",
        startTime: "",
        endTime: "",
      },
      {
        title: "Gaming event launch",
        startTime: "",
        endTime: "",
      },

    ],
  },
  {
    date: "25th March",
    events: [
      {
        title: "Robo War Round 2",
        startTime: "",
        endTime: "",
      },
      {
        title: "Robotics Project Exhibition",
        startTime: "",
        endTime: "",
      },
    ],
  },
  {
    date: "26th March",
    events: [
      {
        title: "Holo Trade",
        startTime: "",
        endTime: "",
      },
      {
        title: " Website Designing Event",
        startTime: "",
        endTime: "",
      },
    ],
  },
  {
    date: "27th March",
    events: [
      {
        title: "Code Voyage Round 1",
        startTime: "",
        endTime: "",
      },
      {
        title: "Game Dev Workshop",
        startTime: "",
        endTime: "",
      },
      {
        title: "Frame Fusion",
        startTime: "",
        endTime: "",
      },
    ],
  },
  {
    date: "28th March",
    events: [
      {
        title: "Logic Mania",
        startTime: "",
        endTime: "",
      },
      {
        title: "Code Voyage Round 2",
        startTime: "",
        endTime: "",
      },
    ],
  },
  {
    date: "29th March",
    events: [
      {
        title: "Hackathon Start",
        startTime: "",
        endTime: "",
      },
      {
        title: "Code Voyage Round 2",
        startTime: "",
        endTime: "",
      },
    ],
  },
  {
    date: "30th March",
    events: [
      {
        title: " Gaming Event Finals",
        startTime: "",
        endTime: "",
      },
      {
        title: "Hackathon End",
        startTime: "",
        endTime: "",
      },
    ],
  },
];

const TimelineEvent: React.FC<TimelineEventProps> = ({
  title,
  startTime,
  endTime,
}) => (
  <div>
    <h3 className="timeline-title">{title}</h3>
    <div className="flex flex-col text-gray-400">
      <h5>Start Time: {startTime}</h5>
      <h5>End Time: {endTime}</h5>
    </div>
  </div>
);

const TimelineElement: React.FC<TimelineElementProps> = ({ date, events }) => (
  <div className="relative flex flex-col gap-4">
    <div className="dot"></div>
    <div className="ml-10 border-zinc-800 bg-zinc-900 border-2 p-4 rounded-xl mr-8">
      <span className="timeline-date">{date}</span>
      <div className="flex flex-col sm:flex-row gap-20">
        {events.map((event, index) => (
          <TimelineEvent
            key={index}
            title={event.title}
            startTime={event.startTime}
            endTime={event.endTime}
          />
        ))}
      </div>
    </div>
  </div>
);

const VerticalTimeline = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-20">
      <section>
        <div className="top-0 bg-zinc-800 py-3 mb-8 z-10 shadow-xl shadow-zinc-700">
          <h2 className="group-date lg:text-4xl text-2xl font-primary text-center">Horizon 25'</h2>
        </div>
        <div className="timeline">
          {tlDb.map((item, index) => (
            <TimelineElement
              key={index}
              date={item.date}
              events={item.events}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default VerticalTimeline;
