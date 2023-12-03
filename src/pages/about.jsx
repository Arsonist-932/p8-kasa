import React from "react";
import Nav from "../components/Navbar";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";
import ImageBanner from "../assets/images/mountains.png";
import data from "../data/collapse.json";
import "../styles/App.css";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Banner image={ImageBanner} slogan="" />
        <section className="collapse-list">
          {data.map((collapse) => (
            <Collapse
              key={collapse.title}
              title={collapse.title}
              text={collapse.text}
            />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
