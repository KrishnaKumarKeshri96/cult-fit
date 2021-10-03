import { createContext, useState } from "react";

export const CartData = createContext({
  dataM: [],
  handleDataChange: () => {},
  handleCount: () => {},
});

export const CartDataProvider = ({ children }) => {
  const [dataM, setData] = useState([]);
  const handleDataChange = (data) => {
    for (let i = 0; i < dataM.length; i++) {
      if (dataM[i]._id === data._id && dataM[i].size === data.size) {
        dataM[i].total++;
        setData([...dataM]);

        return;
      }
    }
    setData([...dataM, data]);
  };
  const handleCount = (data, operator) => {
    for (let i = 0; i < dataM.length; i++) {
      if (dataM[i]._id === data._id && dataM[i].size === data.size) {
        dataM[i].total += operator;
        setData([...dataM]);

        return;
      }
    }
  };

  return (
    <CartData.Provider
      value={{
        dataM,
        handleDataChange,
        handleCount,
      }}
    >
      {children}
    </CartData.Provider>
  );
};
