import React, { createContext, useReducer } from "react";
import { countReducer } from "../reducers/countReducer";

export const CountContext = createContext();

const CountProvider = (props) => {
  const [count, dispatch] = useReducer(countReducer, { count: 0 });

  return (
    <CountContext.Provider value={{ count, dispatch }}>
      {props.children}
    </CountContext.Provider>
  );
};
export default CountProvider;
