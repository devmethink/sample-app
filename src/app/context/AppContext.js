import React, { createContext, useReducer } from "react";
import Reducer from "./AppReducer";

const initialState = {
  product: "Product 1",
  data: null,
  name: "",
  number: 4,
  region:null,
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
};

export const AppContext = createContext(initialState);

export default Store;
