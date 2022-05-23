import "./BoxHour.css";
import imgTempDark from "../../../../assets/circle-small.png";
import imgTempWhite from "../../../../assets/circle-small-free-icon-font.png";
import useStoreData from "../../../../hooks/use-store";
import useImg from "./../../../../hooks/use-img";
const BoxHour = ({ time, temp, imgIcon }) => {
  const { darkMode } = useStoreData();
  const response = useImg(imgIcon);
  return (
    <div className={darkMode ? "boxHourMainDark" : "boxHourMainWhite"}>
      <div className="boxHourTime">{time}</div>
      <img src={response} className="boxHourIconImg" alt="img" />
      <div className="boxHourTemp">{temp}</div>
      <img
        src={darkMode ? imgTempWhite : imgTempDark}
        className="boxHourPoint"
        alt="img"
      />
    </div>
  );
};

export default BoxHour;
