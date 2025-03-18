import React from "react";
import Image from "next/image";

interface JoinUsCardProps {
  title: string;
  description: string;
  image : string;
}

const JoinUsCard: React.FC<JoinUsCardProps> = ({ title, description, image }) => {
  return (
    <div className="w-[20rem] rounded-lg h-[20rem] gap-6 px-8 justify-center border-2 border-zinc-800 bg-zinc-900 flex flex-col items-center">
      <div className="w-[100px] h-[100px] bg-zinc-700 rounded-xl">
        <Image 
          src={image}
          width={200}
          height={200}
          alt="missing"
        />
      </div>
      <h1 className="font-bold text-xl text-zinc-300">{title}</h1>

      <p className="text-sm text-center text-zinc-400">
        {description}
      </p>
    </div>
  );
};

export default JoinUsCard;
