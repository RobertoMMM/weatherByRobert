import { useReducer } from 'react'
import { ThemeContext } from './context';

const initialState = {
  darkMode: true,
  userInput: '',
  observationTime: '',
  temperature: 0,
  description: '',
  location: 0,
  country: '',
  allData: ''
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
      console.log(action.payload);
      return {
        ...state, allData: action.payload,
      };
    default:
      return state;
  }
};

export function ThemeProvider(props) {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  const changheDark = () => {
    state.darkMode ? dispatch({ type: "LIGHTMODE" }) : dispatch({ type: "DARKMODE" })
  }
  const getUserInput = (e) => {
    dispatch({ type: "USERINPUT", payload: e.target.value })
  }
  const setData = (allData) => {
    dispatch({ type: "GETDATA", payload: allData })
  }
  const value = {
    darkMode: state.darkMode,
    userInput: state.userInput,
    changheDark: changheDark,
    getUserInput: getUserInput,
    description: state.description,
    country: state.country,
    location: state.location,
    temperature: state.temperature,
    observationTime: state.observationTime,
    allData: state.allData,
    setData: setData,
  }
  return <ThemeContext.Provider value={value}>{props.children}</ThemeContext.Provider>;
}