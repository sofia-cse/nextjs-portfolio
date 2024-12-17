import React from "react";
import Image from "next/image";
import figma from "@/../public/assets/skills/figma.png";
import jira from "@/../public/assets/skills/atlassian_jira.png";
import google from "@/../public/assets/skills/google_cloud.png";
import aws from "@/../public/assets/skills/aws.png";
import python from "@/../public/assets/skills/python.png";
import react from "@/../public/assets/skills/react.png";
import nextjs from "@/../public/assets/skills/nextjs.png";
import github from "@/../public/assets/skills/github.svg";
import tailwind from "@/../public/assets/skills/tailwind.png";
import pendo from "@/../public/assets/skills/pendo.png";
import userzoom from "@/../public/assets/skills/userzoom.png";
import adobe from "@/../public/assets/skills/Adobe_Creative_Cloud.png";
import postgreSQL from "@/../public/assets/skills/postgreSQL.svg";
import vercel from "@/../public/assets/skills/vercel.svg";
import pytorch from "@/../public/assets/skills/PyTorch.svg";
import typescript from "@/../public/assets/skills/typescript.svg";
//import { PropTypes } from "prop-types";

//define the component which displays a given skill
const Skill = ({
  name,
  imgSrc,
  imgStyle,
}: {
  name: string;
  imgSrc: string;
  imgStyle?: string;
}) => {
  return (
    <div className="grid grid-cols-2 gap-4 justify-center items-center hover:scale-105 ease-in duration-200">
      <div className="m-auto">
        <Image
          src={imgSrc}
          width={64}
          height={64}
          className={
            imgStyle === "invertDark" ? "dark:brightness-0 dark:invert" : ""
          }
          alt={name + " logo"}
        />
      </div>
      <div className="flex flex-col items-left justify-left">
        <h3>{name}</h3>
      </div>
    </div>
  );
};

const Skills = () => {
  //store all skills and their corresponding data in an array
  const skillset = [
    { name: "React", imgSrc: react },
    { name: "Next.js", imgSrc: nextjs, imgStyle: "invertDark" },
    { name: "Python", imgSrc: python },
    { name: "PostgreSQL", imgSrc: postgreSQL },
    { name: "PyTorch", imgSrc: pytorch },
    { name: "AWS", imgSrc: aws, imgStyle: "invertDark" },
    { name: "Google Cloud", imgSrc: google },
    { name: "Vercel", imgSrc: vercel, imgStyle: "invertDark" },
    { name: "Typescript", imgSrc: typescript },
    { name: "Tailwind", imgSrc: tailwind },
    { name: "Figma", imgSrc: figma },
    { name: "Github", imgSrc: github, imgStyle: "invertDark" },
    { name: "Jira", imgSrc: jira },
    { name: "Pendo", imgSrc: pendo },
    { name: "UserZoom", imgSrc: userzoom },
    { name: "Adobe Suite", imgSrc: adobe },
  ];

  //final output
  return (
    <div id="skills" className="w-full md:h-screen p-2 py-20">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <h2 className="pb-12 text-center lg:text-left">
          Tools I&#39;m Working With
        </h2>
        {/* grid displays each skill in the skillset array using the Skill component */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 min-h-[40%]">
          {skillset.map((skill) => (
            <Skill
              key={skill.name}
              name={skill.name}
              imgSrc={skill.imgSrc}
              imgStyle={skill.imgStyle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
