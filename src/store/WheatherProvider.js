import { useReducer } from "react";
import { ThemeContext } from "./context";

const initialState = {
  darkMode: true,
  userInput: "",
  allData: "",
  isError: "",
  isWriting: "",
  isOpenModal: false,
  isSignIn: true,
  password: "",
  email: "",
  responseFromServer: "",
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case "DARKMODE":
      return { ...state, darkMode: action.payload };
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
    case "EMAIL":
      return { ...state, email: action.payload };
    case "PASS":
      return { ...state, password: action.payload };
    case "RESPONSE":
      return { ...state, responseFromServer: action.payload };
    default:
      return state;
  }
};

export function ThemeProvider(props) {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  const changheDark = (mode) => {
    dispatch({ type: "DARKMODE", payload: mode });
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
  };
  const setIsSignIn = (isSignIn) => {
    dispatch({ type: "ISSIGNIN", payload: isSignIn });
  };
  const setEmail = (email) => {
    dispatch({ type: "EMAIL", payload: email });
  };
  const setPassword = (pass) => {
    dispatch({ type: "PASS", payload: pass });
  };
  const setResponseFromServer = (response) => {
    dispatch({ type: "RESPONSE", payload: response });
  };
  const value = {
    darkMode: state.darkMode,
    userInput: state.userInput,
    allData: state.allData,
    isError: state.isError,
    isWriting: state.isWriting,
    isOpenModal: state.isOpenModal,
    isSignIn: state.isSignIn,
    email: state.email,
    password: state.password,
    responseFromServer: state.responseFromServer,
    setEmail,
    setPassword,
    setIsSignIn,
    changheDark,
    getUserInput,
    setData,
    setIsError,
    setIsWriting,
    setIsOpenModal,
    setResponseFromServer,
  };
  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
}
