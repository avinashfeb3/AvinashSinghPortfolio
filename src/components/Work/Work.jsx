import React, { useState } from "react";
import P1 from "../../assets/images/portfolio/P1.png";
import P2 from "../../assets/images/portfolio/P2.png";
import P3 from "../../assets/images/portfolio/P3.png";
import P4 from "../../assets/images/portfolio/P4.png";
import P5 from "../../assets/images/portfolio/P5.png";
import P6 from "../../assets/images/portfolio/P6.png";
import P7 from "../../assets/images/portfolio/P7.png";
import P8 from "../../assets/images/portfolio/P8.png";
import P9 from "../../assets/images/portfolio/P9.png";
import P10 from "../../assets/images/portfolio/P10.png";
import U1 from "../../assets/images/uiux/U1.png";
import U2 from "../../assets/images/uiux/U2.png";
import U3 from "../../assets/images/uiux/U3.png";
import U4 from "../../assets/images/uiux/U4.png";
import U5 from "../../assets/images/uiux/U5.png";
import U6 from "../../assets/images/uiux/U6.png";
import U7 from "../../assets/images/uiux/U7.png";
import { FaArrowRight } from "react-icons/fa";

export const Work = () => {
  const [activeTab, setActiveTab] = useState("All");

  // const tabs = ["All", "UI/UX Design", "PHP", "React JS", "Vue JS"];
  const tabs = ["All", "UI/UX Design", "React JS"];

  const projects = [
    // { id: 1, title: "Online Travel Agency", category: ["PHP"], image: P1, link: "https://online-travel-agency.netlify.app/" },
    // { id: 2, title: "Online Blood Bank Management System", category: ["PHP"], image: P2, link: "https://bloodsavershub.000webhostapp.com/" },
    // { id: 3, title: "Online Appointment Management System", category: ["PHP"], image: P3, link: "https://onlineappointmentmanag.000webhostapp.com/" },
    // { id: 4, title: "Online Business Proposal", category: ["Vue JS"], image: P4, link: "https://business-proposal-project.netlify.app/" },
    // { id: 5, title: "Login Form", category: ["Vue JS"], image: P5, link: "https://vuebootstrap5-login.netlify.app/" },
    {
      id: 6,
      title: "Online Beauty Spa",
      category: ["All"],
      image: P6,
      link: "https://beauty-spa-women.netlify.app/",
    },
    {
      id: 7,
      title: "LRS Services",
      category: ["UI/UX Design", "React JS"],
      image: P7,
      link: "https://www.lrsservices.in/",
    },
    {
      id: 8,
      title: "Borcelle Catering",
      category: ["React JS"],
      image: P8,
      link: "https://borcellecatering.vercel.app/",
    },
    {
      id: 9,
      title: "Online Business",
      category: ["React JS"],
      image: P9,
      link: "https://onlinebusiness.vercel.app/",
    },
    {
      id: 10,
      title: "Online Grocery Store",
      category: ["React JS"],
      image: P10,
      link: "https://onlinegrocerystoreapp.vercel.app",
    },
    {
      id: 11,
      title: "Swachh Bharat Mission",
      category: ["UI/UX Design"],
      image: U1,
      link: "https://www.behance.net/gallery/221026245/Swachh-Bharat-Mission-Website-Wireframe",
    },
    {
      id: 12,
      title: "Internship Portal Login Design",
      category: ["UI/UX Design"],
      image: U2,
      link: "https://www.behance.net/gallery/221026585/Internship-Portal-Login-Page-Form-Design",
    },
    {
      id: 13,
      title: "Internship Portal Login Design",
      category: ["UI/UX Design"],
      image: U3,
      link: "https://www.behance.net/gallery/221026585/Internship-Portal-Login-Page-Form-Design",
    },
    {
      id: 14,
      title: "Internship Portal Login Design",
      category: ["UI/UX Design"],
      image: U4,
      link: "https://www.behance.net/gallery/221026585/Internship-Portal-Login-Page-Form-Design",
    },
    {
      id: 15,
      title: "Internship Portal Login Design",
      category: ["UI/UX Design"],
      image: U5,
      link: "https://www.behance.net/gallery/221026585/Internship-Portal-Login-Page-Form-Design",
    },
    {
      id: 16,
      title: "College Website Banner",
      category: ["UI/UX Design"],
      image: U6,
      link: "https://www.behance.net/gallery/228880923/College-Website-Banner",
    },
    {
      id: 17,
      title: "Beyond Marketing Webinar Banner",
      category: ["UI/UX Design"],
      image: U7,
      link: "https://www.behance.net/gallery/228881959/Beyond-Marketing-Webinar-Banner?share=1",
    },
  ];

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((project) => project.category.includes(activeTab));

  return (
    <div className="max-w-[1200px] mx-auto p-5 my-28 py-28" id="portfolio">
      <div className="pb-8">
        <p className="text-4xl mb-3 font-bold primary-color">Project Works</p>
        <p className="text-gray-400">Check out some of my recent work</p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex justify-center space-x-2 sm:space-x-4 mb-8 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-2 sm:px-4 sm:py-2 rounded-md text-sm sm:text-base ${
              activeTab === tab
                ? "text-white transition duration-300 transform hover:scale-105 bg-pink-600"
                : "text-white transition duration-300 transform hover:scale-105 hover:bg-pink-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg group container rounded-md flex justify-center items-center h-[200px] sm:h-[300px] bg-cover relative"
          >
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-full"
            />
            <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
              <span className="text-sm sm:text-2xl font-bold text-white tracking-wider text-center mx-auto mt-3">
                {project.title}
              </span>
              <div className="pt-8 text-center flex justify-between">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-2 sm:px-4 sm:py-3 m-2 bg-pink-600 text-white font-bold text-xs sm:text-lg flex items-center justify-center">
                    Visit Site <FaArrowRight className="ml-2" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
