import React from "react";
import Image from "next/image";
import Main from "../components/Main";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import logo from "../../public/assets/florere.svg";
import "./globals.css";

export default function Home() {
  return (
    <div>
      <Main />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <div className="container mx-auto mt-4">
        <div className="mb-4 flex-col items-center">
          <Image
            src={logo}
            alt="Sofia Logo"
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
