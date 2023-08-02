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
    <div id="work" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <h2 className="py-8">Recent Work</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Firmatek Data Portal"
            role="UX Designer"
            backgroundImg={firmatekImg}
            projectUrl="/firmatek"
            arialabel="Learn more more about Sofia's involvement in the Firmatek project"
          />
          <ProjectItem
            title="Measure: Ground Control"
            role="UX Designer"
            backgroundImg={groundImg}
            projectUrl="/ground-control"
            arialabel="Learn more more about Sofia's involvement in the Ground Control project"
          />
          <ProjectItem
            title="n2uitive Insurtech"
            role="Product Manager"
            backgroundImg={n2uitiveImg}
            projectUrl="/n2uitive"
            arialabel="Learn more more about Sofia's involvement in the n2uitive project"
          />
          <ProjectItem
            title="Good Days Health"
            role="UX Designer"
            backgroundImg={gdImg}
            projectUrl="/good-days"
            arialabel="Learn more more about Sofia's involvement in the Good Days project"
          />
          <ProjectItem
            title="Bands Social Streaming App"
            role="UX Researcher"
            backgroundImg={bandsImg}
            projectUrl="/bands-app"
            arialabel="Learn more more about Sofia's involvement in the Bands App project"
            identifier="projectitem flex justify-center bands"
          />

          <ProjectItem
            title="VTS Asset Manager"
            role="UX Researcher"
            backgroundImg={assetImg}
            projectUrl="/asset-manager"
            arialabel="Learn more more about Sofia's involvement in the Asset Manager project"
          />
          <ProjectItem
            title="Coaching to Fidelity App"
            role="UX Researcher"
            backgroundImg={c2fImg}
            projectUrl="/coaching-to-fidelity"
            arialabel="Learn more more about Sofia's involvement in the Coaching to Fidelity project"
          />
          <ProjectItem
            title="Creditntel Property Analytics"
            role="UX Designer"
            backgroundImg={propertyImg}
            projectUrl="/creditntell"
            arialabel="Learn more more about Sofia's involvement in the Creditntell project"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
