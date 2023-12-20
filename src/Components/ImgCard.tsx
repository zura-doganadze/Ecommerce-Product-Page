import styled, { css } from "styled-components";
import data from "../data.json";

interface ImgCardProps {
  openPopup: () => void;
  selectImg: number;
  closePopup: () => void;
  setSelectImg: (newSelectImg: number) => void;
  isPopupOpen: boolean;
  active: number | undefined;
}

const ImgCard: React.FC<ImgCardProps> = ({
  openPopup,
  selectImg,
  setSelectImg,
  active,
}) => {
  return (
    <ImgsWrapper>
      <MainIMg onClick={openPopup}>
        <img src={data.find((item) => item.id === selectImg)?.img} alt="img" />
      </MainIMg>
      <SelectImgContainer>
        {data.map((item) => (
          <SmalImgContainer
            key={item.id}
            src={item.img}
            onClick={() => setSelectImg(item.id)}
            alt="img"
            isactive={item.id === (active ?? 1)} // Ensure active is initially set to 1
          />
        ))}
      </SelectImgContainer>
    </ImgsWrapper>
  );
};

export default ImgCard;
const ImgsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  position: relative;
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
type SmalImgContainerProps = {
  isactive: any;
  children?: React.ReactNode;
};

const SmalImgContainer = styled.img<SmalImgContainerProps>(
  (props) => css`
    border-radius: 10px;
    border: 2px solid ${props.isactive ? "#FF7E1B" : "transparent"};

    filter: ${props.isactive ? "blur(1.5px)" : "blur(0px)"};
    &:hover {
      border-color: #ff7e1b;
      filter: blur(1px);
    }
  `
);
