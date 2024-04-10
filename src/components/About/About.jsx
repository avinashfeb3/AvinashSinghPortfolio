import React from "react";
import AboutImg from "../../assets/images/about-img.jpeg";

export const About = () => {
  return (
    <div className="text-white max-w-[1200px] mx-auto my-12" id="about">
      <div className="my-10 md:grid md:grid-cols-2 sm:py-16">
        {/* Image */}
        <img
          className="mx-auto md:order-last rounded-full sm:rounded-[100px] md:rounded-3xl py-8 md:py-0"
          src={AboutImg}
          width={300}
          height={300}
        />

        {/* Text */}
        <div className="md:order-first mt-4 md:mt-0 text-left flex flex-col md:flex-row">
          <div className="my-10 mx-6">
            <h2 className="text-4xl font-bold mb-4 primary-color">About Me</h2>
            <p className="text-base lg:text-lg text-gray-400">
              Hi! I am Avinash Singh, a Frontend Developer & React JS Developer.
              Since I have been passionate about design and art. I grew up with
              the Internet and naturally took a path according to this passion.
              Web Development is a way for me to keep track of all my passions.
              I've completed Web Development from Sea Solution (Delhi). I've
              complete knowledge of Web Development and looking for a job in the
              same role.
            </p>
            <p className="text-base lg:text-lg text-gray-400 mt-3 mb-3 pt-2 pb-2">
            For me, Web Development isn't merely a profession; it's a medium through which I express my creativity and bring innovative ideas to life. Every line of code, every pixel meticulously placed, contributes to crafting immersive and engaging digital experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
