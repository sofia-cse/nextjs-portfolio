import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:min-h-screen p-2 flex items-center py-16"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h2 className="py-6">A Little About Me</h2>
          <p className="py-2">
            Hi, I&#39;m Sofia, a passionate UX designer, UX researcher, product
            manager, and sometimes a developer with over seven years of
            experience in the tech industry. I&#39;ve had the pleasure of
            working with startups and enterprises in a variety of industries,
            ranging from e-commerce to healthcare.
          </p>
          <p className="py-2">
            As a graduate of the University of California, San Diego, with a
            B.S. in Cognitive Science, I specialize in Human-Computer
            Interaction. I am dedicated to creating user-centered design
            solutions that provide meaningful and delightful experiences for
            users. My diverse skill set in UX design, UX research, product
            management, and front-end development has allowed me to collaborate
            with cross-functional teams to ensure that product solutions meet
            business goals, user needs, and technical feasibility.
          </p>
          <p className="py-2">
            Outside of work, I have a variety of interests that keep me busy. I
            love cooking and experimenting with new recipes, exploring the
            outdoors, traveling to new destinations, and spending time with my
            pets. I also have a passion for music and film, which I find
            inspiring and motivating in my work.
          </p>
          <p className="py-2">
            I am committed to diversity, equity, and inclusion in both my
            personal and professional life. I believe in creating inclusive
            design solutions that address the needs of underrepresented
            communities.
          </p>
          <p className="py-2">
            In addition to my work in tech, I have a strong interest in urban
            design and renewable energy. I believe in designing sustainable and
            environmentally-friendly products and solutions that positively
            impact the world we live in.
          </p>
          <p className="py-2">
            Overall, I am a driven and passionate individual who loves creating
            meaningful experiences that delight users. I am always looking for
            new challenges and opportunities to grow and expand my skill set.
          </p>
        </div>
        <div className="w-full h-auto m-auto flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="max-w-[300px]"
            src="/assets/Sofia_About.png"
            alt=""
            width={386}
            height={290}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
