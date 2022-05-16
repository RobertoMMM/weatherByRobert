import { useReducer } from "react";
import { ThemeContext } from "./context";

const initialState = {
  darkMode: true,
  userInput: "",
  allData: "",
  isError: "",
  isWriting: "",
  isOpenModal: false,
  isSignIn: true
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
      return { ...state, isError: action.payload };
    case "ISWRITING":
      return { ...state, isWriting: action.payload };
    case "ISOPENMODAL":
      return { ...state, isOpenModal: action.payload };
    case "ISSIGNIN":
      return { ...state, isSignIn: action.payload };
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
  };
  const setIsWriting = (isWriting) => {
    dispatch({ type: "ISWRITING", payload: isWriting });
  };
  const setIsOpenModal = (isOpen) => {
    dispatch({ type: "ISOPENMODAL", payload: isOpen });
  }
  const setIsSignIn = (isSignIn) => {
    dispatch({ type: "ISSIGNIN", payload: isSignIn });
  }
  const value = {
    darkMode: state.darkMode,
    userInput: state.userInput,
    allData: state.allData,
    isError: state.isError,
    isWriting: state.isWriting,
    isOpenModal: state.isOpenModal,
    isSignIn: state.isSignIn,
    setIsSignIn,
    changheDark,
    getUserInput,
    setData,
    setIsError,
    setIsWriting,
    setIsOpenModal
  };
  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
}
