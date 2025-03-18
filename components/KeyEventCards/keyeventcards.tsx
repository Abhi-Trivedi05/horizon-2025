import React from 'react';
import BlurImage from '../BlurImage/blurimage';

interface KeyEventDets {
  title: string;
  poster: string;
  desc: string;
  reverse : boolean;
}

const KeyEventCards: React.FC<KeyEventDets> = ({ title, poster, desc, reverse }) => {
  return (
    <div className={`lg:w-1/2 w-[90%] flex ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} flex-col items-center gap-8 border-2 p-6 rounded-lg border-zinc-600 bg-zinc-800`}>
      <div className="rounded-xl">
        <BlurImage image={poster} width={190} height={300} alt="poster" rounded='rounded-sm'/>
      </div>
      <div className={`w-full gap-4 flex flex-col ${reverse ? "text-left" : "text-right"} items-center`}>
        <h1 className="text-2xl font-transformer underline tracking-widest">
          {title}
        </h1>
        <p className="text-sm font-mono">{desc}</p>
      </div>
    </div>
  );
};

export default KeyEventCards;
