import { createContext } from "react";
import { useHistory } from "react-router";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const history = useHistory();
  return (
    <AppContext.Provider value={{ history }}>{children}</AppContext.Provider>
  );
};
