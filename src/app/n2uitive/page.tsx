import React from "react";
import Image from "next/image";
import n2uitiveImg from "../../../public/assets/projects/n2uitive.png";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[30vh] lg:h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh]  lg:h-[50vh] bg-black/60 z-10" />
        <Image
          src={n2uitiveImg}
          alt="Header"
          className="absolute z-1 object-cover object-top"
          fill
        />
        <div className="absolute top-[80%] max-w-[1240px]  w-full left-[50%] right[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2 text-white">
          <h2>Claim Recording and Transcriptions</h2>
          <h3>UX Researcher</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-3">
          <h2>Project Overview</h2>
          <p className="py-4">
            Designed as an easy way to manage the complete recorded statement
            lifecycle, n2uitive technology has proven effective and reliable in
            implementations of all sizes. n2uitive satisfies the industry
            security and regulatory requirements across multiple lines of
            business for several large insurance carriers and ensures the
            highest level of availability and performance.
          </p>
        </div>
        <div className="col-span-2"></div>
        <a href="/#projects" className="underline">
          Back To Projects
        </a>
      </div>
    </div>
  );
};

export default page;
