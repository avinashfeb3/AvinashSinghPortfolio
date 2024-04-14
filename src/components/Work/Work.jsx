import React from "react";
import P1 from "../../assets/images/portfolio/P1.png";
import P2 from "../../assets/images/portfolio/P2.png";
import P3 from "../../assets/images/portfolio/P3.png";
import P4 from "../../assets/images/portfolio/P4.png";
import P5 from "../../assets/images/portfolio/P5.png";
import P6 from "../../assets/images/portfolio/P6.png";
import P7 from "../../assets/images/portfolio/P7.png";
import P8 from "../../assets/images/portfolio/P8.png";
import P9 from "../../assets/images/portfolio/P9.png";

export const Work = () => {
  return (
    <div className="max-w-[1200px] mx-auto p-5 my-28 py-28" id="portfolio">
      <div className="pb-8">
        <p className="text-4xl mb-3 font-bold primary-color">Project Works</p>
        <p className="text-gray-400">Check out some of my recent work</p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="transform tranisition-transform duration-300 hover:scale-105 overflow-hidden shaodw-lg shaodw-[#040c16] group container rounded-md flex justify-center items-center h-[300px] bg-cover relative">
          <img src={P1} alt="Project 1"/>
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider text-center mx-auto mt-3">
                Online Travel Agency
            </span>
            <span className="text-xl font-bold text-white tracking-wider text-center mx-auto mt-3">
                (HTML5,CSS3,JavaScript & Bootstrap5)
            </span>
            <div className="pt-8 text-center">
              <a href="https://online-travel-agency.netlify.app/" target="_blank">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Visit Site
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="transform tranisition-transform duration-300 hover:scale-105 overflow-hidden shaodw-lg shaodw-[#040c16] group container rounded-md flex justify-center items-center h-[300px] bg-cover relative">
          <img src={P2} alt="Project 2" className="h-[300px]"/>
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider text-center mx-auto mt-3">
                Online Blood Bank Management System
            </span>
            <span className="text-xl font-bold text-white tracking-wider text-center mx-auto mt-3">
                (HTML5,CSS3,JavaScript & Bootstrap3)
            </span>
            <div className="pt-8 text-center">
              <a href="https://bloodsavershub.000webhostapp.com/" target="_blank">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Visit Site
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="transform tranisition-transform duration-300 hover:scale-105 overflow-hidden shaodw-lg shaodw-[#040c16] group container rounded-md flex justify-center items-center h-[300px] bg-cover relative">
          <img src={P3} alt="Project 3" className="h-[300px]"/>
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider text-center mx-auto mt-3">
                Online Appointment Management System
            </span>
            <span className="text-xl font-bold text-white tracking-wider text-center mx-auto mt-3">
                (HTML5,CSS3,JavaScript & Bootstrap4)
            </span>
            <div className="pt-8 text-center">
              <a href="https://onlineappointmentmanag.000webhostapp.com/" target="_blank">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Visit Site
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="transform tranisition-transform duration-300 hover:scale-105 overflow-hidden shaodw-lg shaodw-[#040c16] group container rounded-md flex justify-center items-center h-[300px] bg-cover relative">
          <img src={P4} alt="Project 4" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider text-center mx-auto mt-3">
                Online Business Proposal<br/>
                (Vue JS3, Vuex Router, Bootstrap5)
            </span>
            <div className="pt-8 text-center">
              <a href="https://business-proposal-project.netlify.app/" target="_blank">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Visit Site
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="transform tranisition-transform duration-300 hover:scale-105 overflow-hidden shaodw-lg shaodw-[#040c16] group container rounded-md flex justify-center items-center h-[300px] bg-cover relative my-10 py-10">
          <img src={P5} alt="Project 5" className="h-[300px]"/>
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider text-center mx-auto mt-3">
                Login Form <br/>
                (Vue JS3, Vuex Router, Bootstrap5)
            </span>
            <div className="pt-8 text-center">
              <a href="https://vuebootstrap5-login.netlify.app/" target="_blank">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Visit Site
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="transform tranisition-transform duration-300 hover:scale-105 overflow-hidden shaodw-lg shaodw-[#040c16] group container rounded-md flex justify-center items-center h-[300px] bg-cover relative my-10 py-10">
          <img src={P6} alt="Project 6" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-xl font-bold text-white tracking-wider text-center mx-auto mt-3">
              Online Beauty Spa
              <br />
              (HTML5, CSS3, JavaScript, Bootstrap4)
            </span>
            <div className="pt-8 text-center">
              <a href="https://beauty-spa-women.netlify.app/" target="_blank">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Visit Site
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="transform tranisition-transform duration-300 hover:scale-105 overflow-hidden shaodw-lg shaodw-[#040c16] group container rounded-md flex justify-center items-center h-[300px] bg-cover relative my-10 py-10">
          <img src={P7} alt="Project 7" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider text-center mx-auto mt-3">
              LRS Services
              <br />
              (React Js, Next JS, Node JS, Cloudinary)
            </span>
            <div className="pt-8 text-center">
              <a href="https://www.lrsservices.in/" target="_blank">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Visit Site
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="transform tranisition-transform duration-300 hover:scale-105 overflow-hidden shaodw-lg shaodw-[#040c16] group container rounded-md flex justify-center items-center h-[300px] bg-cover relative my-10 py-10">
          <img src={P8} alt="Project 8" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider text-center mx-auto mt-3">
              Borcelle Catering
              <br />
              (React Js, Node JS, React Bootstrap)
            </span>
            <div className="pt-8 text-center">
              <a href="https://borcellecatering.vercel.app/" target="_blank">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Visit Site
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="transform tranisition-transform duration-300 hover:scale-105 overflow-hidden shaodw-lg shaodw-[#040c16] group container rounded-md flex justify-center items-center h-[300px] bg-cover relative my-10 py-10">
          <img src={P9} alt="Project 9" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider text-center mx-auto mt-3">
                Online Business
              <br />
              (React Js CSS)
            </span>
            <div className="pt-8 text-center">
              <a href="https://onlinebusiness.vercel.app/" target="_blank">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Visit Site
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Work