import React from "react";
import Image from "next/image";
import gdImg from "../../../public/assets/projects/gd-txp-actions.png";
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
      <div className="w-full h-[40vh] lg:h-[75vh] relative">
        <div className="absolute top-0 left-0 w-full h-[40vh] lg:h-[75vh] bg-black/60 z-10" />
        <Image
          src={gdImg}
          alt="Header"
          className="absolute z-1 object-cover object-top"
          fill
          priority
        />
        <div className="absolute bottom-[8%] max-w-[1240px] w-full left-[50%] right[50%] translate-x-[-50%] z-10 text-white">
          <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-10 gap-0">
            <div className=""></div>
            <div className="col-span-8">
              <h2>Good Days</h2>
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
            I had the privilege of being the UX Designer & Researcher for the
            Good Days project, a platform dedicated to improving the health and
            quality of life for patients facing chronic diseases, cancer, and
            other life-altering conditions. The primary goal of this project was
            to provide a comprehensive platform that serves the needs of
            patients, pharmacies, doctors, and employees, allowing seamless
            enrollment for assistance, claims submission, and program and fund
            tracking.
          </p>
          <p className="py-4">
            Good Days plays a crucial role in helping patients afford
            prohibitively costly insurance co-pays for life-extending and
            life-saving treatments. Beyond financial assistance, the platform
            also offers emotional support and guidance by providing reliable
            information and resources tailored to each specific disease state.
            Despite its imperfections, the platform serves as a lifeline for
            hundreds of thousands of individuals who would otherwise face
            debilitating daily routines and fewer days on earth. Good Days
            strives to be transparent in its delivery model until a better, more
            comprehensive solution is in place.
          </p>
          <h2 className="pt-6 pb-2">Responsibilities</h2>
          <p className="py-2">
            As the UX Designer & Researcher for Good Days, my responsibilities
            encompassed both understanding the needs and challenges of patients
            and other stakeholders and designing a user-centric platform that
            meets those requirements. I collaborated closely with stakeholders,
            medical experts, and the development team to ensure that the
            platform aligns with the vision of improving patients&apos; lives.
          </p>
          <h2 className="pt-6 pb-2">Design Process</h2>
          <p className="py-2">
            Given the sensitive and complex nature of the healthcare domain, the
            design process for Good Days was driven by extensive user research
            and empathy-driven design. I conducted in-depth interviews with
            patients, caregivers, medical professionals, and program
            administrators to gain insights into their experiences, pain points,
            and needs.
          </p>
          <p className="py-2">
            Using human-centered design principles, I developed user personas
            and empathy maps that helped me visualize the emotions, motivations,
            and goals of the various user groups. This empathetic approach
            guided the design decisions, ensuring that the platform addresses
            the unique challenges faced by patients with chronic diseases.
          </p>
          <p className="py-2">
            The design process also involved creating wireframes and interactive
            prototypes to visualize the user interface and user flow. I
            conducted usability tests and gathered feedback iteratively, making
            continuous improvements to the platform based on user insights.
          </p>

          <h2 className="pt-6 pb-2">Key Features:</h2>
          <p className="py-2">
            The Good Days platform offered a wide range of features to support
            patients, pharmacies, doctors, and employees in their respective
            roles. Some of the key features I designed and implemented include:
          </p>
          <ol>
            <li className="py-2">
              Patient Enrollment and Assistance: Patients could easily enroll
              for assistance through a user-friendly process, providing
              necessary information for eligibility determination. The platform
              streamlined the application process to alleviate the burden on
              patients already facing difficult circumstances.
            </li>
            <li className="py-2">
              Claims Submission: Pharmacies and doctors could submit claims
              efficiently through the platform, reducing administrative overhead
              and ensuring timely reimbursement.
            </li>
            <li className="py-2">
              Program and Fund Tracking: Employees responsible for managing the
              assistance programs could track funds, monitor program
              utilization, and analyze data for better decision-making.
            </li>
          </ol>
          <h2 className="pt-6 pb-2">Impact and Outcome</h2>
          <p className="py-2">
            Working on the Good Days project allowed me to contribute to a
            meaningful platform that makes a positive impact on the lives of
            patients with chronic diseases and life-altering conditions. The
            user-centric design approach and empathetic research ensured that
            the platform resonated with the needs of its users, fostering a
            sense of trust and support during challenging times.
          </p>
          <p className="py-2">
            By streamlining the enrollment and claims submission processes, Good
            Days improved operational efficiency and reduced administrative
            burden for all stakeholders. The platform&apos;s transparency and
            accessibility ensured that patients received the financial and
            emotional support they desperately needed to access life-extending
            and life-saving treatments.
          </p>
          <p className="py-2">
            As the UX Designer & Researcher on this project, I am proud to have
            played a role in creating a platform that provides hope and relief
            to hundreds of thousands of individuals facing difficult medical
            circumstances. The Good Days platform stands as a testament to the
            power of user-centered design in creating solutions that make a
            meaningful difference in people&apos;s lives.
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
