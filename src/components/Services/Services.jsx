import React from "react";
import Service1 from "../../assets/images/services/1.svg";
import Service2 from "../../assets/images/services/2.svg";
import Service3 from "../../assets/images/services/3.svg";
import Service4 from "../../assets/images/services/4.svg";
import Service5 from "../../assets/images/services/5.svg";
import Service6 from "../../assets/images/services/6.svg";
export const Services = () => {
  return (
    <div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 pt-24"
      id="services"
    >
      <h2 className="text-4xl font-bold mb-5 pb-5 primary-color">Services</h2>
      <div className="d-sm-flex align-items-center justify-content-between">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-3 gap-6 justify-center mt-4 mb-4 pt-3 pb-3">
          <div className="bg-gray-900 rounded-lg overflow-hidden shadow-md transition duration-300 transform hover:scale-105 hover:bg-pink-600">
            <img
              src={Service1}
              className="w-[70px] h-[70px] mx-auto my-auto mt-5 mb-3 pt-4 pb-3 rounded-3xl bg-orange-400"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold  text-white mb-2 text-center">
                Website Development
              </h3>
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg overflow-hidden shadow-md transition duration-300 transform hover:scale-105 hover:bg-pink-600">
            <img
              src={Service2}
              className="w-[70px] h-[70px] mx-auto my-auto mt-5 mb-3 pt-4 pb-3 rounded-3xl bg-orange-400"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2 text-center">
                Web Designer
              </h3>
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg overflow-hidden shadow-md transition duration-300 transform hover:scale-105 hover:bg-pink-600">
            <img
              src={Service3}
              className="w-[70px] h-[70px] mx-auto my-auto mt-5 mb-3 pt-4 pb-3 rounded-3xl bg-orange-400"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-white text-center">
                Frontend Developer
              </h3>
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg overflow-hidden shadow-md transition duration-300 transform hover:scale-105 hover:bg-pink-600">
            <img
              src={Service4}
              className="w-[70px] h-[70px] mx-auto my-auto mt-5 mb-3 pt-4 pb-3 rounded-3xl bg-orange-400"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-white text-center">
                UI & UX Design
              </h3>
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg overflow-hidden shadow-md transition duration-300 transform hover:scale-105 hover:bg-pink-600">
            <img
              src={Service5}
              className="w-[70px] h-[70px] mx-auto my-auto mt-5 mb-3 pt-4 pb-3 rounded-3xl bg-orange-400 text-center"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-white text-center">
                Mobile Responsive Website
              </h3>
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg overflow-hidden shadow-md transition duration-300 transform hover:scale-105 hover:bg-pink-600">
            <img
              src={Service6}
              className="w-[70px] h-[70px] mx-auto my-auto mt-5 mb-3 pt-4 pb-3 rounded-3xl bg-orange-400 text-center"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2 text-center">
                Website Testing
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
