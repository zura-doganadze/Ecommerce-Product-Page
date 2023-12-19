import styled from "styled-components";
import { useEffect, useState } from "react";
import data from "../data.json";
// img
import Minus from "../assets/minus.png";
import Plus from "../assets/plus.svg";
import hape from "../assets/Shape.svg";
import X from "../assets/x.svg";
import ImgCard from "./ImgCard";
import Left from "../assets/left.svg";
import Right from "../assets/right.svg";

interface CollectionProps {
  decrement: () => void;
  increment: () => void;
  isPopupOpen?: boolean;
  count: number;
  AddToCart: () => void;
}
const Collection: React.FC<CollectionProps> = ({
  count,
  decrement,
  increment,
  AddToCart,
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectImg, setSelectImg] = useState<number>(1);
  const [active, setActive] = useState<number>();

  console.log(selectImg);
  const openPopup = () => {
    setIsPopupOpen(true);
  };
  const closePopup = () => {
    setIsPopupOpen(false);
  };
  function NextImg() {
    setSelectImg(selectImg < data.length ? selectImg + 1 : 1);
  }

  function PrevImg() {
    setSelectImg(selectImg > 1 ? selectImg - 1 : data.length);
  }
  useEffect(() => {
    setActive(selectImg);
  }, [selectImg]);
  return (
    <Wrapper>
      <ContentWrapper>
        <ImgCardContainer>
          <ImgCard
            openPopup={openPopup}
            selectImg={selectImg}
            setSelectImg={setSelectImg}
            closePopup={closePopup}
            isPopupOpen={isPopupOpen}
            active={active}
          />
        </ImgCardContainer>

        {isPopupOpen && (
          <PopupWrapper>
            <PopupContent>
              <button onClick={closePopup}>
                <img src={X} alt="img" />
              </button>
              <ImgCard
                openPopup={openPopup}
                selectImg={selectImg}
                setSelectImg={setSelectImg}
                closePopup={closePopup}
                isPopupOpen={isPopupOpen}
                active={active}
              />
              <ScrolImgWrapper>
                <img onClick={PrevImg} src={Left} alt="img" />
                <img onClick={NextImg} src={Right} alt="img" />
              </ScrolImgWrapper>
            </PopupContent>
          </PopupWrapper>
        )}
        <TextWrapper>
          <ProdactName>Sneaker Company</ProdactName>
          <h1>Fall Limited Edition Sneakers</h1>
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <PriceContainer>
            <div>
              <span>$125</span>
              <span>50%</span>
            </div>
            <span>$250.00</span>
          </PriceContainer>
          <CounterWrapper>
            <CounterContainer>
              <button>
                <img onClick={decrement} src={Minus} alt="minus img" />
              </button>
              <span>{count}</span>
              <button>
                <img onClick={increment} src={Plus} alt="plus img" />
              </button>
            </CounterContainer>
            <AddButton>
              <button onClick={AddToCart}>
                <img src={hape} alt="img" /> Add to cart
              </button>
            </AddButton>
          </CounterWrapper>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};
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
const ImgCardContainer = styled.div`
  width: 100%;
  max-width: 445px;
`;
const PopupWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
`;

const PopupContent = styled.div`
  padding: 20px;
  max-width: 550px;
  width: 100%;
  position: relative;
  img {
    cursor: pointer;
  }
  button {
    margin-bottom: 27px;
    width: 100%;
    display: flex;
    align-items: end;
    justify-content: flex-end;
    background: none;
    border: none;
  }
`;
const ScrolImgWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(-22px, -70px);
  width: 100%;
  display: flex;
  justify-content: space-between;
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
  flex-direction: column;
  margin: 24px 0 0 0;
  max-width: 169px;
  div {
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
  }
  :last-child {
    color: rgb(182, 188, 200);
    font-size: 16px;
    font-weight: 700;
    line-height: 2.6rem;
    text-decoration-line: line-through;
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
