import { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("userid"));
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});
  useEffect(() => {
    if (token) {
      getDataById(token);
      // console.log("setting true");
      setIsLoggedIn(true);
    }
  }, []);

  const getDataById = async (id) => {
    const res = await fetch(
      `https://secure-plateau-49386.herokuapp.com/users/me/${id}`
    );
    // console.log(res);
    const user = await res.json();
    // console.log(user);
    setUserData(user);
  };
  // Login Handler
  const handleLogin = async (googleUser) => {
    const { tokenId } = googleUser;

    const res = await fetch(
      "https://secure-plateau-49386.herokuapp.com/users/api/v2/auth/google",
      {
        method: "POST",
        body: JSON.stringify({
          token: tokenId,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    // console.log(data._id);
    localStorage.setItem("userid", data._id);
    // console.log(data._id ? "yes" : "no");
    if (data._id) {
      localStorage.setItem("userid", data._id);
      setToken(localStorage.getItem("userid"));
    }

    setUserData(data);
    setIsLoggedIn(true);
  };
  // Logout Handler

  const handleLogout = () => {
    localStorage.removeItem("userid");
    setIsLoggedIn(false);
    setUserData({});
  };
  // History hook
  const history = useHistory();
  return (
    <AppContext.Provider
      value={{ history, isLoggedIn, userData, handleLogin, handleLogout }}
    >
      {children}
    </AppContext.Provider>
  );
};
