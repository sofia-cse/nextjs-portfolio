"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import contactImg from "../../public/assets/scream-start.webp";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  const formRef = useRef(null);
  const [done, resetButton] = useState(false);
  const handleButton = () => {
    resetButton(!done);
    console.log(done);
  };

  return (
    <div id="contact" className="w-full">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <h2 className="py-4 pb-8 text-center lg:text-left">Get In Touch</h2>
        <div className="md:grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="co-span-3 lg:col-span-2 w-full h-full px-4 lg:px-0">
            <div className="h-full">
              <div className="text-center md:text-left">
                <Image
                  className="hover:scale-105 ease-in duration-300 m-auto lg:pt-6 pb-4"
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
                  <p className="pr-2 pb-2 pt-3">Connect With Me:</p>

                  <div className="p-2 cursor-pointer">
                    <a
                      href="https://www.linkedin.com/in/sofiabrainerdmartin/"
                      target="blank"
                      aria-label="Link to Sofia Martin's LinkedIn profile"
                    >
                      <FaLinkedinIn title="LinkedIn icon" />
                    </a>
                  </div>
                  <div className="p-2 px-4 cursor-pointer">
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
          <div className="col-span-3 w-full h-auto lg:p-4">
            <div className="px-4">
              <form
                action="https://getform.io/f/cec7a2a2-5959-47a2-adea-d1dcc55300f9"
                method="POST"
                ref={formRef}
                autoComplete="on"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full">
                  <div className="flex flex-col">
                    <label className="text-sm py-2" htmlFor="name">
                      Name <span className="text-red"> *</span>
                    </label>
                    <input
                      type="text"
                      className="border-2 rounded-md p-3 border-gray-500"
                      name="name"
                      id="name"
                      required
                      aria-required="true"
                      autoComplete="Full name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm py-2" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="border-2 rounded-md p-3 border-gray-500"
                      name="phone"
                      id="phone"
                      autoComplete="Phone number"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="text-sm py-2" htmlFor="email">
                    Email <span className="text-red"> *</span>
                  </label>
                  <input
                    type="email"
                    className="border-2 rounded-md p-3 border-gray-500"
                    name="email"
                    id="email"
                    required
                    aria-required="true"
                    autoComplete="Email address"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm py-2" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="border-2 rounded-md p-3 border-gray-500"
                    name="subject"
                    id="subject"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm py-2" htmlFor="message">
                    Message <span className="text-red"> *</span>
                  </label>
                  <textarea
                    type="text"
                    rows="4"
                    className="border-2 rounded-md p-3 border-gray-500"
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
                    className="p-4 mt-8 mx-auto hover:shadow-xl transition ease-in-out duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-12">
          <a
            href="/#main"
            aria-label="link to the top of Sofia Martin's Website"
          >
            <HiOutlineChevronDoubleUp
              className="m-auto text-[#a284fb]"
              size={25}
              title="chevron icon"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
