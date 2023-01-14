import { useContext } from "react";

import { cartContext } from "../context/CartContextProvider";

const useReducerContext = () => {
  return useContext(cartContext);
};

export default useReducerContext;
