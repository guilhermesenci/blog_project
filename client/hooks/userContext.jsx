import { createContext, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [userInfo, setUserInfo] = useState({});
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
}

UserContextProvider.propTypes = {
  children: (props, propName) => {
    if (props[propName] === undefined) {
      return new Error(`A propriedade ${propName} é obrigatória.`);
    }
    return null;
  },
};
