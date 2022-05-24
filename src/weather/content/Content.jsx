import { useEffect } from "react";
import { BsKeyboard } from "react-icons/bs";
import "./Content.css";
import DisplayedInfo from "../allData/displayed/DisplayedInfo";
import useStoreData from "../../hooks/use-store";
const Content = () => {
  const {
    userInput,
    setData,
    darkMode,
    setIsError,
    setIsWriting,
    responseFromServer,
    setDataAstronomical,
  } = useStoreData();

  useEffect(() => {
    const timeout = setTimeout(() => {
      getData();
      setIsWriting(false);
    }, 600);
    return () => {
      clearTimeout(timeout);
      setIsWriting(true);
      setIsError(false);
    };
  }, [userInput]);

  const getData = async () => {
    if (userInput.length > 0) {
      const dataResponseWeather = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=030082f3dc234b4181f111631221005&q=${userInput}&days=3&aqi=yes`
      );
      const dataTransformerWeather = await dataResponseWeather.json();
      const dataResponseAstronomical = await fetch(
        `https://api.weatherapi.com/v1/astronomy.json?key=030082f3dc234b4181f111631221005&q=${userInput}`
      );
      const dataTransformerAstronomical = await dataResponseAstronomical.json();
      if (dataTransformerWeather.error || dataTransformerAstronomical.error) {
        setIsError(true);
        return;
      } else {
        setIsError(false);
        setData(dataTransformerWeather);
        setDataAstronomical(dataTransformerAstronomical);
      }
    }
  };

  const NoUserInput = () => {
    if (userInput.length <= 0) {
    }
    return (
      <div className="noUserInput">
        <p>
          {responseFromServer
            ? `Hello ${responseFromServer.email} :)`
            : "Check weather around the world"}
        </p>
        <BsKeyboard className={darkMode ? "keyboardDark" : "keyboardWhite"} />
      </div>
    );
  };

  return (
    <>
      <section className={darkMode ? "sectionInfoDark" : "sectionInfoWhite"}>
        {!userInput && <NoUserInput />}
        {userInput && <DisplayedInfo />}
      </section>
    </>
  );
};

export default Content;
