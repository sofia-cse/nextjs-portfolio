import React from "react";
import Image from "next/image";
import bandsImg from "../../../public/assets/projects/bands_wide.jpg";
import Link from "next/link";
import { IoChevronBackOutline } from "react-icons/io5";

const page = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[30vh] lg:h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh]  lg:h-[50vh] bg-black/60 z-10" />
        <Image
          src={bandsImg}
          alt="Header"
          className="absolute z-1 object-cover object-top"
          fill
        />
        <div className="absolute top-[80%] max-w-[1240px]  w-full left-[50%] right[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2 text-white">
          <h2>Music Streaming and Social Media</h2>
          <h3>UX Researcher</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-3">
          <h2>Project Overview</h2>
          <p className="py-4">
            The Bands app is a complete consumer music experience that empowers
            musicians to take control of their art, connect with their fan bases
            and monetize their online presence.
          </p>
          <p>
            The app provides a comprehensive suite of tools for music creators
            and listeners. Users can follow their favorite artists to get
            updates about their music releases, tour dates, social media posts,
            and more. Artists can share subscriber-only content, host ticketed
            live-streams, chat with fans, and sell merchandise.
          </p>
        </div>
        <div className="col-span-2"></div>
      </div>
      <Link href="/#projects" className="underline">
        Back To Projects
      </Link>
    </div>
  );
};

export default page;
