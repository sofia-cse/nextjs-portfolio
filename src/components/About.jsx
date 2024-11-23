import React from "react";
import Image from "next/image";
import avatar from "../../public/assets/subject_3.png";

const About = () => {
  return (
    <div id="about" className="w-full min-h-screen flex items-center p-2">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <div className="max-w-[1240px] m-auto md:grid">
          <h2 className="py-2 md:py-6 block text-center lg:text-left">
            Hi, I&apos;m Sofia!
          </h2>
        </div>
        <div className="max-w-[1240px] m-auto lg:grid grid-cols-3 gap-8">
          <div className="w-full h-auto m-auto flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 order-2">
            <Image
              className="max-w-[60%] md:max-w-[200px] lg:max-w-[300px] rounded-full"
              src={avatar}
              alt="Photo of Sofia Martin"
            />
          </div>
          <div className="col-span-2 order-1 text-lg">
            <p className="py-2">
              I&apos;m a native Californian and UCSD alum (go Tritons!).
            </p>
            <p className="py-2">
              I love cooking, hiking with my dog, swimming with the sea lions in
              La Jolla, reading, yoga, and creating exceptional products using
              cutting-edge technologies.
            </p>
            <p className="py-2">
              Recently, I have been focused on the intersection of Product
              Design with AI/ML and Cloud Computing. I am passionate about
              helping teams innovate by optimizing pipelines to free their data
              and enable insightful decisions.
            </p>
            <p className="py-2">
              I am committed to diversity, equity, and inclusion in both my
              personal and professional life. I strive to foster a collaborative
              environment where all my peers feel valued and supported.
            </p>
            <p className="py-2">
              In addition to my work in tech, I have a strong interest in urban
              design and renewable energy. I believe in designing sustainable
              and environmentally-friendly products and solutions that
              positively impact the world we live in.
            </p>
            <p className="py-2">
              If you&#39;ve made it this far I&#39;m glad I caught your
              interest! Please reach out so we can chat about your project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
