import styled from "styled-components";
import { useState } from "react";
import data from "../data.json";

interface ImgCardProps {
  openPopup: () => void;
}


const ImgCard: React.FC<ImgCardProps> = ({ openPopup }) => {
  const [selectImg, setSelectImg] = useState<number | undefined>(1);

  return (
    <ImgsWrapper>
      <MainIMg onClick={openPopup}>
        <img src={data.find((item) => item.id === selectImg)?.img} alt="img" />
      </MainIMg>
      <SelectImgContainer>
        {data.map((item) => {
          return (
            <img
              src={item.img}
              key={item.id}
              onClick={() => setSelectImg(item.id)}
              alt="img"
            />
          );
        })}
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
