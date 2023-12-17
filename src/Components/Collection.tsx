import styled from "styled-components";
import data from "../data.json";
import { useState } from "react";

import Minus from "../assets/minus.png";
import Plus from "../assets/plus.svg";
import hape from "../assets/Shape.svg";

function Collection() {
  const [selectImg, setSelectImg] = useState<number | undefined>(1);

  return (
    <Wrapper>
      <ContentWrapper>
        <ImgsWrapper>
          <MainIMg>
            <img src={data.find((item) => item.id === selectImg)?.img} alt="" />
          </MainIMg>
          <SelectImgContainer>
            {data.map((item) => {
              return (
                <img
                  src={item.img}
                  key={item.id}
                  onClick={() => setSelectImg(item.id)}
                  alt=""
                />
              );
            })}
          </SelectImgContainer>
        </ImgsWrapper>
        <TextWrapper>
          <ProdactName>Sneaker Company</ProdactName>
          <h1>Fall Limited Edition Sneakers</h1>
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <PriceContainer>
            <span>$125.00</span>
            <span>50%</span>
            <span>$250.00</span>
          </PriceContainer>
          <CounterWrapper>
            <CounterContainer>
              <button>
                <img src={Minus} alt="minus img" />
              </button>
              <span>0</span>
              <button>
                <img src={Plus} alt="plus img" />
              </button>
            </CounterContainer>
            <AddButton>
              <button>
                <img src={hape} alt="img" /> Add to cart
              </button>
            </AddButton>
          </CounterWrapper>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}
export default Collection;

const Wrapper = styled.div`
  display: flex;
  margin: 90px 0 130px 0;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 85%;
  width: 100%;
`;

const ImgsWrapper = styled.div`
  max-width: 445px;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 32px;
`;
const MainIMg = styled.div`
  img {
    width: 100%;
    height: 445px;
    border-radius: 15px;
  }
`;
const SelectImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  img {
    max-width: 88px;
    width: 100%;
    max-height: 88px;
    border-radius: 10px;
    cursor: pointer;
  }
`;

//TextWrapper
const TextWrapper = styled.div`
  max-width: 445px;
  text-align: left;
  h1 {
    color: #1d2026;
    font-size: 44px;
    font-weight: 700;
    line-height: 48px;
    margin: 27px 0 32px 0;
  }
  p {
    color: #69707d;
    font-size: 16px;
    line-height: 26px;
  }
`;
const ProdactName = styled.span`
  color: #ff7e1b;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
`;
const PriceContainer = styled.div`
  display: flex;
  margin: 24px 0 0 0;
  max-width: 169px;
  flex-wrap: wrap;
  :first-child {
    color: #1d2026;
    font-size: 28px;
    font-weight: 700;
    margin: 0 16px 10px 0;
  }
  :nth-child(2) {
    color: #ff7e1b;
    font-size: 16px;
    font-weight: 700;
    padding: 5px 7px;
    border-radius: 6px;
    background: #ffeee2;
  }
  :nth-child(3) {
    color: #b6bcc8;
    font-size: 16px;
    font-weight: 700;
    line-height: 26px; /* 162.5% */
    text-decoration-line: strikethrough;
  }
`;
const CounterWrapper = styled.div`
  display: flex;
  column-gap: 16px;
  margin-top: 32px;
`;
const CounterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f6f8fd;
  max-width: 157px;
  width: 100%;
  padding: 26px 18px;
  border-radius: 14px;

  button {
    border: none;
    background: inherit;
    cursor: pointer;
  }
`;
const AddButton = styled.div`
  button {
    display: flex;
    column-gap: 15px;
    padding: 34px 76px;
    background: #ff7e1b;
    box-shadow: 0px 20px 50px -20px #ff7e1b;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    border-radius: 10px;
    border: none;
    cursor: pointer;
  }
`;
