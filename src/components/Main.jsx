import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main" className="w-full h-[70vh] text-center">
      <div className="max-w-[800px] relative w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="flex-col items-center">
          <div className="center">
            <img
              src={"/assets/florere.svg"}
              alt="Sofia Logo"
              className="mx-auto logo"
              width={100}
              height={100}
            />
          </div>
          <h1 className="pb-4 pt-12 mx-auto">Sofia Martin</h1>
          <p className="text-lg tracking-wide py-4 max-w-[100%] m-auto">
            Product Leader, Design Thinker,{" "}
            <span className="inline-block">Data Enthusiast</span>
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="p-3 cursor-pointer">
              <a
                href="https://www.linkedin.com/in/sofiabrainerdmartin/"
                target="blank"
                aria-label="Link to Sofia Martin's LinkedIn profile"
              >
                <FaLinkedinIn size={18} title="LinkedIn icon" />
              </a>
            </div>
            <div className="p-3 cursor-pointer">
              <a
                href="https://github.com/sofia-cse"
                target="blank"
                aria-label="Link to Sofia Martin's Github Profile"
              >
                <FaGithub size={18} title="Github icon" />
              </a>
            </div>
            <div className="p-3 cursor-pointer">
              <a
                href="/#contact"
                aria-label="Anchor link to Sofia Martin's contact form"
              >
                <AiOutlineMail size={18} title="envelope icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
