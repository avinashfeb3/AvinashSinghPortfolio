import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Skills.scss";

export const Skills = () => {

    // Skills Images
    const images = [
        { src: 'src/assets/images/skills/html5.png', alt: 'HTML5'},
        { src: 'src/assets/images/skills/css3.png', alt: 'CSS3' },
        { src: 'src/assets/images/skills/js.png', alt: 'JS' },
        { src: 'src/assets/images/skills/bs.png', alt: 'BS' },
        { src: 'src/assets/images/skills/sass.png', alt: 'Sass' },
        { src: 'src/assets/images/skills/react.png', alt: 'react' },
        { src: 'src/assets/images/skills/figma.png', alt: 'figma' },
        { src: 'src/assets/images/skills/ps.png', alt: 'ps' },
        { src: 'src/assets/images/skills/ai.png', alt: 'ai' },
        { src: 'src/assets/images/skills/git.png', alt: 'git' },
        { src: 'src/assets/images/skills/github.png', alt: 'github' },
        { src: 'src/assets/images/skills/canva.png', alt: 'canva' },
        { src: 'src/assets/images/skills/tailwind.png', alt: 'tailwind' },
        { src: 'src/assets/images/skills/nodejs.png', alt: 'nodejs' },
        // Add more images as needed
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
