// import React, { createContext, useEffect, useReducer } from "react";
// import { userReducer } from "./reducers/userReducer";

// export const UserContext = createContext();

// const UserProvider = (props) => {
//   const initialState =
//     localStorage.getItem("user") || JSON.stringify([new Boolean(false)]);
//   const [user, dispatch] = useReducer(userReducer, initialState);
//   useEffect(() => {
//     localStorage.setItem("user", JSON.stringify(user));
//   }, [user]);
//   return (
//     <UserContext.Provider value={{ user, dispatch }}>
//       {props.children}
//     </UserContext.Provider>
//   );
// };
// export default UserProvider;

import React, { createContext, useEffect, useReducer } from "react";
import { userReducer } from "./reducers/userReducer";

export const UserContext = createContext();

const UserProvider = (props) => {
  const [user, dispatch] = useReducer(userReducer, [], () => {
    const localData = localStorage.getItem("user");
    return localData
      ? JSON.parse(localData)
      : JSON.stringify([new Boolean(false)]);
  });
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  return (
    <UserContext.Provider value={{ user, dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
};
export default UserProvider;
