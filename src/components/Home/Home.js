import React from "react";
import Nav from "./Nav/Nav";
import HeroSection from "./Hero/HeroSection";
import Clients from "./Clients/Clients";
import Features from "./Features/Features";
const Home = () => {
  return (
    <>
      <Nav />
      <HeroSection />
      <Clients />
      <Features />
    </>
  );
};

export default Home;
