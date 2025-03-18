import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';

const FullLengthNavbar = () => {

  useEffect(() => {
    gsap.fromTo(".links" ,{
      opacity: 0,
      y: "-50px",
    },{
      opacity: 1,
      y: "0px",
      duration: 0.5,
      stagger: 0.05
    })
    
  }, []);

  return (
    <div className='font-mono flex gap-8 pr-2 items-end lg:flex-row flex-col md:flex-row text-lg lg:bg-transparent pl-12 h-screen lg:h-max lg:pt-2 lg:pl-0 bg-slate-700/90' >
      {["Home", "About", "Workshops", "Sponsors", "Team", "Events"].map((item, index) => (
        <Link className='links' key={index} href={index !== 0 ? `/${item.toLowerCase()}` : '/'} passHref>
          <div>{item}</div>
        </Link>
      ))}
    </div>
  );
};

export default FullLengthNavbar;
