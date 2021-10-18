import styles from "./navbar.module.css";

import { Link } from "react-router-dom";

import logo from "../../images/logo.svg";
import cultIcon from "../../images/cult-icon.svg";
import liveFit from "../../images/Livefit.svg";
import eatIcon from "../../images/eat-icon.svg";
import mindIcon from "../../images/mind-icon.svg";
import carefit from "../../images/carefit-blk.svg";
import storeIcon from "../../images/store-icon.svg";
import userImg from "../../images/user-image.svg";
import cart from "../../images/cart-image.svg";

import { Login } from "../Login/Login";
import { useContext, useState } from "react";
import { AppContext } from "../../Contextxts/AppContext";

export const Navbar = () => {
  const [hide, setHide] = useState(true);
  const { isLoggedIn, userData, handleLogout } = useContext(AppContext);
  const handleHide = () => {
    setHide(true);
  };

  return (
    <>
      <header className={styles.nav_section}>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <nav>
          <Link to="/cult">
            <img src={cultIcon} alt="" />
            Cult
          </Link>
          <Link to="/">
            <img src={liveFit} alt="" />
            Live
          </Link>
          <Link to="/">
            <img src={eatIcon} alt="" />
            Eat
          </Link>
          <Link to="/">
            <img src={mindIcon} alt="" />
            Mind
          </Link>
          <Link to="/">
            <img src={carefit} alt="" />
            Care
          </Link>
          <Link to="/cultstore">
            <img src={storeIcon} alt="" />
            Store
          </Link>
        </nav>

        <div className={styles.right_section}>
          <Link to="/">Bangalore</Link>
          {isLoggedIn ? (
            <>
              {/* <img src={userImg} alt="" /> */}
              {/* {console.log(userData.picture)} */}
              <div style={{ cursor: "pointer" }} onClick={handleLogout}>
                <img
                  style={{
                    height: "30px",
                    width: "30px",
                    borderRadius: "15px",
                  }}
                  src={userData.picture}
                  alt=""
                />
                {userData.given_name}
              </div>
            </>
          ) : (
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                setHide(false);
              }}
            >
              <img src={userImg} alt="" />
            </div>
          )}

          <Link to="/cart">
            <img src={cart} alt="Cart" />
          </Link>
        </div>
      </header>
      <Login hide={hide} handleHide={handleHide} />
    </>
  );
};
