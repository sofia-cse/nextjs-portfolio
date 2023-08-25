import React from "react";
import Image from "next/image";

const Skills = () => {
  return (
    <div id="skills" className="w-full md:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <h2 className="pb-12 text-center lg:text-left">
          Tools I&#39;m Working With
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/figma.png"
                  width={64}
                  height={64}
                  alt="Figma logo"
                />
              </div>
              <div className="flex flex-col items-left justify-left">
                <h3>Figma</h3>
              </div>
            </div>
          </div>
          <div className="hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/Adobe_Creative_Cloud.png"
                  width={64}
                  height={64}
                  alt="Adobe Creative Cloud logo"
                />
              </div>
              <div className="flex flex-col items-left justify-left">
                <h3>Adobe Suite</h3>
              </div>
            </div>
          </div>
          <div className="hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/atlassian_jira.png"
                  width={64}
                  height={64}
                  alt="Jira logo"
                />
              </div>
              <div className="flex flex-col items-left justify-left">
                <h3>Jira</h3>
              </div>
            </div>
          </div>
          <div className="hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/python.png"
                  width={64}
                  height={64}
                  alt="Python logo"
                />
              </div>
              <div className="flex flex-col items-left justify-left">
                <h3>Python</h3>
              </div>
            </div>
          </div>
          <div className="hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/html.png"
                  width={64}
                  height={64}
                  alt="html5 logo"
                />
              </div>
              <div className="flex flex-col items-left justify-left">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/css.png"
                  width={64}
                  height={64}
                  alt="CSS logo"
                />
              </div>
              <div className="flex flex-col items-left justify-left">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/react.png"
                  width={64}
                  height={64}
                  alt="React logo"
                />
              </div>
              <div className="flex flex-col items-left justify-left">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className="hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  className="dark:invert"
                  src="/assets/skills/github.svg"
                  width={64}
                  height={64}
                  alt="github logo"
                />
              </div>
              <div className="flex flex-col items-left justify-left">
                <h3>Github</h3>
              </div>
            </div>
          </div>
          <div className="hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  className="dark:invert"
                  src="/assets/skills/nextjs.svg"
                  width={64}
                  height={64}
                  alt="Next.js logo"
                />
              </div>
              <div className="flex flex-col items-left justify-left">
                <h3>Next.js</h3>
              </div>
            </div>
          </div>
          <div className="hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/gatsby.png"
                  width={64}
                  height={64}
                  alt="gatsby logo"
                />
              </div>
              <div className="flex flex-col items-left justify-left">
                <h3>Gatsby.js</h3>
              </div>
            </div>
          </div>
          <div className="hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/tailwind.png"
                  width={64}
                  height={64}
                  alt="Tailwind logo"
                />
              </div>
              <div className="flex flex-col items-left justify-left">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className="hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/userzoom.png"
                  width={64}
                  height={64}
                  alt="UserZoom logo"
                />
              </div>
              <div className="flex flex-col items-left justify-left">
                <h3>UserZoom</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
