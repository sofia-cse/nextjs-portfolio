import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({ title, role, backgroundImg, projectUrl }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full group hover:bg-gradient-to-b from-[#a284fb] to-[#d3283b]">
      <Image
        src={backgroundImg}
        alt="Project Image"
        className="group-hover:opacity-10 h-full object-cover"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center text-white">
        <h3 className="text-2xl">{title}</h3>
        <p className="pt-2 pb-4">{role}</p>
        <Link href={projectUrl}>
          <p
            className="py-3 rounded-md bg-white text-gray-800"
            aria-label="link to the project details"
          >
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
