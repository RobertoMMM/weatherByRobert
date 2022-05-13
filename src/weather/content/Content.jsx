import { useContext, useEffect } from "react";
import { ThemeContext } from "../../store/context";
import { BsKeyboard } from "react-icons/bs";
import "./Content.css";
import DisplayedInfo from "../allData/displayed/DisplayedInfo";

const Content = () => {
  const { userInput, setData, darkMode, setIsError, setIsWriting } = useContext(ThemeContext);
  useEffect(() => {
    const timeout = setTimeout(() => {
      getData();
      setIsWriting(false);
    }, 600);
    return () => {
      clearTimeout(timeout);
      setIsWriting(true);
      setIsError(false)
    };
  }, [userInput]);
  const NoUserInput = () => {
    if(userInput.length <= 0){
    }
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
      if (data2.error) {
        setIsError(true);
        return;
      } else {
        setIsError(false);
        setData(data2);
      }
    }
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
