import "./BoxHour.css";
import imgTempDark from "../../../../assets/circle-small.png";
import imgTempWhite from "../../../../assets/circle-small-free-icon-font.png";
import useStoreData from "../../../../hooks/use-store";
const BoxHour = ({ time, temp, imgIcon }) => {
  const { darkMode } = useStoreData();
  return (
    <div className={darkMode ? "boxHourMainDark" : "boxHourMainWhite"}>
      <div className="boxHourTime">{time}</div>
      <img src={imgIcon} className="boxHourIconImg" />
      <div className="boxHourTemp">{temp}</div>
      <img
        src={darkMode ? imgTempWhite : imgTempDark}
        className="boxHourPoint"
      />
    </div>
  );
};

export default BoxHour;
