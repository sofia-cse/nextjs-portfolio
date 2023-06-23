"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import contactImg from "../../public/assets/contact.jpg";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
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
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="co-span-3 lg:col-span-2 w-full h-full px-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="hover:scale-105 ease-in duration-300"
                  src={contactImg}
                  alt="Contact Image"
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
                <p className="pt-8">Connect With Me</p>
                <div className="flex items-center pt-4">
                  <div className="p-2 cursor-pointer">
                    <a
                      href="https://www.linkedin.com/in/sofiabrainerdmartin/"
                      target="blank"
                      aria-label="Link to the designer's LinkedIn profile"
                    >
                      <FaLinkedinIn />
                    </a>
                  </div>
                  <div className="p-2 px-8 cursor-pointer">
                    <a
                      href="https://github.com/sofia-cse"
                      target="blank"
                      aria-label="Link to the developer's Github profile"
                    >
                      <FaGithub />
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
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="text-sm py-2" for="name">
                      Name
                    </label>
                    <input
                      type="text"
                      className="border-2 rounded-md p-3 border-gray-500"
                      name="name"
                      id="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm py-2" for="phone number">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="border-2 rounded-md p-3 border-gray-500"
                      name="phone number"
                      id="phone number"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="text-sm py-2" for="email">
                    Email
                  </label>
                  <input
                    type="email"
                    className="border-2 rounded-md p-3 border-gray-500"
                    name="email"
                    id="email"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm py-2" for="subject">
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
                  <label className="text-sm py-2" for="message">
                    Message
                  </label>
                  <textarea
                    type="text"
                    rows="4"
                    className="border-2 rounded-md p-3 border-gray-500"
                    name="message"
                    id="message"
                  />
                </div>
                <input type="hidden" name="_gotcha" className="hidden"></input>
                <div className="flex flex-col">
                  <button onClick={handleButton} className="p-4 mt-4  mx-auto">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-12">
          <a href="/#main" aria-label="link to top of page">
            <HiOutlineChevronDoubleUp
              className="m-auto text-[#a284fb]"
              size={25}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
