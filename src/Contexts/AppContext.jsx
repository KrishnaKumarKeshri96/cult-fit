const { createContext, useState } = require("react");

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [chooseCenter, setChooseCenter] = useState(false);

  return (
    <AppContext.Provider value={{ chooseCenter, setChooseCenter }}>
      {children}
    </AppContext.Provider>
  );
};
