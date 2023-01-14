import { useContext } from "react";
import { dataContext } from "../context/DataContextProvider";

const useDataContext = () => {
  return useContext(dataContext);
};

export default useDataContext;
