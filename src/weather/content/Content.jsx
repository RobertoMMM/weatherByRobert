import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../store/context";
import { HiOutlineEmojiSad } from "react-icons/hi";
import { BsKeyboard } from "react-icons/bs";
import WeatherData from "../data/WeatherData";
import Wait from "../waitpage/Wait";
import "./Content.css";

const Content = () => {
  const [writing, setWriting] = useState(true);
  const [isErrorCode, setIsErrorCode] = useState(false);
  const { userInput, setData, allData, darkMode } = useContext(ThemeContext);
  useEffect(() => {
    const timeout = setTimeout(() => {
      getData();
      setWriting(false);
    }, 500);
    return () => {
      clearTimeout(timeout);
      setWriting(true);
    };
  }, [userInput]);
  const DiplayedInfo = () => {
    if (isErrorCode) {
      return (
        <>
          <p className="notFound">
            <HiOutlineEmojiSad className="float-left text-5xl flex mr-4 text-forDark animate-pulse" />
            Try another location
          </p>
        </>
      );
    } else {
      return <>{writing ? <Wait /> : allData && <WeatherData />}</>;
    }
  };
  const NoUserInput = () => {
    return (
      <div className="noUserInput">
        <p>Check weather around the world</p>
        <BsKeyboard className={darkMode ? "keyboardDark" : "keyboardWhite"} />
      </div>
    );
  };
  const getData = async () => {
    if (userInput.length > 0) {
      const response2 = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=030082f3dc234b4181f111631221005&q=${userInput}&days=3`
      );
      const data2 = await response2.json();
      console.log(data2);
      if (data2.error) {
        setIsErrorCode(true);
        return;
      } else {
        setIsErrorCode(false);
        setData(data2);
      }
    }
  };
  return (
    <>
      <section className={darkMode ? "sectionInfoDark" : "sectionInfoWhite"}>
        {!userInput && <NoUserInput />}
        {userInput && <DiplayedInfo />}
      </section>
    </>
  );
};

export default Content;
