"use client";
import React, { useRef, useEffect } from "react";
import Intro from "../components/Intro";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { useNavContext } from "@/app/utils/NavContextProvider";

const sectionItems = [
  { label: <Intro />, href: "/#", id: "home" },
  { label: <Projects />, href: "/#work", id: "work" },
  { label: <About />, href: "/#about", id: "about" },
  { label: <Skills />, href: "/#skills", id: "tools" },
  { label: <Contact />, href: "/#contact", id: "contact" },
];

const HomeContent = () => {
  const { setActiveNav } = useNavContext();
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

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

    {
      /*const sections = [
      homeRef.current,
      workRef.current,
      aboutRef.current,
      skillsRef.current,
      contactRef.current,
    ]*/
    }

    const sections = elementsRef.current;
    console.log(sections);

    sections.forEach((section) => section && observer.observe(section));

    return () => {
      sections.forEach((section) => section && observer.unobserve(section));
    };
  }, []);

  return (
    <main className="container mx-auto">
      {sectionItems.map((item, index) => (
        <section
          key={item.id}
          className={item.href}
          id={item.id}
          ref={(el) => {
            elementsRef.current[index] = el; // Correctly assign refs by index
          }}
          onClick={() => setActiveNav(item.id)}
        >
          {item.label}
        </section>
      ))}

      <section id="home" ref={homeRef}>
        <Intro />
      </section>
      <section id="work" ref={workRef}>
        <Projects />
      </section>
      <section id="about" ref={aboutRef}>
        <About />
      </section>
      <section id="tools" ref={skillsRef}>
        <Skills />
      </section>
      <section id="contact" ref={contactRef}>
        <Contact />
      </section>
    </main>
  );
};

export default HomeContent;
