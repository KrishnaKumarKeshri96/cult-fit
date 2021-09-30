const { createContext } = require("react");

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    
  return <AppContext.Provider>{children}</AppContext.Provider>;
};
