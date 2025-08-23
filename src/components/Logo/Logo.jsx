import "./logo.css";
import logo from "../../assets/logo.svg";
import React, { useState } from "react";

function Logo() {
  const [bgIndex, setBgIndex] = useState(0);
  const handleSwitch = () => setBgIndex((prev) => (prev + 1) % 3);
  return (
    <div className={`logo__container gradient-bg-${bgIndex}`}>
      <img src={logo} alt="Diverlee Logo" className="logo" />
      <button className="logo__switch-btn" onClick={handleSwitch}>
        Switch Background
      </button>
    </div>
  );
}

export default Logo;
