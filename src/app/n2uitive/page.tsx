import React from "react";
import Image from "next/image";
import n2uitiveImg from "../../../public/assets/projects/n2uitive.png";
import Link from "next/link";
import { IoChevronBackOutline } from "react-icons/io5";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sofia Martin | n2uitive Portfolio Entry",
  description:
    "Sofia Martin was the product manager for the n2uitive platform redesign. n2uitive is an insurtech SaaS platform for recording and transcribing claims.",
};

const page = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[30vh] lg:h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[50vh] bg-black/60 z-10" />
        <Image
          src={n2uitiveImg}
          alt="Header"
          className="absolute z-1 object-cover object-top"
          fill
        />
        <div className="absolute bottom-[5%] max-w-[1240px] w-full left-[50%] right[50%] translate-x-[-50%] z-10 text-white">
          <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-10 gap-0">
            <div className=""></div>
            <div className="col-span-8">
              <h2>n2uitive Insurtech</h2>
              <h3>Claim Recording and Transcriptions</h3>
              <h3 className="pt-2">Role: Product Manager</h3>
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
            n2uitive is a cloud-based claims interview and recorded statement
            management platform for auto, home and workers compensation
            insurers. n2uitive provides claims organizations with a unified,
            secure recorded statement solution that simplifies processes,
            reduces expenses and supports industry-wide best practices.
          </p>
          <p className="py-4">
            n2record™ is n2uitive’s comprehensive, cloud-based recorded
            statement solution that streamlines the overall statement workflow
            for insurers by recording, storing and indexing, sharing, and
            transcribing claims statements.
          </p>
          <p className="py-4">
            Recordings are automatically indexed and stored in a secure
            statement library, making them easily searchable and accessible. The
            solution also enables users to share statements quickly and securely
            from the library to approved external parties and transcription
            services. Insurers can utilize the solution’s insightful reports and
            analytics to better understand statement practices, leading to more
            consistent and accurate claim outcomes.
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
