import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const ProjectItem = ({
  title,
  role,
  backgroundImg,
  projectUrl,
  arialabel,
  identifier,
}: {
  title: string;
  role?: string;
  backgroundImg: StaticImageData;
  projectUrl: string;
  arialabel: string;
  identifier: string;
}) => {
  return (
    <div className={identifier}>
      <Link href={projectUrl} aria-label={arialabel} className="h-full w-fit">
        <div className="flex h-full min-h-full w-full flex-col items-start justify-start">
          <div className="project-image-wrapper w-full">
            <Image
              priority
              src={backgroundImg}
              alt="Project Image"
              className="h-full max-h-[530px] object-contain"
            />
          </div>
          <div className="flex h-auto flex-col items-start justify-end p-6 text-left">
            <h3 className="mb-4 mt-2 text-2xl">{title}</h3>
            <p className="">{role}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectItem;
