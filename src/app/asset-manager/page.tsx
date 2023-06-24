import React from "react";
import Image from "next/image";
import assetImg from "../../../public/assets/projects/assetmanager6.png";
import Link from "next/link";
import { IoChevronBackOutline } from "react-icons/io5";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sofia Martin | VTS Asset Manager Portfolio Entry",
  description:
    "Sofia Martin worked as the UX Researcher on the VTS Asset Manager App, a platform the helps commercial real estate agents manage their property portfolio data.",
};

const page = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[30vh] lg:h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh]  lg:h-[50vh] bg-black/60 z-10" />
        <Image
          src={assetImg}
          alt="Header"
          className="absolute z-1 object-cover object-top"
          fill
          priority
        />
        <div className="absolute top-[80%] max-w-[1240px]  w-full left-[50%] right[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2 text-white">
          <h2>VTS Property Portfolio Asset Manager</h2>
          <h3>UX Researcher</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-3">
          <h2>Project Overview</h2>
          <p className="py-4">
            Stop wasting time managing your property information. Property
            Capsule makes it simple: Upload your property information in one
            place. All your materials - including plans, maps, images and
            property characteristics - stay organized in a centralized location.
          </p>
          <p className="py-4">
            Update information easily. For example, you lease a retail space to
            a new tenant and need marketing materials to reflect the change.
            Just pick the tenant name and you’re done. The plan updates itself -
            and everything else too. Our system (and database of over 10,000
            retailers and logos) does the work for you. You don’t need to worry
            about updating or publishing each document separately, because the
            system does that - automatically.
          </p>
          <p className="py-4">
            You’ll find your interactive website, plans, maps and flyers
            published with the most recent information - instantly. Your
            documents will even be updated with the latest market research data.
            Now, all your property information is accessible on any platform,
            from any device. Web, mobile phone, iPad app, email, PDF,
            touchscreen and PC – you’ve got it.
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
