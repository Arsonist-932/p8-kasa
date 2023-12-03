// Collapse.js
import React, { useState } from "react";
import Arrow from "../assets/images/arrow_collapse.png";

export default function Collapse({ title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div
        className={`collapse-title ${isOpen ? "open" : ""}`}
        onClick={toggleCollapse}
      >
        {title}
        <img
          className={`arrow-icon ${isOpen ? "open" : ""}`}
          src={Arrow}
          alt="Arrow"
        />
      </div>
      {isOpen && (
        <div className="collapse-desc">
          <p>{text}</p>
        </div>
      )}
    </div>
  );
}
