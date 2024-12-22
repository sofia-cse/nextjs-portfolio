"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import contactImg from "../../public/assets/scream-start.webp";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  const formRef = useRef(null);
  const [done, resetButton] = useState(false);
  const handleButton = () => {
    resetButton(!done);
    console.log(done);
  };

  return (
    <div className="w-full">
      <div className="m-auto w-full max-w-[1240px] px-2 py-16">
        <h2 className="py-4 pb-8 text-center lg:text-left">Get In Touch</h2>
        <div className="gap-8 md:grid lg:grid-cols-5">
          {/* left */}
          <div className="co-span-3 h-full w-full px-4 lg:col-span-2 lg:px-0">
            <div className="h-full">
              <div className="text-center md:text-left">
                <Image
                  className="m-auto mb-4 rounded-md duration-300 ease-in hover:scale-105 lg:mt-14"
                  src={contactImg}
                  alt="Contact image of Drew Barrymore on the phone from the opening scene of the original Scream movie"
                />
              </div>
              <div>
                <h2 className="py-4">Sofia Martin</h2>
                <p className="pb-2">
                  I am available for full-time or contract positions. Contact me
                  about your project needs.
                </p>
              </div>
              <div>
                <div className="flex items-center pb-4">
                  <p className="pb-2 pr-2 pt-3">Connect With Me:</p>

                  <div className="cursor-pointer p-2">
                    <a
                      href="https://www.linkedin.com/in/sofiabrainerdmartin/"
                      target="blank"
                      aria-label="Link to Sofia Martin's LinkedIn profile"
                    >
                      <FaLinkedinIn title="LinkedIn icon" />
                    </a>
                  </div>
                  <div className="cursor-pointer p-2 px-4">
                    <a
                      href="https://github.com/sofia-cse"
                      target="blank"
                      aria-label="Link to Sofia Martin's Github profile"
                    >
                      <FaGithub title="Github icon" />
                    </a>
                  </div>
                  {/*
                  <div className="p-3 cursor-pointer">
                    <BsFillPersonLinesFill />
                  </div>*/}
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="col-span-3 h-auto w-full lg:p-4">
            <div className="px-4">
              <form
                action="https://getform.io/f/cec7a2a2-5959-47a2-adea-d1dcc55300f9"
                method="POST"
                ref={formRef}
                autoComplete="on"
              >
                <div className="grid w-full gap-4 md:grid-cols-2">
                  <div className="flex flex-col">
                    <label className="py-2 text-sm" htmlFor="name">
                      Name <span className="text-red"> *</span>
                    </label>
                    <input
                      type="text"
                      className="rounded-md border border-gray-500 p-3"
                      name="name"
                      id="name"
                      required
                      aria-required="true"
                      autoComplete="Full name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="py-2 text-sm" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="rounded-md border border-gray-500 p-3"
                      name="phone"
                      id="phone"
                      autoComplete="Phone number"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="py-2 text-sm" htmlFor="email">
                    Email <span className="text-red"> *</span>
                  </label>
                  <input
                    type="email"
                    className="rounded-md border border-gray-500 p-3"
                    name="email"
                    id="email"
                    required
                    aria-required="true"
                    autoComplete="Email address"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="py-2 text-sm" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="rounded-md border border-gray-500 p-3"
                    name="subject"
                    id="subject"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="py-2 text-sm" htmlFor="message">
                    Message <span className="text-red"> *</span>
                  </label>
                  <textarea
                    rows={4}
                    className="rounded-md border border-gray-500 p-3"
                    name="message"
                    id="message"
                    required
                    aria-required="true"
                  />
                </div>
                <input type="hidden" name="_gotcha" className="hidden"></input>
                <div className="flex flex-col">
                  <button
                    onClick={handleButton}
                    className="mx-auto mt-8 p-4 transition duration-300 ease-in-out hover:shadow-xl"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
