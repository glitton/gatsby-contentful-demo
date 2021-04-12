import React from "react";
import styled from "styled-components";
import bigFood from "../assets/images/big-food.jpg";
import { StaticImage } from "gatsby-plugin-image";

const Images = () => {
  return (
    <Wrapper>
      <img src={bigFood} alt="food" />
      <h2>Gatsby Image</h2>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  img {
    width: 200px;
  }
`;

export default Images;
