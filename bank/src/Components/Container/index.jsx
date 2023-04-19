import React from "react";
import styled from "styled-components";
import Title from "../Title";
import Account from "../Account";
import Lista from "../List/List";

const StylesContainer= styled.div`
  background-color: ${({theme})=>theme.body};
  min-height: 90vh;
  padding: 0px 15vw;
`
const StyledContent=styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 800px){
    flex-direction: column;
  };
`

const Container = () => {
  return (
    <StylesContainer>
      <Title>Smart Bank</Title>
      <StyledContent>
        <Account />
        <Lista/>
      </StyledContent>
    </StylesContainer>
  );
};

export default Container;
