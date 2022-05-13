import { HiOutlineEmojiSad } from "react-icons/hi";
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
          <HiOutlineEmojiSad
            className={darkMode ? "emojiSadDark" : "emojiSadWhite"}
          />
          Try another location
        </p>
      </>
    );
  } else {
    return <>{isWriting ? <Wait /> : allData && <AllWeather />}</>;
  }
};

export default DisplayedInfo;
