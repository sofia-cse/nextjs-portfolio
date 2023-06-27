import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({ title, role, backgroundImg, projectUrl, arialabel }) => {
  return (
    <div className="projectitem flex justify-center">
      <div className="relative flex items-center justify-center h-auto w-full group hover:bg-gradient-to-b from-[#a284fb] to-[#d3283b] rounded-md">
        <Image
          src={backgroundImg}
          alt="Project Image"
          className="group-hover:opacity-25 h-full object-cover rounded-md"
        />
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center text-white">
          <h3 className="text-2xl w-max m-auto">{title}</h3>
          <p className="pt-2 pb-4">{role}</p>
          <Link
            href={projectUrl}
            aria-label={arialabel}
            className="m-auto text-center py-3 px-4 rounded-sm w-fit bg-white text-gray-800"
          >
            More Info
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
