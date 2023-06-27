import React from "react";
import Image from "next/image";
import Main from "../components/Main";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import logo from "../../public/assets/florere.svg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sofia Martin",
  description:
    "Sofia Martin is a technologist experienced with all parts of the product discovery, design, and development process.",
};

export default function Home() {
  return (
    <div className="container mx-auto">
      <Main />
      <Projects />
      <About />
      <Skills />
      <Contact />
      <div className="container mx-auto mt-4">
        <div className="mb-4 flex-col items-center">
          <Image
            src={logo}
            alt="Sofia Flower Logo"
            className="mx-auto"
            width={60}
            height={60}
            priority
          />
        </div>
      </div>
    </div>
  );
}
