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
      <div className="w-full h-[30vh] lg:h-[60vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[60vh] bg-black/60 z-10" />
        <Image
          src={n2uitiveImg}
          alt="Header"
          className="absolute z-1 object-cover object-top"
          fill
        />
        <div className="absolute bottom-[8%] max-w-[1240px] w-full left-[50%] right[50%] translate-x-[-50%] z-10 text-white">
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
            I served as the Product Manager for n2uitive, a cloud-based claims
            interview and recorded statement management platform tailored to
            auto, home, and workers&apos; compensation insurers. The primary
            objective of this project was to provide claims organizations with a
            unified, secure, and efficient recorded statement solution that
            simplifies processes, reduces expenses, and adheres to industry-wide
            best practices.
          </p>
          <h2 className="pt-6 pb-2">Responsibilities</h2>
          <p className="py-2">
            As the Product Manager for n2uitive, my responsibilities revolved
            around creating a user-centric platform that met the specific needs
            of insurance claims professionals. I collaborated closely with
            stakeholders, domain experts, and the development team to gain a
            deep understanding of the challenges faced by insurers in managing
            recorded statements and claims interviews.
          </p>
          <h2 className="pt-6 pb-2">Design Process</h2>
          <p className="py-2">
            The design process for n2uitive involved comprehensive user research
            and iterative design practices. I conducted in-depth interviews and
            usability tests with claims professionals to identify pain points
            and opportunities for improvement in their current recorded
            statement workflow. Understanding the nuances of the insurance
            industry was crucial in creating a solution that would resonate with
            users and enhance their productivity.
          </p>
          <p className="py-2">
            The design process for n2uitive involved comprehensive user research
            and iterative design practices. I conducted in-depth interviews and
            usability tests with claims professionals to identify pain points
            and opportunities for improvement in their current recorded
            statement workflow. Understanding the nuances of the insurance
            industry was crucial in creating a solution that would resonate with
            users and enhance their productivity.
          </p>
          <p className="py-2">
            Based on the insights from user research, I crafted user personas
            and user journey maps to visualize the typical interactions and
            workflows of claims professionals using the platform. This process
            helped me identify key features and functionalities that would
            streamline their processes and improve their overall experience.
          </p>
          <p className="py-2">
            With the user needs at the forefront, I created user flows and
            product requirements that effectively translated client and user
            needs into tangible deliverables for the design and development
            teams. Th e designs were refined through iterative feedback sessions
            and usability testing, ensuring that the final solution met the
            unique requirements of insurance claims organizations.
          </p>
          <h2 className="pt-6 pb-2">Key Features:</h2>
          <p className="py-2">
            The n2uitive platform offered a comprehensive set of features to
            support claims interview and recorded statement management
            effectively. Some of the key features I designed and implemented
            include:
          </p>
          <ol>
            <li className="py-2">
              n2record™: The cloud-based recorded statement solution, n2record™,
              simplified the statement workflow for insurers. Users could
              effortlessly record, store, and index statements within a secure
              statement library. The automatic indexing made the statements
              easily searchable and accessible, saving time and effort for
              claims professionals.
            </li>
            <li className="py-2">
              Secure Sharing: The platform enabled users to securely share
              statements with approved external parties and transcription
              services directly from the statement library. This streamlined the
              collaboration process, ensuring that stakeholders had access to
              the necessary information promptly and securely.
            </li>
            <li className="py-2">
              Insightful Reports and Analytics: n2uitive provided insurers with
              insightful reports and analytics, allowing them to gain valuable
              insights into statement practices. By analyzing this data, claims
              organizations could identify patterns, trends, and areas for
              improvement, leading to more consistent and accurate claim
              outcomes.
            </li>
          </ol>
          <h2 className="pt-6 pb-2">Impact and Outcome</h2>
          <p className="py-2">
            Working on the n2uitive project allowed me to contribute to the
            development of a cutting-edge platform that addressed the specific
            needs of auto, home, and workers&apos; compensation insurers. By
            streamlining the recorded statement workflow and simplifying
            processes, n2uitive empowered claims professionals to work more
            efficiently, reduce expenses, and adhere to industry best practices.
          </p>
          <p className="py-2">
            The user-centric design approach ensured that the platform resonated
            with its target audience, leading to high user adoption and
            satisfaction. The seamless integration of the n2record™ solution
            within the cloud-based platform provided claims professionals with a
            unified and convenient experience.
          </p>
          <p className="py-2">
            Overall, n2uitive&apos;s cloud-based claims interview and recorded
            statement management platform significantly improved the claims
            process for insurers, fostering better collaboration, transparency,
            and accuracy in claim outcomes. As the UX Designer for this project,
            I am proud to have played a pivotal role in enhancing the
            productivity and effectiveness of insurance claims professionals
            through thoughtful and innovative design.
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
