import React from "react";
import Image from "next/image";
import Main from "../components/Main";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import "./globals.css";

export default function Home() {
  return (
    <div>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <div className="container mx-auto mt-4">
        <div className="mb-4 flex-col items-center">
          <Image
            src="/assets/florere.svg"
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
