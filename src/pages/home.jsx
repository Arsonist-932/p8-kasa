import React from "react";
import Nav from "../components/Navbar";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import ImageBanner from "../assets/images/plage.png";
import "../styles/App.css";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Banner image={ImageBanner} slogan="Chez vous, ailleurs et partout" />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
