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
  const { userInput, setData, allData } = useContext(ThemeContext);
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
            <HiOutlineEmojiSad className="float-left flex mr-4" />
            No results
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
        <p>Type something</p>
        <BsKeyboard className="keyboard"/>
      </div>
    )
  }
  const getData = async () => {
    if (userInput.length > 0) {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=030082f3dc234b4181f111631221005&q=${userInput}`
      );
      // const response2 = await fetch(
      //   `http://api.weatherapi.com/v1/forecast.json?key=030082f3dc234b4181f111631221005&q=${userInput}&days=3`

      // );
      const data = await response.json();
      // const data2 = await response2.json();
      // console.log(data);
      // console.log(data2.forecast.forecastday[0]);
      if (data.error) {
        setIsErrorCode(true);
        return;
      } else {
        setIsErrorCode(false);
        setData(data);
      }
    }
  };
  return (
    <>
      <section className="sectionInfo">
        {!userInput && <NoUserInput />}
        {userInput && <DiplayedInfo />}
      </section>
    </>
  );
};

export default Content;
