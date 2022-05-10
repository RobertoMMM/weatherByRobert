import { useContext, useState } from "react";
import "./Content.css";
import { useEffect } from "react";
import { ThemeContext } from "../../store/context";
import WeatherData from "../data/WeatherData";
import Wait from "../waitpage/Wait";
import { HiOutlineEmojiSad } from "react-icons/hi";

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
            <HiOutlineEmojiSad className="float-left flex mr-4"/>
            No results
          </p>
        </>
      );
    } else {
      return <>{writing ? <Wait /> : allData && <WeatherData />}</>;
    }
  };
  const getData = async () => {
    if (userInput.length > 0) {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=030082f3dc234b4181f111631221005&q=${userInput}`
      );
      const data = await response.json();
      console.log(data);
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
        {userInput && <DiplayedInfo />}
      </section>
    </>
  );
};

export default Content;
