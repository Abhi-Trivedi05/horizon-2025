"use client"
import React from "react";
import { BackgroundGradient } from "./background-gradient"; 
import Image from "next/image";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { CiLinkedin, CiMail } from "react-icons/ci";
import { ReactNode } from 'react'

interface BackgroundGradientDemoProps {
  imageSrc: string;
  name: string;
  post: ReactNode;
  instagramHandle: string;
  linkedinHandle: string;
  email: string;
  whatsapp: string;
}

export function BackgroundGradientDemo({
  imageSrc,
  name,
  post,
  instagramHandle,
  linkedinHandle,
  email,
  whatsapp,
}: BackgroundGradientDemoProps) {
  const handleInstagramClick = () => {
    window.open(`https://www.instagram.com/${instagramHandle}`, "_blank");
  };

  const handleLinkedinClick = () => {
    window.open(`https://www.linkedin.com/in/${linkedinHandle}`, "_blank");
  };

  const handleMailClick = () => {
    window.open(`mailto:${email}@diu.iiitvadodara.ac.in`);
  };

  const handleWhatsappClick = () => {
    window.open(`https://wa.me/${whatsapp}`, "_blank");
  };

  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-[24rem] w-[18rem] p-4 sm:p-10 bg-white dark:bg-zinc-900">
       <div className="flex justify-center items-center">
       <Image
          src={imageSrc}
          alt={name}
          height="200"
          width="200"
          className="object-cover rounded-xl w-[15rem] h-[15rem]"

        />
       </div>
       <div className="flex justify-center items-center flex-col">
        <p className="text-base sm:text-xl font-mono text-black mt-4 mb-2 dark:text-neutral-200">
          {name}
        </p>
        <p className="text-sm text-neutral-600 font-mono dark:text-neutral-400">
            {post}
        </p>
        <div className="flex gap-2 text-xl pt-2 text-zinc-400">
            <FaInstagram className="hover:cursor-pointer hover:-translate-y-1 duration-300" onClick={handleInstagramClick} />
            <CiLinkedin className="hover:cursor-pointer hover:-translate-y-1 duration-300" onClick={handleLinkedinClick} />
            <CiMail className="hover:cursor-pointer hover:-translate-y-1 duration-300" onClick={handleMailClick} />
            <FaWhatsapp className="hover:cursor-pointer hover:-translate-y-1 duration-300" onClick={handleWhatsappClick} />
        </div>
       </div>
      </BackgroundGradient>
    </div>
  );
}
