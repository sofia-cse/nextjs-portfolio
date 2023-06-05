import React from "react";
import Image from "next/image";
import propertyImg from "../../../public/assets/projects/property.png";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[30vh] lg:h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh]  lg:h-[50vh] bg-black/60 z-10" />
        <Image
          src={propertyImg}
          alt="Header"
          className="absolute z-1 object-cover object-top"
          fill
        />
        <div className="absolute top-[80%] max-w-[1240px]  w-full left-[50%] right[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2 text-white">
          <h2>Property Foot Traffic Analytics</h2>
          <h3>UX Researcher</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-3">
          <h2>Project Overview</h2>
          <p className="py-4">
            The Creditntell dashboard provides insights into places and
            competition allowing discovery of new business opportunities. Users
            can get accurate foot traffic counts and dwell time with the ability
            to filter by time, day of week, and customer segments. This empowers
            agents to understand how promotions, holidays, seasonality, and
            events impact business.
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
