import React from "react";
import Footer from "../components/Footer";
import Error from "../components/Error404";
import Nav from "../components/Navbar";
import "../styles/App.css";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Error />
      </main>
      <Footer />
    </>
  );
}
