import React from "react";

export default function Banner(props) {
  const { image, slogan } = props;

  return (
    <div className="banner">
      <div className="banner-content">
        {image && <img src={image} alt="" />}
        <p>{slogan}</p>
      </div>
    </div>
  );
}
