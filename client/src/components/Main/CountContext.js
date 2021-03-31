import React, { createContext } from "react";
import { countReducer } from "../reducers/countReducer";

export const CountContext = createContext();

const countProvider = (props) => {
  const [count, dispatch] = React.useReducer(countReducer, { count: 0 });

  const value = { count, dispatch };
  return (
    <CountContext.Provider value={value}>
      {props.children}
    </CountContext.Provider>
  );
};
export default countProvider;
