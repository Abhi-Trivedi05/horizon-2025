import React from "react";
import { FaInstagram, FaWhatsapp, FaRegCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { CiLinkedin, CiMail } from "react-icons/ci";
import { MdOutlineArrowOutward } from "react-icons/md";
import './Footer.css'

const Footer = () => {
  return (
    <div className="flex foote lg:flex-row flex-col gap-20 justify-around mt-20 items-center pb-8 ">
      <div className="flex flex-col justify-center gap-8 items-center ">
        <img src="/images/H_logo_.svg" className="w-[8rem]" alt="" />
        <ul className="flex gap-4 lg:w-[24rem] w-[20rem] text-xl flex-wrap items-center justify-center">
          <li>
            <a className="flex justify-center items-center" href="/">
              Home<MdOutlineArrowOutward />
            </a>
          </li>
          <li>
            <a className="flex justify-center items-center" href="/about">
              About<MdOutlineArrowOutward />
            </a>
          </li>
          <li>
            <a className="flex justify-center items-center" href="/lectures">
              Lectures<MdOutlineArrowOutward />
            </a>
          </li>
          <li>
            <a className="flex justify-center items-center" href="/sponsors">
              Sponsor<MdOutlineArrowOutward />
            </a>
          </li>
          <li>
            <a className="flex justify-center items-center" href="/events">
              Events<MdOutlineArrowOutward />
            </a>
          </li>
          <li>
            <a className="flex justify-center items-center" href="/team">
              Team<MdOutlineArrowOutward />
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col justify-around gap-4 text-lg lg:text-xl">
        <p className="flex justify-start items-center gap-2">
          <span className="bg-zinc-700 border-2 border-zinc-500 rounded-full p-4">
            <FaLocationDot />{" "}
          </span>
          IIIT Vadodara - ICD
        </p>
        <p className="flex justify-start items-center gap-2 ">
          <span className="bg-zinc-700 border-2 border-zinc-500 rounded-full p-4">
            <a className="flex justify-center items-center" href="mailto:technical@diu.iiitvadodara.ac.in">
              <IoMdMail />
            </a>
          </span>{" "}
          <a className="flex justify-center items-center" href="mailto:technical@diu.iiitvadodara.ac.in">
            Contact Us
          </a>
        </p>
        <p className="flex justify-start items-center gap-2">
          <span className="bg-zinc-700 border-2 border-zinc-500 rounded-full p-4">
            <FaRegCalendarAlt />
          </span>{" "}
          24th March 2025
        </p>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center">
        <h1 className="font-primary text-xl tracking-wider text-zinc-100">Horizon</h1>
        <p className="lg:w-[32rem] lg:text-left px-4 text-center text-zinc-400">
          Horizon is the annual Technical Festival of IIIT Vadodara, International Campus Diu. It is organized by the
          Technical Committee of IIITV - ICD and its clubs.
        </p>
        <ul className="flex gap-8 text-zinc-400">
          <li className="hover:translate-y-[-6px] duration-300 text-4xl">
            {" "}
            <a target="_blank" className="flex justify-center items-center" href="https://www.instagram.com/technical_iiitvicd/">
              {" "}
              <FaInstagram />{" "}
            </a>
          </li>
          <li className="hover:translate-y-[-6px] duration-300 text-4xl">
            {" "}
            <a target="_blank" className="flex justify-center items-center" href="mailto:technical@diu.iiitvadodara.ac.in">
              {" "}
              <CiMail />{" "}
            </a>
          </li>
          <li className="hover:translate-y-[-6px] duration-300 text-4xl">
            {" "}
            <a target="_blank" className="flex justify-center items-center" href="https://chat.whatsapp.com/JDUjbt9eCrd44sC6Xhi90d">
              {" "}
              <FaWhatsapp />{" "}
            </a>
          </li>
          <li className="hover:translate-y-[-6px] duration-300 text-4xl">
            {" "}
            <a target="_blank" className="flex justify-center items-center" href="https://www.linkedin.com/company/technical-committee-iiitv-icd/">
              <CiLinkedin />{" "}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
