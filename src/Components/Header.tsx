import styled from "styled-components";
import { Link } from "react-router-dom";

import Bascket from "../assets/basket img.svg";
import Person from "../assets/personal img.png";
import Logo from "../assets/sneakers logo.svg";

function Header() {
  const data: string[] = ["Collections", "Men", "Women", "About", "Contact"];

  return (
    <Wrapper>
      <NavContainer>
        <img src={Logo} alt="logo" />
        <nav>
          {data.map((item) => {
            return <span key={item}>{item}</span>;
          })}
        </nav>
      </NavContainer>
      <IconsContainer>
        <BascketContainer>
          <img src={Bascket} alt="basket" />
          <span>1</span>
        </BascketContainer>
        <img src={Person} alt="person img" />
      </IconsContainer>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 34px;
  padding-bottom: 45px;
  border-bottom: 2px solid #e4e9f2;
`;
const NavContainer = styled.div`
  display: flex;
  nav {
    margin-left: 55px;
    display: flex;
    column-gap: 32px;
  }
`;
const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 34px;
  img {
    cursor: pointer;
  }
`;
const BascketContainer = styled.div`
  position: relative;
  span {
    position: absolute;
    bottom: 20px;
    left: 15px;
    padding: 5px 7px;
    border-radius: 50%;
    background: #ff7e1b;
    color: #fff;
    font-size: 10px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
