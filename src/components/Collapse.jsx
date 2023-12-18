// Collapse.js
import React, { useState } from "react";
import Arrow from "../assets/images/arrow_collapse.png";

export default function Collapse({ title, text }) {
  const [IsCollapseOpen, setIsCollapseOpen] = useState(false);

  const toggleCollapse = () => {
    setIsCollapseOpen(!IsCollapseOpen);
  };

  return (
    <div className="collapse">
      <div
        className={`collapse-title ${IsCollapseOpen ? "open" : ""}`}
        onClick={toggleCollapse}
      >
        {title}
        <img
          className={`arrow-icon ${IsCollapseOpen ? "open" : ""}`}
          src={Arrow}
          alt="Arrow"
        />
      </div>
      {IsCollapseOpen && (
        <div className="collapse-desc">
          <p>{text}</p>
        </div>
      )}
    </div>
  );
}
