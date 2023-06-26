import React from "react";
import Image from "next/image";
import bandsImg from "../../../public/assets/projects/bands_wide.jpg";
import Link from "next/link";
import { IoChevronBackOutline } from "react-icons/io5";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sofia Martin | Bands App Portfolio Entry",
  description:
    "Sofia Martin worked as UX Researcher on the Bands App, a music streaming and social media platform that connects artists directly with their fans.",
};

const page = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="w-full h-[30vh] lg:h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[50vh] bg-black/60 z-10" />
        <Image
          src={bandsImg}
          alt="Header"
          className="absolute z-1 object-cover"
          fill
          priority
        />
        <div className="absolute bottom-[10%] max-w-[1240px] w-full left-[50%] right[50%] translate-x-[-50%] z-10 p-2 text-white">
          <h2>Bands App: Music Streaming and Social Media</h2>
          <h3>UX Researcher</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-10 gap-8 pt-8">
        <div></div>
        <div className="col-span-8">
          <h2>Project Overview</h2>
          <p className="py-4">
            The Bands app is a complete consumer music experience that empowers
            musicians to take control of their art, connect with their fan bases
            and monetize their online presence.
          </p>
          <p className="py-4">
            The app provides a comprehensive suite of tools for music creators
            and listeners. Users can follow their favorite artists to get
            updates about their music releases, tour dates, social media posts,
            and more. Artists can share subscriber-only content, host ticketed
            live-streams, chat with fans, and sell merchandise.
          </p>
        </div>
        <div className=""></div>
      </div>
      <Link href="/#work" className="underline py-4 pb-24">
        <IoChevronBackOutline size={18} className="inline mr-1" />
        Back To My Work
      </Link>
    </div>
  );
};

export default page;
