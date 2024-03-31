import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HTML5 from '../../assets/images/skills/html5.png';
import CSS3 from '../../assets/images/skills/css3.png';
import JS from '../../assets/images/skills/js.png';
import BS from '../../assets/images/skills/bs.png';
import react from '../../assets/images/skills/react.png';
import Figma from '../../assets/images/skills/figma.png';
import PS from '../../assets/images/skills/ps.png';
import AI from '../../assets/images/skills/ai.png';
import Sass from '../../assets/images/skills/sass.png';
import Git from '../../assets/images/skills/git.png';
import GitHub from '../../assets/images/skills/github.png';
import Canva from '../../assets/images/skills/canva.png';
import Tailwind from '../../assets/images/skills/tailwind.png';
import Node from '../../assets/images/skills/nodejs.png';

export const Skills = () => {
    const settings = {
        dots: false, // Set dots to false to remove the dots
        infinite: true,
        speed: 300, // Adjust the speed (in milliseconds) to increase or decrease the speed of the carousel
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            }
        ]
    };    

    return (
        <div className='bg-black text-gray-400 md:h-[170px] max-w-[1200px] mx-auto mt-20 pt-20 shadow-lg' id='skills'>
           <h2 className='text-4xl font-bold mb-4 primary-color text-left ml-5'>My Tech Stack</h2>

            {/* Skills Image Section Start */}
            <Slider {...settings}>
                <div className='flex flex-col item-center mt-3 pt-3 mb-3 pb-3 ml-8'>
                    <img src={HTML5} alt='HTML5 Image' className='w-[70px] h-[70px]'/>
                </div>
                <div className='flex flex-col item-center  mt-3 pt-3 mb-3 pb-3 ml-8'>
                    <img src={CSS3} alt='CSS3 Image' className='w-[70px] h-[70px]'/>
                </div>
                <div className='flex flex-col item-center  mt-3 pt-3 mb-3 pb-3 ml-8'>
                    <img src={JS} alt='JavaScript Image' className='w-[70px] h-[70px]'/>
                </div>
                <div className='flex flex-col item-center  mt-3 pt-3 mb-3 pb-3 ml-8'>
                    <img src={BS} alt='Bootstrap Image' className='w-[70px] h-[70px]'/>
                </div>
                <div className='flex flex-col item-center  mt-3 pt-3 mb-3 pb-3 ml-8'>
                    <img src={react} alt='React Image' className='w-[70px] h-[70px]'/>
                </div>
                <div className='flex flex-col item-center  mt-3 pt-3 mb-3 pb-3 ml-8'>
                    <img src={Figma} alt='Figma Image' className='w-[70px] h-[70px]'/>
                </div>
                <div className='flex flex-col item-center  mt-3 pt-3 mb-3 pb-3 ml-8'>
                    <img src={PS} alt='PS Image' className='w-[70px] h-[70px]'/>
                </div>
                <div className='flex flex-col item-center  mt-3 pt-3 mb-3 pb-3 ml-8'>
                    <img src={AI} alt='AI Image' className='w-[70px] h-[70px]'/>
                </div>
                <div className='flex flex-col item-center  mt-3 pt-3 mb-3 pb-3 ml-8'>
                    <img src={Sass} alt='Sass Image' className='w-[70px] h-[70px]'/>
                </div>
                <div className='flex flex-col item-center  mt-3 pt-3 mb-3 pb-3 ml-3'>
                    <img src={Git} alt='Git Image' className='w-[70px] h-[70px]'/>
                </div>
                <div className='flex flex-col item-center  mt-3 pt-3 mb-3 pb-3 ml-3'>
                    <img src={GitHub} alt='GitHub Image' className='w-[70px] h-[70px]'/>
                </div>
                <div className='flex flex-col item-center  mt-3 pt-3 mb-3 pb-3 ml-8'>
                    <img src={Tailwind} alt='Tailwind Image' className='w-[70px] h-[70px]'/>
                </div>
                <div className='flex flex-col item-center  mt-3 pt-3 mb-3 pb-3 ml-8'>
                    <img src={Canva} alt='Canva Image' className='w-[70px] h-[70px]'/>
                </div>
                <div className='flex flex-col item-center  mt-3 pt-3 mb-3 pb-3 ml-8'>
                    <img src={Node} alt='Node JS Image' className='w-[70px] h-[70px]'/>
                </div>
            </Slider>
            {/* Skills Image Section End */}
        </div>
    )
}
export default Skills
