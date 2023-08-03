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
      <div className="w-full h-[30vh] lg:h-[60vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[60vh] bg-black/60 z-10" />
        <Image
          src={assetImg}
          alt="Header"
          className="absolute z-1 object-cover object-top"
          fill
          priority
        />
        <div className="absolute bottom-[8%] max-w-[1240px] w-full left-[50%] right[50%] translate-x-[-50%] z-10 text-white">
          <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-10 gap-0">
            <div className=""></div>
            <div className="col-span-8">
              <h2>VTS Asset Manager</h2>
              <h3>
                Commercial Property Portfolio Data Management and Reporting
              </h3>
              <h3 className="pt-2">Role: UX Designer</h3>
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-10 gap-8 pt-8">
        <div className=""></div>
        <div className="col-span-8">
          <h2 className="w-full">Project Overview</h2>
          <p className="py-4">
            As the UX Designer for the VTS Asset Manager project, my role was to
            create a streamlined and user-friendly platform that simplifies
            property information management for commercial property
            professionals. The VTS Asset Manager, also known as Property
            Capsule, aimed to centralize property information, including plans,
            maps, images, and property characteristics, in one easy-to-use
            platform.
          </p>
          <p className="py-4">
            The key goal of this project was to empower users to update property
            information effortlessly, enabling seamless reflection of changes in
            marketing materials. The system leveraged a vast database of over
            10,000 retailers and logos, automating the updating and publishing
            process, thereby saving users valuable time and effort.
          </p>
          <p className="py-4">
            The platform ensured that all property information, including
            interactive websites, plans, maps, and flyers, was instantly
            accessible and updated with the latest market research data. The
            flexibility of the system allowed users to access property
            information from any platform and device, including web, mobile
            phones, iPad app, email, PDF, touchscreen, and PC.
          </p>
          <h2 className="pt-6 pb-2">Responsibilities</h2>
          <p className="py-2">
            As the UX Designer, my responsibilities included conducting in-depth
            research to understand the needs and pain points of commercial
            property professionals. I collaborated closely with stakeholders,
            property managers, and industry experts to ensure that the
            platform&apos;s features and functionalities aligned with their
            specific requirements.
          </p>
          <h2 className="pt-6 pb-2">Design Process</h2>
          <p className="py-2">
            The design process for the VTS Asset Manager revolved around
            conducting extensive user research and iterative design practices. I
            conducted interviews, surveys, and usability tests with commercial
            property professionals to gather valuable feedback and understand
            their workflows and challenges.
          </p>
          <p className="py-2">
            Using the insights from the research, I created user personas and
            user journey maps that depicted the typical interactions and
            motivations of property professionals using the platform. This
            empathetic design approach allowed me to prioritize features that
            catered to their specific needs and streamlined their property
            management tasks.
          </p>
          <p className="py-2">
            Throughout the design process, I created wireframes and interactive
            prototypes to visualize the platform&apos;s interface and
            interaction flow. These designs were continuously refined through
            iterative feedback sessions and usability testing, ensuring that the
            final product offered a seamless and efficient user experience.
          </p>
          <h2 className="pt-6 pb-2">Key Features:</h2>
          <p className="py-2">
            The VTS Asset Manager offered a comprehensive suite of features to
            support commercial property professionals in managing their property
            information effectively. Some of the key features I designed and
            implemented include:
          </p>
          <ol>
            <li className="py-2">
              Centralized Property Information: The platform allowed users to
              upload and organize all property information, including plans,
              maps, images, and characteristics, in one centralized location.
            </li>
            <li className="py-2">
              Easy Information Updates: Users could effortlessly update property
              information when changes occurred, ensuring that all marketing
              materials and documents were automatically updated.
            </li>
            <li className="py-2">
              Automated Publishing: The system automated the publishing process,
              saving users from manually updating and publishing each document
              separately.
            </li>
            <li className="py-2">
              Instant Accessibility: Property information, including interactive
              websites, plans, maps, and flyers, was instantly accessible on
              various platforms and devices.
            </li>
            <li className="py-2">
              Market Research Data Integration: The platform updated documents
              with the latest market research data, providing users with
              valuable insights and market trends.
            </li>
          </ol>
          <h2 className="pt-6 pb-2">Impact and Outcome</h2>
          <p className="py-2">
            The VTS Asset Manager, or Property Capsule, had a significant impact
            on commercial property professionals by streamlining property
            information management and reporting. The user-centric design
            approach ensured that the platform&apos;s interface and features
            catered to the specific needs of property managers, fostering high
            user adoption and satisfaction.
          </p>
          <p className="py-2">
            By automating the updating and publishing process, the VTS Asset
            Manager saved users valuable time and effort, allowing them to focus
            on more strategic aspects of property management. The
            platform&apos;s instant accessibility and flexibility across various
            platforms and devices provided property professionals with greater
            convenience and accessibility to critical information.
          </p>
          <p className="py-2">
            As the UX Designer on this project, I am proud to have contributed
            to the development of a platform that empowers commercial property
            professionals to efficiently manage their property information and
            make data-driven decisions. The VTS Asset Manager stands as a
            testament to the power of user-centered design in creating solutions
            that optimize workflows and enhance productivity in the commercial
            real estate industry.
          </p>
        </div>
      </div>
      <Link href="/#work" className="underline py-4 pb-24">
        <IoChevronBackOutline size={18} className="inline mr-1" />
        Back To My Work
      </Link>
    </div>
  );
};

export default page;
