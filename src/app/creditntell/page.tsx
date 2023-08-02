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
        <div className="absolute bottom-[5%] max-w-[1240px] w-full left-[50%] right[50%] translate-x-[-50%] z-10 text-white">
          <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-10 gap-0">
            <div className=""></div>
            <div className="col-span-8">
              <h2>Creditntell</h2>
              <h3>Property Foot Traffic Analytics</h3>
              <h3 className="pt-2">Role: UX Designer</h3>
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
            As the UX Designer for the Creditntell dashboard project, I had the
            exciting opportunity to work on a platform that provides valuable
            insights into places and competition, enabling businesses to
            discover new opportunities. The Creditntell dashboard offers
            accurate foot traffic counts and dwell time data, allowing users to
            filter and analyze the information by time, day of the week, and
            customer segments. This powerful tool empowers agents to understand
            how various factors, such as promotions, holidays, seasonality, and
            events, impact businesses in the retail landscape.
          </p>
          <p className="py-4">
            The unique selling point of Creditntell lies in its ability to
            combine foot traffic data and geospatial intelligence with
            comprehensive financial retail coverage, featuring in-house industry
            experts, proprietary scoring models, predictive measuring tools, and
            store locational data. This integration provides users with a true
            360-degree view of the evolving retail landscape, setting
            Creditntell apart as the only provider of its kind in the
            marketplace.
          </p>
          <h2 className="pt-6 pb-2">Responsibilities</h2>
          <p className="py-2">
            As the UX Designer, my responsibilities centered around creating an
            intuitive and user-friendly dashboard that enables businesses to
            harness the power of geospatial insights effectively. I collaborated
            closely with stakeholders, industry experts, and the development
            team to ensure that the platform's features and functionalities
            aligned with the needs of its users.
          </p>
          <h2 className="pt-6 pb-2">Design Process</h2>
          <p className="py-2">
            The design process for the Creditntell dashboard involved extensive
            user research and iterative design practices. I conducted in-depth
            interviews and usability tests with businesses and retail agents to
            gain insights into their specific requirements, pain points, and
            workflows. Understanding the intricacies of the retail industry and
            the needs of its professionals was critical in creating a dashboard
            that resonates with users.
          </p>
          <p className="py-2">
            Based on the insights gathered from user research, I created user
            personas and user journey maps to visualize the typical interactions
            and tasks performed by businesses and retail agents using the
            dashboard. This empathetic design approach allowed me to identify
            key features and tailor the user interface to their specific needs.
          </p>
          <p className="py-2">
            Throughout the design process, I created wireframes and interactive
            prototypes to visualize the dashboard's interface and interaction
            flow. These designs were continuously refined through iterative
            feedback sessions and usability testing, ensuring that the final
            product offers a seamless and efficient user experience.
          </p>
          <h2 className="pt-6 pb-2">Key Features:</h2>
          <p className="py-2">
            The Creditntell dashboard offered a wide range of features to
            support businesses in harnessing geospatial insights effectively.
            Some of the key features I designed and implemented include:
          </p>
          <ol>
            <li className="py-2">
              Foot Traffic and Dwell Time Data: The dashboard provided users
              with accurate foot traffic counts and dwell time data, enabling
              them to analyze customer behavior and make informed decisions.
            </li>
            <li className="py-2">
              Customizable Filters: Users could filter and segment data based on
              time, day of the week, and customer segments, allowing for
              granular analysis and precise decision-making.
            </li>
            <li className="py-2">
              Geospatial Intelligence: The integration of geospatial
              intelligence with financial retail coverage provided a
              comprehensive view of the retail landscape, empowering businesses
              to discover new opportunities and make strategic decisions.
            </li>
            <li className="py-2">
              Predictive Measuring Tools: Creditntell offered predictive
              measuring tools that allowed businesses to anticipate the impact
              of promotions, holidays, seasonality, and events on their
              operations.
            </li>
          </ol>
          <h2 className="pt-6 pb-2">Impact and Outcome</h2>
          <p className="py-2">
            The Creditntell dashboard had a significant impact on businesses in
            the retail industry by providing them with a powerful tool to gain
            actionable insights and discover new business opportunities. The
            user-centric design approach ensured that the platform's interface
            and features catered to the unique needs of businesses and retail
            agents, fostering high user adoption and satisfaction.
          </p>
          <p className="py-2">
            By combining foot traffic data, geospatial intelligence, and
            comprehensive financial retail coverage, Creditntell offered users a
            holistic view of the evolving retail landscape. This enabled
            businesses to make data-driven decisions, optimize their operations,
            and identify areas for growth and improvement.
          </p>
          <p className="py-2">
            As the UX Designer on this project, I am proud to have contributed
            to the development of a platform that empowers businesses in the
            retail industry to thrive and succeed. The Creditntell dashboard
            stands as a testament to the power of user-centered design in
            creating solutions that provide genuine value and impact in the
            marketplace.
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
