import { useContext } from "react";
import { ThemeContext } from "../../store/context";

const WeatherData = () => {
  const { allData}  = useContext(ThemeContext);
  return (
    <p
      style={{
        color: "red",
        fontSize: "50px",
        position: "absolute",
        top: "50px",
      }}
    >
      {allData.current.temp_c}
    </p>
  );
};

export default WeatherData;
