import React from "react";

export const Footer = () => {
  return (
    <div className="max-w-[1200px] sm:h-[150px] p-12 flex flex-col sm:flex-row justify-between mx-auto">
      <span className="primary-color text-xl font-bold mb-3 sm:mb-0 text-center">
        Designed By <a href="#">Avinash Singh </a>
      </span>
      <p className="text-gray-500 text-center">
        Copyright &copy; {new Date().getFullYear()} . All Right Reserved
      </p>
    </div>
  );
};
export default Footer