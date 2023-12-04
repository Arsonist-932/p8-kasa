// Slider.js
import React, { useState } from "react";
import ArrowLeft from "../assets/images/arrow_left.png";
import ArrowRight from "../assets/images/arrow_right.png";

export default function Slider({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % data.pictures.length;
    setCurrentIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex =
      (currentIndex - 1 + data.pictures.length) % data.pictures.length;
    setCurrentIndex(newIndex);
  };

  return (
    <figure>
      <img src={data.pictures[currentIndex]} alt="" />

      <div className="Arrow_Left" onClick={prevSlide}>
        <img src={ArrowLeft} alt="Previous" />
      </div>
      <div className="Arrow-Right" onClick={nextSlide}>
        <img src={ArrowRight} alt="Next" />
      </div>
    </figure>
  );
}