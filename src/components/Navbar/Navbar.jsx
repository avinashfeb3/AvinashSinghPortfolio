import React, {useState}from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
    const handleNavItemClick = () => {
      setNav(false); // Close the menu when a menu item is clicked
    };
  

  return (
    <div className="bg-black text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center sticky top-0 z-50">
     <a href="/">
     <h1 className="text-3xl font-bold primary-color ml-5">Avinash Singh</h1>
     </a>
        <ul className="hidden md:flex">
          <li className="p-5">
            <a href="#about">About</a>
          </li>
          <li className="p-5">
            <a href="#resume">Resume</a>
          </li>
          <li className="p-5">
            <a href="#services">Services</a>
          </li>
          <li className="p-5">
            <a href="#skills">Skills</a>
          </li>
          <li className="p-5">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="p-5">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div onClick={handleNav} className="block md:hidden mr-6">
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        <div className={ nav ? "z-10 fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500" : "fixed left-[-100%]" } >
        <h1 className="text-3xl font-bold primary-color ml-6 mt-5 pt-5">Avinash Singh</h1>
          <ul className="p-8 text-2xl">
            <li className="p-2">
              <a href="#about" onClick={handleNavItemClick}>About</a>
            </li>
            <li className="p-2">
              <a href="#resume" onClick={handleNavItemClick}>Resume</a>
            </li>
            <li className="p-2">
              <a href="#services" onClick={handleNavItemClick}>Services</a>
            </li>
            <li className="p-2">
              <a href="#skills" onClick={handleNavItemClick}>Skills</a>
            </li>
            <li className="p-2">
              <a href="#portfolio" onClick={handleNavItemClick}>Portfolio</a>
            </li>
            <li className="p-2">
              <a href="#contact" onClick={handleNavItemClick}>Contact</a>
            </li>
          </ul>
        </div>
    </div> 
  )
}

export default Navbar