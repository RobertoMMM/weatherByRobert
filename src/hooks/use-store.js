import { useContext } from "react";
import { ThemeContext } from "../store/context";

const useStoreData = () => {
  const { ...data } = useContext(ThemeContext);
  return data;
};
export default useStoreData;
