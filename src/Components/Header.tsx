import styled from "styled-components";

import Bascket from "../assets/basket img.svg";
import Person from "../assets/personal img.png";
import Logo from "../assets/sneakers logo.svg";

function Header() {
  return (
    <Wrapper>
      <img src={Logo} alt="logo" />
      <nav>
        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div>
        <img src={Bascket} alt="basket" />
        <img src={Person} alt="person img" />
      </div>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
