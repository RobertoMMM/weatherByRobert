import { TiWeatherCloudy } from "react-icons/ti";
import "./waitpage.css";
import useStoreData from "../../../hooks/use-store";

const Wait = () => {
  const { darkMode } = useStoreData();
  return (
    <>
      <TiWeatherCloudy
        className={darkMode ? "waitIconDark" : "waitIconWhite"}
      />
    </>
  );
};

export default Wait;
