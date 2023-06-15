import React from "react";
import Image from "next/image";
import c2fImg from "../../../public/assets/projects/c2f_ipad.jpg";
import Link from "next/link";
import { IoChevronBackOutline } from "react-icons/io5";

const page = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[30vh] lg:h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh]  lg:h-[50vh] bg-black/60 z-10" />
        <Image
          src={c2fImg}
          alt="Header"
          className="absolute z-1 object-cover object-top"
          fill
        />
        <div className="absolute top-[80%] max-w-[1240px]  w-full left-[50%] right[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2 text-white">
          <h2>Coaching to Fidelity</h2>
          <h3>UX Researcher</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-3">
          <h2>Project Overview</h2>
          <p className="py-4">
            The Coaching to Fidelity app equips coaches with the tools and
            guidance they need to measure fidelity and effectively guide
            teachers towards optimal implementation of The Creative Curriculum
            for Preschool, The Creative Curriculum for Infants, Toddlers, and
            Twos, or GOLD and best practices, including the ability to capture
            photo and video observations, embedded guidance and mitigation
            strategies, shareable action plans, note-taking capabilities, and
            automatic fidelity calculation.
          </p>
          <p className="py-4">
            Elevate your coaching practice and boost outcomes for children with
            Coaching to Fidelity. Get best practices tips, tutorials, and access
            to Teaching Strategies’ enhanced Coaching to Fidelity Strategies and
            Indicators.
          </p>
          <div className="py-4">
            <p>With the Coaching to Fidelity app, you can:</p>
            <ul>
              <li>- Schedule and document Teacher Observations</li>
              <li>- Capture photos, video, or audio documentation</li>
              <li>- Take notes and set goals</li>
              <li>- Attach indicators directly to documentation</li>
              <li>- Receive embedded strategies to use with teachers</li>
              <li>- Build and share detailed Teacher Action Plans</li>
            </ul>
          </div>
          <div className="py-4">
            <p>Plus get:</p>
            <ul>
              <li>
                - Exclusive tips & tutorials from our team of early childhood
                education experts
              </li>
              <li>
                - Enhanced strategies and indicators to support teachers’ growth
                toward fidelity
              </li>
              <li>
                - Automatic Fidelity Scoring and reporting tools to drive
                teacher improvement
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-2"></div>
      </div>
      <Link href="/#projects" className="underline py-4 pb-24">
        Back To Projects
      </Link>
    </div>
  );
};

export default page;
