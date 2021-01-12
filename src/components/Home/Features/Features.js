import React from "react";
import styled from "styled-components";
import img1 from "../../../img/app_preview_2.png";
import { FiBox } from "react-icons/fi";

const FeatureWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 90%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const FeatureImg = styled.img`
  @media screen and (max-width: 768px) {
    width: 50%;
    border-radius: 35px;
    box-shadow: 0px 11px 20px -5px rgba(0, 0, 0, 0.3);
  }
`;

const FeatureContent = styled.div`
  display: flex;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
  }
`;

const FeatureTitle = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: capitalize;
  line-height: 1.7;
  h3 {
    font-size: 30px;
  }
  p {
    font-size: 20px;
  }
  @media screen and (max-width: 768px) {
  }
`;
const FeatureLogoContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;

  margin-right: 20px;
`;

const FeatureLogo = styled(FiBox)`
  height: 30px;
  width: 30px;
  background-color: #ffc107;
  border-radius: 50%;
  color: #fff;
`;

const Features = () => {
  return (
    <>
      <FeatureWrapper>
        <FeatureImg src={img1} alt="app mob" />
        {/* 1 */}
        <FeatureContent>
          <FeatureLogoContainer>
            <FeatureLogo />
          </FeatureLogoContainer>
          <FeatureTitle>
            <h3>powerful features</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
              deleniti aliquam accusamus ab expedita voluptates iusto ullam
              assumenda nam tenetur tempore nobis
            </p>
          </FeatureTitle>
        </FeatureContent>

        {/* 2 */}
        <FeatureContent>
          <FeatureLogoContainer>
            <FeatureLogo />
          </FeatureLogoContainer>
          <FeatureTitle>
            <h3>fully secured</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
              deleniti aliquam accusamus ab expedita voluptates iusto ullam
              assumenda nam tenetur tempore nobis
            </p>
          </FeatureTitle>
        </FeatureContent>

        {/* 3 */}
        <FeatureContent>
          <FeatureLogoContainer>
            <FeatureLogo />
          </FeatureLogoContainer>
          <FeatureTitle>
            <h3>easy monitoring</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
              deleniti aliquam accusamus ab expedita voluptates iusto ullam
              assumenda nam tenetur tempore nobis
            </p>
          </FeatureTitle>
        </FeatureContent>
      </FeatureWrapper>
    </>
  );
};

export default Features;
