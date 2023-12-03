import React from "react";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import ImageBanner from "../assets/images/plage.png";
import "../styles/App.css";

export default function Home() {
  return (
    <>
      <main>
        <Banner image={ImageBanner} slogan="Chez vous, ailleurs et partout" />
        <Gallery />
      </main>
    </>
  );
}
