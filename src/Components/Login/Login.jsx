import styles from "./login.module.css";
import { FaTimes, FaGoogle, FaFacebookF, FaEnvelope } from "react-icons/fa";
import { useState } from "react";
import styled from "styled-components";

export const Login = () => {
  const [hide, setHide] = useState(true);

  const handleHide = () => {
    setHide(true);
  };

  const LoginDiv = styled.div`
    visibility: ${hide ? "hidden" : "visible"};
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2000;
    background-color: rgba(128, 128, 128, 0.555);
  `;

  return (
    <>
      <LoginDiv>
        <div className={styles["login"]}>
          <div className={styles["login__cross"]}>
            <button onClick={handleHide}>
              <FaTimes />
            </button>
          </div>
          <img
            src="https://static.cure.fit/assets/images/curefit_login_logo.svg"
            alt="logo"
          />
          <img
            src="https://static.cure.fit/assets/images/curefit-name.svg"
            alt="name"
          />

          <input type="phone" placeholder="Enter your phone number" />
          <button className={styles["login__continueBtn"]}>Continue</button>
          <li>
            By Continuing you agree to the
            <em style={{ color: "red" }}>Terms of Services</em> and
            <em style={{ color: "red" }}>Privacy policy</em>.
          </li>

          <button className={styles["login__google"]}>
            Continue with
            <span>
              <FaGoogle />
              <FaFacebookF />
              <FaEnvelope />
            </span>
          </button>
        </div>
      </LoginDiv>
      <button onClick={() => setHide(false)}>click Me</button>
    </>
  );
};
