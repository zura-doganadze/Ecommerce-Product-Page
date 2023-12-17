import styled from "styled-components";
import data from "../data.json";
import { useState } from "react";

function Collection() {
  const [selectImg, setSelectImg] = useState<number | undefined>(1);

  return (
    <Wrapper>
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
    </Wrapper>
  );
}
export default Collection;

const Wrapper = styled.div`
  display: flex;
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
