import { useContext, useState } from "react";
import { useEffect } from "react";
import { ThemeContext } from "../store/context";
import Wait from "./Wait";
import WheatherData from "./WheatherData";

const Content = () => {
  const [writing, setWriting] = useState(true);
  const [isErrorCode, setIsErrorCode] = useState(false)
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
    if(isErrorCode){
      return (
        <><p className="text-3xl text-red absolute top-16">NO Nothing</p></>
      )
    }else{
      return (
        <>
          {writing ? <Wait /> : allData && <WheatherData />}
        </>
      )
    }
  }
  const getData = async () => {
    if (userInput.length > 0) {
      const response = await fetch(
        `http://api.weatherstack.com/current?access_key=41b143b4b78f23996daa3cd0bbb54ae9&query=${userInput}`
      );
      const data = await response.json();
      if (data.error) {
        setIsErrorCode(true)
        return;
      } else {
        setIsErrorCode(false)
        setData(data);
      }
    }
  };
  return <><DiplayedInfo /></>;
};

export default Content;