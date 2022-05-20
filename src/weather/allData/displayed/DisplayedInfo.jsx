import imgSad from "./../../../assets/cloud.png";
import useStoreData from "../../../hooks/use-store";
import Wait from "../waitpage/Wait";
import AllWeather from "./AllWeather";
import "./displayedinfo.css";

const DisplayedInfo = () => {
  const { isError, allData, isWriting, darkMode } = useStoreData();
  if (isError) {
    return (
      <>
        <p className="notFound">
          <img src={imgSad} className="cloudNoResults" />
          Try another location
        </p>
      </>
    );
  } else {
    return <>{isWriting ? <Wait /> : allData && <AllWeather />}</>;
  }
};

export default DisplayedInfo;
