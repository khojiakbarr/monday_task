import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MenuSection from "../components/MenuSection";
import DownloandSection from "../components/DownloandSection";
import ReviewSection from "../components/ReviewSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <MenuSection />
      <DownloandSection />
      <ReviewSection />
      <Footer />
    </>
  );
};

export default Home;
