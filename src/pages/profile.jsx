import React from "react";
import Nav from "../components/Navbar";
import ProfileContent from "../components/ProfileContent";
import Footer from "../components/Footer";

import "../styles/App.css";

export default function Profile() {
  return (
    <>
      <Nav />
      <main>
        <ProfileContent />
      </main>
      <Footer />
    </>
  );
}
