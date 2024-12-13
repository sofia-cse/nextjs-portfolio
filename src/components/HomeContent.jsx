"use client";
import React, { useRef, useEffect } from "react";
import Main from "../components/Main";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { useNavContext } from "@/app/utils/NavContextProvider";

const HomeContent = () => {
  const { setActiveNav } = useNavContext();

  const homeRef = useRef(null);
  const workRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-49% 0% -49% 0%", // Trigger when the section enters halfway into the viewport
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveNav(entry.target.id);
        }
      });
    }, options);

    const sections = [
      homeRef.current,
      workRef.current,
      aboutRef.current,
      skillsRef.current,
      contactRef.current,
    ];
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div>
      <div className="container mx-auto">
        <div id="home" ref={homeRef}>
          <Main />
        </div>
        <div id="work" ref={workRef}>
          <Projects />
        </div>
        <div id="about" ref={aboutRef}>
          <About />
        </div>
        <div id="tools" ref={skillsRef}>
          <Skills />
        </div>
        <div id="contact" ref={contactRef}>
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
