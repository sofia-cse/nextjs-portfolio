import React from "react";
import propertyImg from "../../public/assets/projects/property_comparison.jpg";
import gdImg from "../../public/assets/projects/gd.png";
import n2uitiveImg from "../../public/assets/projects/n2uitive.png";
import firmatekImg from "../../public/assets/projects/firmatek.png";
import bandsImg from "../../public/assets/projects/bands_wide.jpg";
import assetImg from "../../public/assets/projects/assetmanager6.png";
import groundImg from "../../public/assets/projects/groundcontrol3.png";
import c2fImg from "../../public/assets/projects/c2f_ipad.jpg";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <h2 className="py-8">Recent Work</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Firmatek"
            role="UX Researcher"
            backgroundImg={firmatekImg}
            projectUrl="/firmatek"
          />
          <ProjectItem
            title="Measure Ground Control"
            role="UX Researcher"
            backgroundImg={groundImg}
            projectUrl="/ground_control"
          />
          <ProjectItem
            title="n2uitive"
            role="Product Manager"
            backgroundImg={n2uitiveImg}
            projectUrl="/n2uitive"
          />
          <ProjectItem
            title="Good Days"
            role="UX Researcher"
            backgroundImg={gdImg}
            projectUrl="/gd"
          />
          <ProjectItem
            title="Bands App"
            role="UX Researcher"
            backgroundImg={bandsImg}
            projectUrl="/bands"
          />

          <ProjectItem
            title="VTS Asset Manager"
            role="UX Researcher"
            backgroundImg={assetImg}
            projectUrl="/asset_manager"
          />
          <ProjectItem
            title="Coaching to Fidelity"
            role="UX Researcher"
            backgroundImg={c2fImg}
            projectUrl="/c2f"
          />
          <ProjectItem
            title="Creditntell"
            role="UX Researcher"
            backgroundImg={propertyImg}
            projectUrl="/property"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
