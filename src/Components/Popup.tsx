import ImgCard from "./ImgCard";

interface PopupProps {
  closePopup: () => void;
}
const Popup: React.FC<PopupProps> = ({ closePopup }) => {
  return (
    <div>
      <ImgCard openPopup={() => {}}/>
      <button onClick={closePopup}>x</button>
    </div>
  );
};

export default Popup;
