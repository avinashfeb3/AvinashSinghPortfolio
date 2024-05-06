import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Skills.scss";
import HTML5 from '../../assets/images/skills/html5.png';
import CSS3 from '../../assets/images/skills/css3.png';
import JS from '../../assets/images/skills/js.png';
import Sass from '../../assets/images/skills/sass.png';
import BS from '../../assets/images/skills/bs.png';
import Tailwind from '../../assets/images/skills/tailwind.png';
import react from '../../assets/images/skills/react.png';
import Figma from '../../assets/images/skills/figma.png';
import PS from '../../assets/images/skills/ps.png';
import AI from '../../assets/images/skills/ai.png';
import Canva from '../../assets/images/skills/canva.png';
import Git from '../../assets/images/skills/git.png';
import GitHub from '../../assets/images/skills/github.png';
import NodeJS from '../../assets/images/skills/nodejs.png';
// import PHP from '../../assets/images/skills/php.png';
// import CodeIgniter from '../../assets/images/skills/codeigniter.png';
// import Laravel from '../../assets/images/skills/laravel.png';
// Import other images as needed


export const Skills = () => {

    // Skills Images
    const images = [
        { src: HTML5, alt: 'HTML5'},
        { src: CSS3, alt: 'CSS3' },
        { src: JS, alt: 'JS' },
        { src: BS, alt: 'BS' },
        { src: Sass,  alt: 'Sass' },
        { src: react, alt: 'react' },
        { src: Figma, alt: 'figma' },
        { src: PS, alt: 'ps' },
        { src: AI, alt: 'ai' },
        { src: Git, alt: 'git' },
        { src: GitHub, alt: 'github' },
        { src: Canva, alt: 'canva' },
        { src: Tailwind, alt: 'tailwind' },
        { src: NodeJS, alt: 'nodejs' },
        // { src: PHP, alt: 'php' },
        // { src: CodeIgniter, alt: 'CodeIgniter' },
        // { src: Laravel, alt: 'Laravel' },
    ];      
    // Carousel responsive configuration
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            removeArrowOnDeviceType: ['desktop'],
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4,
            removeArrowOnDeviceType: ['tablet'],
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3,
            removeArrowOnDeviceType: ['mobile'],
        },
    };
  return (
    <div
      className="bg-black text-gray-400 md:h-[170px] max-w-[1200px] mx-auto mt-24 pt-24 shadow-lg"
      id="skills"
    >
      <h2 className="text-4xl font-bold mb-4 primary-color text-left ml-5">
        My Tech Stack
      </h2>

      {/* Skills Image Section Start */}
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={2000}
        infinite={true}
        containerClass="carousel-container"
        itemClass="carousel-item"
        className=" my-4 py-4"
        arrowLeft={
            <button className="arrow left-arrow react-multiple-carousel__arrow">{/* Apply custom class here */}
              Left
            </button>
          }
          arrowRight={
            <button className="arrow right-arrow react-multiple-carousel__arrow">{/* Apply custom class here */}
              Right
            </button>
          }
      >
        {images.map((image, index) => (
          <img key={index} src={image.src} alt={image.alt}  className="w-[100px] h-[100px] mb-4 p-2"/>
        ))}
      </Carousel>
      {/* Skills Image Section End */}
    </div>
  );

};
export default Skills;
