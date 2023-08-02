import React from "react";
import Image from "next/image";
import c2fImg from "../../../public/assets/projects/c2f_ipad.jpg";
import Link from "next/link";
import { IoChevronBackOutline } from "react-icons/io5";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sofia Martin | Coaching to Fidelity Portfolio Entry",
  description:
    "Sofia Martin was the UX Researcher on the Coaching to Fidelity App, a tool for coaches to guide and monitor the progress of teachers in implementing their curriculum.",
};

const page = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[30vh] lg:h-[60vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[60vh] bg-black/60 z-10" />
        <Image
          src={c2fImg}
          alt="Header"
          className="absolute z-1 object-cover object-top"
          fill
        />
        <div className="absolute bottom-[5%] max-w-[1240px] w-full left-[50%] right[50%] translate-x-[-50%] z-10 text-white">
          <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-10 gap-0">
            <div className=""></div>
            <div className="col-span-8">
              {" "}
              <h2>Coaching to Fidelity</h2>
              <h3>Teacher Training Metrics and Reporting Platform</h3>
              <h3 className="pt-2">Role: UX Researcher</h3>
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
            As the UX Researcher for the Coaching to Fidelity app, my role was
            to understand the needs and challenges of coaches who guide teachers
            towards optimal implementation of The Creative Curriculum for
            Preschool, The Creative Curriculum for Infants, Toddlers, and Twos,
            or GOLD. The primary goal of this project was to equip coaches with
            comprehensive tools and guidance to measure fidelity, capture
            observations, provide embedded strategies, and build action plans to
            improve outcomes for children in early childhood education settings.
          </p>
          <h2 className="pt-6 pb-2">Responsibilities</h2>
          <p className="py-2">
            In this project, my responsibilities as a UX Researcher included
            conducting in-depth research to gain insights into the specific
            requirements of coaches, the challenges they face, and their desired
            workflows. I worked closely with the design and development teams to
            ensure that the app's features and functionalities aligned
            seamlessly with the coaching practice and the desired outcomes for
            children's education.
          </p>
          <h2 className="pt-6 pb-2">Design Process</h2>
          <p className="py-2">
            The design process for the Coaching to Fidelity app revolved around
            conducting user research that catered to the nuances of early
            childhood education and coaching practices. I conducted interviews,
            surveys, and usability tests with coaches and early childhood
            education experts to gather valuable feedback and understand the
            intricacies of their work.
          </p>
          <p className="py-2">
            Using the insights from the research, I created user personas and
            user journey maps that depicted the typical interactions and
            motivations of coaches using the app. This empathetic design
            approach enabled me to prioritize features that catered to the
            specific needs of coaches and provided them with efficient
            workflows.
          </p>
          <p className="py-2">
            Throughout the design process, I conducted iterative usability
            testing sessions to validate the app's usability and identify areas
            for improvement. The feedback gathered from these tests guided the
            refinement of the app's interface and interaction flow, ensuring a
            seamless and user-friendly experience for coaches.
          </p>
          <h2 className="pt-6 pb-2">Key Features:</h2>
          <p className="py-2">
            The Coaching to Fidelity app offered a comprehensive suite of
            features to empower coaches and improve teacher implementation. Some
            of the key features I researched and recommended include:
          </p>
          <ol>
            <li className="py-2">
              Teacher Observations: Coaches could schedule and document teacher
              observations within the app, facilitating a structured approach to
              measuring fidelity.
            </li>
            <li className="py-2">
              Multimedia Documentation: The app allowed coaches to capture
              photos, videos, or audio documentation during observations,
              enhancing the richness of the feedback and coaching support.
            </li>
            <li className="py-2">
              Embedded Guidance and Strategies: Coaches received embedded
              strategies to use with teachers based on the observed practices,
              fostering continuous improvement and best practices.
            </li>
            <li className="py-2">
              Action Plans and Goal Setting: Coaches could build and share
              detailed teacher action plans, setting specific goals for
              improvement and tracking progress.
            </li>
            <li className="py-2">
              Fidelity Scoring and Reporting: The app provided automatic
              fidelity scoring and reporting tools to track teacher improvement
              and drive positive outcomes for children's education.
            </li>
          </ol>
          <h2 className="pt-6 pb-2">Impact and Outcome</h2>
          <p className="py-2">
            The Coaching to Fidelity app had a significant impact on early
            childhood education by empowering coaches with the necessary tools
            to guide teachers towards optimal implementation and best practices.
            The platform's user-centric design and comprehensive features
            provided coaches with efficient workflows and valuable support.
          </p>
          <p className="py-2">
            By prioritizing the needs of coaches and early childhood education
            experts, the app became an invaluable resource for improving
            outcomes for children. The seamless integration of fidelity
            measurement, documentation, embedded strategies, and action planning
            streamlined coaching practices and promoted a culture of continuous
            improvement.
          </p>
          <p className="py-2">
            As the UX Researcher on this project, I am proud to have played a
            role in creating a platform that elevates coaching practices and
            boosts outcomes for children's education. The Coaching to Fidelity
            app stands as a testament to the power of user-centered design in
            creating solutions that positively impact the field of early
            childhood education and support the growth and development of young
            learners.
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
