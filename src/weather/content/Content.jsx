import { useEffect } from "react";
import { BsKeyboard } from "react-icons/bs";
import "./Content.css";
import DisplayedInfo from "../allData/displayed/DisplayedInfo";
import useStoreData from "../../hooks/use-store";
import AuthWeatherData from "../../authweatherdata/AuthWeatherData";
const Content = () => {
  const { userInput, setData, darkMode, setIsError, setIsWriting, responseFromServer } =
    useStoreData();

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
    try {
      if (userInput.length > 0) {
        const response2 = await fetch(
          `http://api.weatherapi.com/v1/forecast.json?key=030082f3dc234b4181f111631221005&q=${userInput}&days=3`
        );
        const data2 = await response2.json();
        console.log(data2);
        if (data2.error) {
          setIsError(true);
          return;
        } else {
          setIsError(false);
          setData(data2);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const NoUserInput = () => {
    if (userInput.length <= 0) {
    }
    return (
      <div className="noUserInput">
        <p>{responseFromServer ? `Hello ${responseFromServer.user.email} :)` : 'Check weather around the world'}</p>
        <BsKeyboard className={darkMode ? "keyboardDark" : "keyboardWhite"} />
      </div>
    );
  };

  return (
    <>
      <section className={darkMode ? "sectionInfoDark" : "sectionInfoWhite"}>
        {!userInput && <NoUserInput />}
        {userInput && <DisplayedInfo />}
        {<AuthWeatherData />}
      </section>
    </>
  );
};

export default Content;
