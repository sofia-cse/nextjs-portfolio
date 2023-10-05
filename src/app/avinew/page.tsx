import React from "react";
import Image from "next/image";
import assetImg from "../../../public/assets/projects/Avinew-Framed.png";
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
      <div className="w-full h-[40vh] lg:h-[75vh] relative">
        <div className="absolute top-0 left-0 w-full h-[40vh] lg:h-[75vh] bg-black/60 z-10" />
        <Image
          src={assetImg}
          alt="Header"
          className="absolute z-1 object-cover object-center"
          fill
          priority
        />
        <div className="absolute bottom-[8%] max-w-[1240px] w-full left-[50%] right[50%] translate-x-[-50%] z-10 text-white">
          <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-10 gap-0">
            <div className=""></div>
            <div className="col-span-8">
              <h2>Avinew</h2>
              <h3>
                Customized Insurance for Vehicle Owners with ADAS Equipped EVs
              </h3>
              <h3 className="pt-2">Role: UX Researcher</h3>
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
            As the UX Designer for Avinew, My role was to identify opportunities
            and enhancements for their consumer application tailored to owners
            of Electric Vehicles equipped with Advanced Driver Assistance
            Systems systems. The primary goal of this project was to build an
            application that allowed users to connect their policy to an EV
            operating system in order to redeem savings through their use of
            ADAS safety features.
          </p>
          <p className="py-4">
            The key component of this project was to research how intuitive the
            integration process was and develop solutions to make the process as
            seamless as possible. I also identify new features and engaging
            design opportinities that encouraged users to increase usage of
            their ADAS systems, thereby reducing their risk of being in an
            accident and saving them money on their insurance policy.
          </p>
          <h2 className="pt-6 pb-2">Responsibilities</h2>
          <p className="py-2">
            As the UX Researcher, my responsibilities included conducting
            in-depth research to understand motivations and concerns of drivers.
            I collaborated closely with stakeholders, users, and industry
            experts to ensure that the platform&apos;s features and
            functionalities aligned with their specific needs.
          </p>
          <h2 className="pt-6 pb-2">Research Plan</h2>
          <p className="py-2">
            The research process for the Avinew App revolved around conducting
            extensive user research and iterative design practices. I conducted
            interviews, surveys, and usability tests with Tesla drivers to
            gather valuable feedback and understand their workflows and
            challenges.
          </p>
          <h2 className="pt-6 pb-2">Key Features:</h2>
          <p className="py-2">
            The AAvinew offered an engaging suite of features to support drivers
            in analyzing and increasnig their savings. Some of the key features
            I contributed to include:
          </p>
          <ol>
            <li className="py-2">
              Getting a Quote: Develop a simple process that allowed users to
              understand their potential savings by switching over to Avinew.
            </li>
            <li className="py-2">
              ADAS Integration: Creatinig an intuitive interface for connecting
              their vehicles operating system to the platform so that they could
              send the data needed to provide them with discounts.
            </li>
            <li className="py-2">
              Dashboard: Creating an engaging tool that showed users key metrics
              about their driving and encouraged safer driving and increased
              usage of ADAS systems.
            </li>
            <li className="py-2">
              Happy Path: A wayfinding feature that gave users alternative route
              options with reduced accident risk, further increasing their
              savings.
            </li>
          </ol>
          <h2 className="pt-6 pb-2">Impact and Outcome</h2>
          <p className="py-2">
            The Research I performed had a significant impact on the business by
            identified key user needs and issues, informing critical design
            choices that increased adoption and retention. The user-centric
            design approach ensured that the platform&apos;s interface and
            features catered to the specific needs of ADAS Equipped vehicle
            drivers, fostering satisfaction and more savings for drivers.
          </p>
          <p className="py-2">
            By automating creating and intuitive and engaging application, we
            fostered increased usage of advanced safety features, ultimately
            making travel safer for everyone on the road.
          </p>
          <p className="py-2">
            As the UX Researcher on this project, I am proud to have contributed
            to the development of a platform that incetivizes safe driving
            behavior.
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
