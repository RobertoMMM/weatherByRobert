import { useReducer } from "react";
import { ThemeContext } from "./context";

const initialState = {
  darkMode: true,
  userInput: "",
  allData: "",
  isError: "",
  isWriting: ""
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case "LIGHTMODE":
      return { ...state, darkMode: false };
    case "DARKMODE":
      return { ...state, darkMode: true };
    case "USERINPUT":
      return { ...state, userInput: action.payload };
    case "GETDATA":
      return {
        ...state,
        allData: action.payload,
      };
    case "SETERROR":
        return { ...state, isError: action.payload }
    case "ISWRITING" : 
      return { ...state, isWriting: action.payload}
    default:
      return state;
  }
};

export function ThemeProvider(props) {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  const changheDark = () => {
    state.darkMode
      ? dispatch({ type: "LIGHTMODE" })
      : dispatch({ type: "DARKMODE" });
  };
  const getUserInput = (e) => {
    dispatch({ type: "USERINPUT", payload: e.target.value });
  };
  const setData = (allData) => {
    dispatch({ type: "GETDATA", payload: allData });
  };
  const setIsError = (error) => {
    dispatch({ type: "SETERROR", payload: error });
  }
  const setIsWriting = (isWriting) => {
    dispatch({ type: "ISWRITING", payload: isWriting });
  }
  const value = {
    darkMode: state.darkMode,
    userInput: state.userInput,
    allData: state.allData,
    isError: state.isError,
    isWriting: state.isWriting,
    changheDark: changheDark,
    getUserInput: getUserInput,
    setData: setData,
    setIsError: setIsError,
    setIsWriting: setIsWriting
  };
  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
}
