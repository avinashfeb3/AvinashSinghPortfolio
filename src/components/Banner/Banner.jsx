import React from "react";
import HeroImage from "../../assets/images/profilepic.png";
import { TypeAnimation } from "react-type-animation";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaBehance, FaDribbble } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[78vh] mx-auto py-8 bg-black">
      <div className="col-span-1 my-4 mx-auto w-[300px] h-auto lg:w-[400px]">
        <img src={HeroImage} alt="Banner Image" />
      </div>
      <div className="col-span-2 px-5 my-auto">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold">
          <span className="primary-color">I'm a</span> <br />
          <TypeAnimation
            sequence={[
              "Frontend Developer",
              1000,
              "React JS Developer",
              1000,
              "Next JS Developer",
              "UI/UX Designer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "3rem", display: "inline-block" }}
            repeat={Infinity}
          />
        </h1>
        <p className=" text-gray-400 sm:text-lg my-6 lg:text-xl">
          I am Avinash Singh & Since I have been passionate about design and
          art. grew up with the Internet and naturally took a path according to
          this passion. Web Development is a way for me to keep track of all my
          passions.
        </p>

        {/* Social Media Section Start */}
        <div className="my-8 flex items-center">
          <a href="https://github.com/avinashfeb3"
            target="_blank"
            className="text-white mr-4 hover:text-orange-600 transition-colors duration-300"
          >
            <AiFillGithub size={40} />
          </a>
          <a
            href="https://www.linkedin.com/in/avinash-singh-59645b237/"
            target="_blank"
            className="text-white hover:text-orange-400 transition-colors duration-300"
          >
            <AiFillLinkedin size={40} />
          </a>
          <a href="https://dribbble.com/avinashsinghdes" target="_blank" className="text-white hover:text-orange-400 transition-colors duration-300 mx-1 px-1">
          <FaDribbble  size={40} />
          </a>
          <a href="https://www.behance.net/avinashsingh176" target="_blank" className="text-white hover:text-orange-400 transition-colors duration-300 mx-1 px-1">
          <FaBehance size={40}/>
          </a>
        </div>
        {/* Scoial Media Section End */}

        <div className="my-8 py-4">
          <a
            href="/src/assets/images/Resume/Resume.docx"
            className="px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white"
            download="Resume.docx"
          >
            Download CV
          </a>

          <a
            href="#contact"
            className="px-6 py-3 w-full rounded-xl mr-4 border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
