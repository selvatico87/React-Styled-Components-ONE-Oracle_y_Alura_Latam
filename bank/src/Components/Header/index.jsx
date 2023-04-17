import React from "react";
import logo from "../../assets/images/logo.svg";
import styled from "styled-components";
import { colorPrimario } from "../Ui/Variables";


const StyledHeader = styled.nav`
  background-color: ${colorPrimario};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`
const Logo = styled.img`
  height: 50px;
  width: 50px;
`

const Header = () => {
  return (
    <StyledHeader >
      <Logo src={logo} alt="Logo Smart Bank" />
      <div>
        <a className="btn-secundario" href="https://google.com">
          Ayuda
        </a>
        <a className="btn-primario" href="https://google.com">
          Salir
        </a>
      </div>
    </StyledHeader>
  );
};

export default Header;
