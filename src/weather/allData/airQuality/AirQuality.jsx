import "./AirQuality.css";
import imgVeryHappy from "../../../assets/emoji/happy.png";
import imgHappy from "../../../assets/emoji/happy1.png";
import imgConfusedHappy from "../../../assets/emoji/confused.png";
import imgSad from "../../../assets/emoji/sad.png";
import imgSad2 from "../../../assets/emoji/sad1.png";
import imgSad3 from "../../../assets/emoji/sad2.png";
import cleanAir from "../../../assets/weather/clean-air.png";
import useStoreData from "../../../hooks/use-store";
const AirQuality = () => {
  const { allData } = useStoreData();
  const us_epa_index = allData.current.air_quality["us-epa-index"];
  let us_epa_index_description;
  switch (us_epa_index) {
    case 1:
      us_epa_index_description = "Good";
      break;
    case 2:
      us_epa_index_description = "Moderate";
      break;
    case 3:
      us_epa_index_description = "Unhealthy for sensitive group";
      break;
    case 4:
      us_epa_index_description = "Unhealthy";
      break;
    case 5:
      us_epa_index_description = "Very Unhealthy";
      break;
    case 6:
      us_epa_index_description = "Hazardous";
      break;
    default:
  }
  return (
    <>
      <div className="airMain">
        <p className="textmain">Current Air Quality</p>
        <img src={cleanAir} className="aircleanimg" alt="img" />
        <div className="yourAirCondition">
          <p>
            Air has an index of {us_epa_index} - {us_epa_index_description}
          </p>
        </div>
        <div className="airDegree">
          <span>
            1<img src={imgVeryHappy} alt="img" />
          </span>
          <span>
            2<img src={imgHappy} alt="img" />
          </span>
          <span>
            3<img src={imgConfusedHappy} alt="img" />
          </span>
          <span>
            4<img src={imgSad} alt="img" />
          </span>
          <span>
            5<img src={imgSad2} alt="img" />
          </span>
          <span>
            6<img src={imgSad3} alt="img" />
          </span>
        </div>
      </div>
    </>
  );
};

export default AirQuality;
