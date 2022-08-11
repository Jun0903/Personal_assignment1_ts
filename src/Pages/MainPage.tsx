import React from "react";
import Main from "../Components/Main";
import styled from "styled-components";

export const MainPage = () => {
  return (
    <MainSection>
      <ProductSection>
        <Main />
      </ProductSection>
    </MainSection>
  );
};

const MainSection = styled.section`
  display: flex;
  flex-direction: column;
`;

const ProductSection = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
