import styled from "styled-components";

//img
import Bascket from "../assets/basket img.svg";
import Person from "../assets/personal img.png";
import Logo from "../assets/sneakers logo.svg";
import Sneakers from "../assets/sneakers img for cart.png";
import DeleteImg from "../assets/delete img.svg";

interface HeaderProps {
  AddedProduct: number | undefined;
}
const Header: React.FC<HeaderProps> = ({ AddedProduct }) => {
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
          <span>{AddedProduct}</span>
        </BascketContainer>
        <PersonImgContainer>
          <img src={Person} alt="person img" />
        </PersonImgContainer>
      </IconsContainer>
      <CartWrapper>
        <h6>Cart</h6>
        <div>
          <img src={Sneakers} alt="sneakers img" />
          <CartContentContainer>
            <p>Fall Limited Edition Sneakers</p>
            <div>
              <span>$125.00 x 3</span>
              <span>$375.00</span>
            </div>
          </div>
          <img src={DeleteImg} alt="delete img" />
        </CartContentContainer>
        <button>Checkout</button>
      </CartWrapper>
    </Wrapper>
  );
};

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
  span {
    cursor: pointer;
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
const PersonImgContainer = styled.div`
  border: 3px solid transparent;
  &:hover {
    border: 3px solid #ff7e1b;
    border-radius: 50%;
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
//cart
const CartWrapper = styled.div`
  max-width: 360px;
  width: 100%;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 20px 50px -20px rgba(29, 32, 38, 0.5);
  padding: 24px;
  h6 {
    color: #1d2026;
    font-size: 16px;
    font-weight: 700;
    padding-bottom: 26px;
    border-bottom: 1px solid #e4e9f2;
  }
`;
const CartContentContainer = styled.div`
display:flex
`