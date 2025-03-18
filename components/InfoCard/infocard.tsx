import React, { useEffect, useState } from "react";
import { Separator } from "../ui/separator";
import Image from "next/image";

interface OrganizingCommitteeProps {
  title: string;
  desc1: string;
  desc2: string;
  img: string;
}

const InfoCard: React.FC<OrganizingCommitteeProps> = ({ title, desc1, desc2, img }) => {
  const [isSmall, setSmall] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSmall(true);
      } else {
        setSmall(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-wrap m-4 p-8 rounded-2xl bg-zinc-900 justify-center items-center gap-4">
      <div>
        <Image
          src={img}
          width={200}
          height={200}
          alt="tech-logo"
        />
      </div>

      <Separator
        orientation={isSmall ? "horizontal" : "vertical"}
        className="p-0.5 lg:h-[27vh]"
      />

      <div className="flex flex-col items-start gap-5 justify-between lg:w-[40rem]">
        <h1 className="text-3xl font-transformer font-zinc-200 tracking-widest uppercase lg:text-left text-center">{title}</h1>
        <p className="text-zinc-400 font-mono">
          {desc1}
        </p>
        <p className="text-zinc-400 font-mono">
          {desc2}
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
