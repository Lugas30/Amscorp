import React from "react";
import AMSLogo from "../assets/ams-logo-color.svg";
import "../global.css";

const Loader = () => {
  return (
    <div className="loader-container">
      {/* Ganti dengan path gambar logo */}
      <img src={AMSLogo} alt="Loading..." className="loader-logo" />
    </div>
  );
};

export default Loader;
