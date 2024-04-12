import React from "react";

// Education Card Component
const EducationCard = () => {
  return (
    <div className="bg-gray-900 rounded-lg p-6 mb-6">
      <div className="title position-relative">
        <h2 className="text-2xl font-bold primary-color">Education</h2>
      </div>
      <ul className="list-unstyle mt-3 pt-3">
        <li>
          <div className="d-sm-flex align-items-center justify-content-between">
            <div className="mt-4 flex flex-col sm:flex-row">
              <div className="sm:mr-4">
                <h4 className="text-white h4 fw-bold">MCA</h4>
                <h5 className="text-gray-400 font-semibold">IGNOU</h5>
              </div>
              <div className="year mt-4 sm:mt-0 sm:ml-auto rounded-full border-2 border-pink-600 w-30">
                <span className="text-gray-400 font-semibold primary-color mx-10 mb-3 mt-2 text-center">2021</span>
              </div>
            </div>
          </div>
        </li>
        <li className="mt-3 pt-3 mb-3 pb-3">
          <div className="d-sm-flex align-items-center justify-content-between">
            <div className="mt-4 flex flex-col sm:flex-row">
              <div className="sm:mr-4">
                <h4 className="text-white h4 fw-bold">BCA</h4>
                <h5 className="text-gray-400 font-semibold">CCS University</h5>
              </div>
              <div className="year mt-4 sm:mt-0 sm:ml-auto rounded-full border-2 border-pink-600 w-30">
                <span className="text-gray-400 font-semibold primary-color mx-10 mb-3 mt-2 text-center">2016</span>
              </div>
            </div>
          </div>
        </li>
        <li className="mt-3 pt-3 mb-3 pb-3">
          <div className="d-sm-flex align-items-center justify-content-between">
            <div className="mt-4 flex flex-col sm:flex-row">
              <div className="sm:mr-4">
                <h4 className="text-white h4 fw-bold">Senior Secondary</h4>
                <h5 className="text-gray-400 font-semibold">CBSE Board</h5>
              </div>
              <div className="year mt-4 sm:mt-0 sm:ml-auto rounded-full border-2 border-pink-600 w-30">
                <span className="text-gray-400 font-semibold primary-color mx-10 mb-3 mt-2 text-center">2013</span>
              </div>
            </div>
          </div>
        </li>
        <li className="mt-3 pt-3 mb-3 pb-3">
          <div className="d-sm-flex align-items-center justify-content-between">
            <div className="mt-4 flex flex-col sm:flex-row">
              <div className="sm:mr-4">
                <h4 className="text-white h4 fw-bold">Secondary</h4>
                <h5 className="text-gray-400 font-semibold">CBSE Board</h5>
              </div>
              <div className="year mt-4 sm:mt-0 sm:ml-auto rounded-full border-2 border-pink-600 w-30">
                <span className="text-gray-400 font-semibold primary-color mx-10 mb-3 mt-2 text-center">2011</span>
              </div>
            </div>
          </div>
        </li>
        {/* Add more education items if needed */}
      </ul>
    </div>
  );
};

// Experience Card Component
const ExperienceCard = () => {
  return (
    <div className="bg-gray-900 rounded-lg p-6 mb-6">
      <div className="title position-relative">
        <h2 className="text-3xl font-bold  primary-color">Experience</h2>
      </div>
      <ul className="list-unstyled mt-3 pt-3">  
        <li>
          <div className="d-sm-flex align-items-center justify-content-between">
            <div className="mt-4 flex flex-col sm:flex-row">
              <div className="sm:mr-4">
                <h4 className="text-white font-bold">
                Software Programmer Intern
                </h4>
                <h5 className="text-gray-400 font-semibold">Samarth EGov</h5>
              </div>
              <div className="year mt-4 sm:mt-0 sm:ml-auto rounded-full border-2 border-pink-600">
                <span className="text-gray-400 font-semibold mx-[20px] my-[10px] primary-color">Feb-2022 to Jul-2022</span>
              </div>
            </div>
            <p className=" text-gray-400 font-normal mt-2 pt-2 mb-2 pb-2">
          Here I have worked for 6 months as a Software Programmer Intern. Basically, this is a Ed-Tech, here my job is to enhance the look, functionality of a website. Maintaining and fixing problems of the existing website.
              </p>
          </div>
        </li>
        <li>
          <div className="d-sm-flex align-items-center justify-content-between">
            <div className="mt-4 flex flex-col sm:flex-row">
              <div className="sm:mr-4">
                <h4 className="  text-white font-bold text-base">
                  Process Associate
                </h4>
                <h5 className="text-gray-400 font-semibold">Sopra Steria</h5>
              </div>
              <div className="year mt-4 sm:mt-0 sm:ml-auto rounded-full border-2 border-pink-600">
                <span className="text-gray-400 font-semibold mx-[20px] my-[10px] primary-color">Jul-2018 to Nov-2020</span>
              </div>
            </div>
            <p className=" text-gray-400 font-normal mt-2 pt-2 mb-2 pb-2">
            Here I have worked for 2.4 Years as a Process Associate. Basically my worked is to provide the utility services to the client.
              </p>
          </div>
        </li>
        <li>
          <div className="d-sm-flex align-items-center justify-content-between">
            <div className="mt-4 flex flex-col sm:flex-row">
              <div className="sm:mr-4">
                <h4 className="text-white h4 font-bold">
                  Operation Representative
                </h4>
                <h5 className="text-gray-400 font-semibold">Concentrix</h5>
              </div>
              <div className="year mt-4 sm:mt-0 sm:ml-auto rounded-full border-2 border-pink-600">
                <span className="text-gray-400 font-semibold mx-[20px] my-[10px] primary-color">Feb-2017 to Feb-2018</span>
              </div>
            </div>
            <p className=" text-gray-400 font-normal mt-2 pt-2 mb-2 pb-2">
              Here I have worked for 11 months as a Operation Representative. Basically my worked is to provide the telecom related services to the customers.
              </p>
          </div>
        </li>
        {/* Add more experience items if needed */}
      </ul>
    </div>
  );
};

// Main component containing both education and experience cards
const Resume = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-5 pt-24 pb-5" id="resume">
        <h2 className='text-4xl font-bold mb-5 pb-5 primary-color'>Resume</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="transition-transform transform-gpu hover:scale-105">
          {/* Education Card */}
          <EducationCard />
        </div>
        <div className="transition-transform transform-gpu hover:scale-105">
          {/* Experience Card */}
          <ExperienceCard />
        </div>
      </div>
    </div>
  );
};
export default Resume;
