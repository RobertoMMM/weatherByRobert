import { useContext } from "react";
import { HiOutlineEmojiSad } from "react-icons/hi";
import { ThemeContext } from "../../../store/context";
import CurrentWeather from "../current data/CurrentWeather";
import Wait from "../waitpage/Wait";
import './displayedinfo.css'

const DisplayedInfo = () => {
    const { isError, allData, isWriting, darkMode } = useContext(ThemeContext);
    if (isError) {
        return (
          <>
            <p className="notFound">
              <HiOutlineEmojiSad className={darkMode ? "emojiSadDark" : "emojiSadWhite"} />
              Try another location
            </p>
          </>
        );
      } else {
        return <>{isWriting ? <Wait /> : allData && <CurrentWeather />}</>;
      }
}

export default DisplayedInfo