import React from "react";
import styled from "styled-components";

import img1 from "../../../img/clients/alter_sport.png";
import img2 from "../../../img/clients/cleaning_service.png";
import img3 from "../../../img/clients/creative_photo.png";
import img4 from "../../../img/clients/global_tv.png";

const ClientsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 80%;
  margin: 4rem auto;
  gap: 2.5rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;

    img {
      width: 50%;
    }
  }
`;

const Clients = () => {
  return (
    <>
      <ClientsWrapper>
        <img src={img1} alt="alter" />
        <img src={img2} alt="cleaning" />
        <img src={img3} alt="creative" />
        <img src={img4} alt="global" />
      </ClientsWrapper>
    </>
  );
};

export default Clients;
