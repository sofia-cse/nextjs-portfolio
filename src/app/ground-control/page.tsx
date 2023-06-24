import React from "react";
import Image from "next/image";
import groundImg from "../../../public/assets/projects/groundcontrol3.png";
import Link from "next/link";
import { IoChevronBackOutline } from "react-icons/io5";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sofia Martin | Measure Ground Control Portfolio Entry",
  description:
    "Sofia Martin was the UX Designer for Measure's Ground Control App, a tool that allows project managers to track their drone fleet, plan and execute automated flights, and gain FAA clearance.",
};

const page = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[30vh] lg:h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[50vh] bg-black/60 z-10" />
        <Image
          src={groundImg}
          alt="Header"
          className="absolute z-1 object-cover object-top"
          fill
          priority
        />
        <div className="absolute top-[80%] max-w-[1240px]  w-full left-[50%] right[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2 text-white">
          <h2>Measure: Ground Control Drone Flight App</h2>
          <h3>UX Designer</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-3">
          <h2>Project Overview</h2>
          <p className="py-4">
            Measure Ground Control is an all-in-one drone deployment and data
            management software solution for UAV pilots, small businesses and
            large enterprises. Create a mission, plan a flight, check airspace,
            and process your image data in a variety of formats, such as
            high-quality orthomosaics, 3D maps and 3D mesh, thermal imagery,
            digital surface models (DSM), and many more. Manage your pilots and
            drone fleet, create and reuse flight plans, store and maintain fly
            sites, build flight schedules, run safety checklists and log flight
            data, as well as create customized data reports.
          </p>
          <p className="py-4">
            With the ability to navigate seamlessly between the web and mobile
            applications, Measure Ground Control features LAANC airspace
            authorization with built-in Airmap technology, so you can fly any
            airspace safely within FAA compliant. Process and create data
            products with our advanced photogrammetry and image processing
            featuring an integrated Pix4D toolkit, or inspect and annotate image
            data using our custom Scopito integration, all within the
            convenience of a single software application.
          </p>
          <p className="py-4">
            Measure Ground Control offers multiple flight modes including
            Panorama, Spotlight, POI, Profile, Trace, and Tripod. Additional
            features can be activated for Enterprise users. Built for universal
            DJI compatibility.
          </p>
        </div>
        <div className="col-span-2"></div>
      </div>
      <Link href="/#work" className="underline py-4 pb-24">
        <IoChevronBackOutline size={18} className="inline mr-1" />
        Back To My Work
      </Link>
    </div>
  );
};

export default page;
