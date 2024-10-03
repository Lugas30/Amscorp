import React from "react";
import { Link } from "react-router-dom";
import AMSLogo from "../assets/ams-logo-color.svg";

const Header = () => {
  return (
    <header className="w-full bg-clearfix py-6">
      <nav className="flex justify-between items-center px-14 mx-auto">
        {/* Menu Kiri */}
        <div className="flex space-x-12 body-text">
          <a href="#home" className="text-xs text-black hover:text-gray-300">
            ENG/IDN
          </a>
          <a href="#about" className="text-xs text-black hover:text-gray-300">
            GROUP
          </a>
          <a
            href="#services"
            className="text-xs text-black hover:text-gray-300"
          >
            BUSSINESS
          </a>
        </div>

        {/* Logo di Tengah */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <img src={AMSLogo} alt="AMS Logo" className="h-9" />
        </div>

        {/* Menu Kanan */}
        <div className="flex space-x-12 body-text">
          <a href="#blog" className="text-xs text-black hover:text-gray-300">
            CAREER
          </a>
          <a href="#contact" className="text-xs text-black hover:text-gray-300">
            STORE
          </a>
          <a href="#login" className="text-xs text-black hover:text-gray-300">
            CONTACT
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
