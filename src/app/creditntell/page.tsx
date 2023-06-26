import React from "react";
import Image from "next/image";
import propertyImg from "../../../public/assets/projects/property_comparison.jpg";
import Link from "next/link";
import { IoChevronBackOutline } from "react-icons/io5";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sofia Martin | Creditntell Portfolio Entry",
  description:
    "Sofia Martin was the UX Designer and UX Researcher on the Creditntell analytics app, a platform that lets commercial leasing agents track and compare the traffic and demographic data for their properties.",
};

const page = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[30vh] lg:h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[50vh] bg-black/60 z-10" />
        <Image
          src={propertyImg}
          alt="Header"
          className="absolute z-1 object-cover object-top"
          fill
        />
        <div className="absolute top-[80%] max-w-[1240px] w-full left-[50%] right[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2 text-white">
          <h2>Property Foot Traffic Analytics</h2>
          <h3>UX Designer</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-10 gap-8 pt-8">
        <div></div>
        <div className="col-span-8">
          <h2>Project Overview</h2>
          <p className="py-4">
            The Creditntell dashboard provides insights into places and
            competition allowing discovery of new business opportunities. Users
            can get accurate foot traffic counts and dwell time with the ability
            to filter by time, day of week, and customer segments. This empowers
            agents to understand how promotions, holidays, seasonality, and
            events impact business.
          </p>
          <p className="py-4">
            As the only provider in the marketplace to combine foot traffic data
            / geospatial intelligence with comprehensive financial retail
            coverage featuring in-house industry experts, proprietary scoring
            models, predictive measuring tools, and store locational data,
            Creditntell provides a true 360-degree view of the evolving retail
            landscape.
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
