import React from "react";
import Image from "next/image";
import gdImg from "../../../public/assets/projects/gd.png";
import Link from "next/link";
import { IoChevronBackOutline } from "react-icons/io5";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sofia Martin | Good Days Portfolio Entry",
  description:
    "Sofia Martin was the UX Designer and UX Researcher for the redesign of the Good Days portal, a healthcare platform for copay assistance.",
};

const page = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[30vh] lg:h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[50vh] bg-black/60 z-10" />
        <Image
          src={gdImg}
          alt="Header"
          className="absolute z-1 object-cover object-top"
          fill
          priority
        />
        <div className="absolute bottom-[5%] max-w-[1240px] w-full left-[50%] right[50%] translate-x-[-50%] z-10 text-white">
          <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-10 gap-0">
            <div className=""></div>
            <div className="col-span-8">
              <h2>Good Days Health</h2>
              <h3>Patient Copay Assistance</h3>
              <h3 className="pt-2">Role: UX Designer & Researcher</h3>
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-10 gap-8 pt-8">
        <div></div>
        <div className="col-span-8">
          <h2>Project Overview</h2>
          <p className="py-4">
            Good Days exists to improve the health and quality of life of
            patients with chronic disease, cancer, or other life-altering
            conditions. Their platofrm serves many needs, allowing patients to
            enroll for assistance, pharmacies and doctors to submit claims, and
            employees to track programs and funds.
          </p>
          <p className="py-4">
            Good Days helps to pay the prohibitively costly insurance co-pays of
            life-extending and life-saving treatments for people otherwise
            unable to afford those treatments. They offer patients and families
            additional financial help, emotional support, and guidance to the
            best available information and support for each specific disease
            state. While this delivery model for costly treatments is not
            perfect, it is the only avenue providing relief for hundreds of
            thousands of people who otherwise face debilitating daily routines
            and fewer days on earth. Good Days fills that role as transparently
            as possible, until the day a better model is in place.
          </p>
        </div>
        <div className=""></div>
      </div>
      <Link href="/#work" className="underline py-4">
        <IoChevronBackOutline size={18} className="inline mr-1" />
        Back To My Work
      </Link>
    </div>
  );
};

export default page;
