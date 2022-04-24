import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import "./App.css";
import Navbar from "./navbar/Navbar";
import { ThemeContext } from "./store/context";

const App = () => {
  const [writing, setWriting] = useState(true)
  const { darkMode, userInput, setData, allData } = useContext(ThemeContext);
  useEffect(() => {
    const timeout = setTimeout(() => {
      getData();
      setWriting(false)
    }, 500);
    return () => {
      clearTimeout(timeout);
      setWriting(true)
    }
  }, [userInput]);
  const getData = async () => {
    if(userInput.length > 0){
      const response = await fetch(
        `http://api.weatherstack.com/current?access_key=41b143b4b78f23996daa3cd0bbb54ae9&query=${userInput}`
      );
      const data = await response.json();
      if(data.error){
        return
      }else{
        setData(data);
      }
    }
  };
  return (
    <section className={darkMode ? "darkSec" : "lightSec"}>
      <Navbar />
      {writing ? <p style={{fontSize: "50px", color: "red",position: "absolute",
          top: "50px",}}>Wait.....</p> : allData && (
            <p
            style={{
              color: "red",
              fontSize: "50px",
              position: "absolute",
              top: "50px",
            }}
            >
              {allData.current.temperature}
            </p>
          )}
    </section>
  );
};

export default App;
