import ImgCard from "./ImgCard";
import styled from "styled-components";
//img
import X from "../assets/x.svg";
import Left from "../assets/left.svg";
import Right from "../assets/right.svg";
interface PopupProps {
  closePopup: () => void;
}
const Popup: React.FC<PopupProps> = ({ closePopup }) => {
  return (
    <PopupWrapper>
      <PopupContent>
        <button onClick={closePopup}>
          <img src={X} alt="img" />
        </button>
        <ImgCard openPopup={() => {}} />
        <ScrolImgWrapper>
          <img src={Left} alt="img" />
          <img src={Right} alt="img" />
        </ScrolImgWrapper>{" "}
      </PopupContent>
    </PopupWrapper>
  );
};

export default Popup;
const PopupWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent black background */
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px); /* Adjust the blur effect */
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
