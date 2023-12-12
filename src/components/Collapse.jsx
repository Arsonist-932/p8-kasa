// Collapse.js
import React, { useState } from "react";
import Arrow from "../assets/images/arrow_collapse.png";

export default function Collapse({ title, text }) {
  const [collapse, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!collapse);
  };

  return (
    <div className="collapse">
      <div
        className={`collapse-title ${collapse ? "open" : ""}`}
        onClick={toggleCollapse}
      >
        {title}
        <img
          className={`arrow-icon ${collapse ? "open" : ""}`}
          src={Arrow}
          alt="Arrow"
        />
      </div>
      {collapse && (
        <div className="collapse-desc">
          <p>{text}</p>
        </div>
      )}
    </div>
  );
}
