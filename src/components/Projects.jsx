import React from "react";
import propertyImg from "../../public/assets/projects/property.png";
import gdImg from "../../public/assets/projects/gd.png";
import n2uitiveImg from "../../public/assets/projects/n2uitive.png";
import firmatekImg from "../../public/assets/projects/firmatek.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <h2 className="py-8">Recent Work</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Foot Traffic Analytics"
            backgroundImg={propertyImg}
            projectUrl="/property"
          />
          <ProjectItem
            title="Firmatek"
            backgroundImg={firmatekImg}
            projectUrl="/firmatek"
          />
          <ProjectItem
            title="Good Days"
            backgroundImg={gdImg}
            projectUrl="/gd"
          />
          <ProjectItem
            title="n2uitive"
            backgroundImg={n2uitiveImg}
            projectUrl="/n2uitive"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
