import React from "react";
import propertyImg from "../../public/assets/projects/creditntell-trade-area.png";
import gdImg from "../../public/assets/projects/gd.png";
import avinewImg from "../../public/assets/projects/Avinew-Framed.png";
import n2uitiveImg from "../../public/assets/projects/n2uitive-add-users-basic.png";
import firmatekImg from "../../public/assets/projects/Firmatek-Stock-Pile-Mark-Ups.png";
import bandsImg from "../../public/assets/projects/bands_wide.jpg";
import assetImg from "../../public/assets/projects/assetmanager6.png";
import groundImg from "../../public/assets/projects/groundcontrol3.png";
import c2fImg from "../../public/assets/projects/c2f-android-framed.png";
import tourImg from "../../public/assets/projects/Tourbooks-Framed.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="work" className="w-full">
      <div className="mx-auto px-4 pb-16 md:px-12">
        <h2 className="mb-6 text-center lg:text-left">Selected Work</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Firmatek: Materials Inventory Data Portal"
            role="A comprehensive platform for aerial data reporting, enabling users to survey stockpiles using orthophotos and Lidar scan data."
            backgroundImg={firmatekImg}
            projectUrl="/firmatek"
            arialabel="Learn more more about Sofia's involvement in the Firmatek project"
            identifier="projectitem"
          />
          <ProjectItem
            title="Measure: Ground Control"
            role="An all-in-one software solution designed for UAV pilots, enabling users to efficiently manage their drone operations, from mission planning and airspace checking to data processing and reporting."
            backgroundImg={groundImg}
            projectUrl="/ground-control"
            arialabel="Learn more more about Sofia's involvement in the Ground Control project"
            identifier="projectitem"
          />
          <ProjectItem
            title="Avinew: ADAS Integration"
            role="A consumer application for an insurance company tailored to owners of Electric Vehicles equipped with ADAS systems."
            backgroundImg={avinewImg}
            projectUrl="/avinew"
            arialabel="Learn more more about Sofia's involvement in the avinew project"
            identifier="projectitem avinew"
          />
          <ProjectItem
            title="n2uitive: Insurtech"
            role="A cloud-based claims interview and recorded statement management platform tailored to auto, home, and workers' compensation insurers."
            backgroundImg={n2uitiveImg}
            projectUrl="/n2uitive"
            arialabel="Learn more more about Sofia's involvement in the n2uitive project"
            identifier="projectitem"
          />
          <ProjectItem
            title="Good Days: Health Care"
            role="A comprehensive non-profit co-pay assistance platform that serves the needs of patients, pharmacies, doctors, and employees, lifting the burden of chronic illness."
            backgroundImg={gdImg}
            projectUrl="/good-days"
            arialabel="Learn more more about Sofia's involvement in the Good Days project"
            identifier="projectitem"
          />
          <ProjectItem
            title="Bands: Social Streaming App"
            role="An app that empowers musicians by providing them with the tools they need to take control of their art, connect with their fans, and monetize their online presence."
            backgroundImg={bandsImg}
            projectUrl="/bands-app"
            arialabel="Learn more more about Sofia's involvement in the Bands App project"
            identifier="projectitem flex justify-center bands"
          />
          <ProjectItem
            title="Coaching to Fidelity: Education App"
            role="An app for coaches who guide teachers towards optimal implementation of The Creative Curriculum, equipping coaches with comprehensive tools and guidance to improve outcomes for children in early childhood education settings."
            backgroundImg={c2fImg}
            projectUrl="/coaching-to-fidelity"
            arialabel="Learn more more about Sofia's involvement in the Coaching to Fidelity project"
            identifier="projectitem"
          />
          <ProjectItem
            title="VTS: Property Asset Manager"
            role="A platform that simplifies property information management for commercial property professionals by centralizing property information, including plans, maps, images, and property characteristics, in one easy-to-use tool."
            backgroundImg={assetImg}
            projectUrl="/asset-manager"
            arialabel="Learn more more about Sofia's involvement in the Asset Manager project"
            identifier="projectitem"
          />
          <ProjectItem
            title="Creditntel: Property Analytics"
            role="A platform that provides accurate foot traffic counts and dwell time data, empowering agents to understand how various factors impact businesses in the retail landscape."
            backgroundImg={propertyImg}
            projectUrl="/creditntell"
            arialabel="Learn more more about Sofia's involvement in the Creditntell project"
            identifier="projectitem"
          />
          <ProjectItem
            title="Property Capsule: Digital Tourbooks"
            role="A tool for real estate leasing agents that generates real-time, fully interactive and collaborative presentations on demand, saving precious time and increasing deal throughput."
            backgroundImg={tourImg}
            projectUrl="/tourbooks"
            arialabel="Learn more more about Sofia's involvement in the Tourbooks project"
            identifier="projectitem"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
