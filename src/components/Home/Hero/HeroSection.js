import React from "react";
import styled from "styled-components";
import HeroImg from "../../../img/bg_hero_1.svg";

const HeroWrapper = styled.div`
  height: 92vh;
  position: relative;
`;
const HeroImage = styled.div`
  background-image: url(${HeroImg});
  background-position: center center;
  background-size: cover;
  height: 92vh;
`;
const HeroContent = styled.div`
  position: absolute;
  top: 30%;
  margin: 10px;
  h1 {
    font-size: 3.5rem;
    line-height: 1.2;
    margin-bottom: 25px;
  }

  h3 {
    font-size: 15px;
  }

  button {
    all: unset;
    padding: 10px 20px;
    color: #ffffff;
    background-color: #3d58f3;
    border-radius: 25px;
    text-transform: capitalize;
    cursor: pointer;
    margin-top: 15px;
  }
  p {
    width: 65%;
  }
`;

const HeroSection = () => {
  return (
    <>
      <HeroWrapper>
        <HeroImage />
        <HeroContent>
          <h3> #2 Editor Choice App of 2020</h3>
          <h1> Manage your Finance easier</h1>
          <p>
            Mobster has features to view and manage our finances, such as
            transfer, and statistics.
          </p>
          <button> get app now</button>
        </HeroContent>
      </HeroWrapper>
    </>
  );
};

export default HeroSection;
