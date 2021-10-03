import styles from "./login.module.css";
import { FaTimes, FaGoogle, FaFacebookF, FaEnvelope } from "react-icons/fa";
import { useContext, useState } from "react";
import styled from "styled-components";
import { GoogleLogin } from "react-google-login";
import { AppContext } from "../../Contextxts/AppContext";

export const Login = ({ hide, handleHide }) => {
  const [contentChange, setContentChange] = useState(false);
  const { handleLogin } = useContext(AppContext);
  const handleClick = (googleUser) => {
    handleHide();
    handleLogin(googleUser);
  };
  const handleContentChange = () => {
    setContentChange(false);
  };

  const LoginDiv = styled.div`
    visibility: ${hide ? "hidden" : "visible"};
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: fixed;

    z-index: 2000;
    background-color: rgba(128, 128, 128, 0.555);
  `;

  return (
    <>
      <LoginDiv>
        <div className={styles["login"]}>
          <div className={styles["login__cross"]}>
            <button
              onClick={() => {
                handleContentChange();
                handleHide();
              }}
            >
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
          {!contentChange ? (
            <>
              <input type="phone" placeholder="Enter your phone number" />
              <button className={styles["login__continueBtn"]}>Continue</button>
              <li>
                By Continuing you agree to the
                <em style={{ color: "red" }}>Terms of Services</em> and
                <em style={{ color: "red" }}>Privacy policy</em>.
              </li>

              <button
                onClick={() => setContentChange(true)}
                className={styles["login__google"]}
              >
                Continue with
                <span>
                  <FaGoogle />
                  <FaFacebookF />
                  <FaEnvelope />
                </span>
              </button>
            </>
          ) : (
            <>
              {/* <button
                className={`${styles["google"]} ${styles["login__options"]} `}
                style={{ margin: "10px auto" }}
              >
                <img
                  src="https://static.cure.fit/assets/images/google-new.svg"
                  alt="google"
                />
                <h4 style={{ color: "white" }}>Sign in with Google</h4>
              </button> */}
              <GoogleLogin
                // clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                clientId="755998271801-nnrchkokeh4u5ekiffuuprgec1lmmjca.apps.googleusercontent.com"
                buttonText="Log in with Google"
                onSuccess={handleClick}
                onFailure={handleClick}
                cookiePolicy={"single_host_origin"}
              />
              <button
                className={`${styles["facebook"]} ${styles["login__options"]} `}
                style={{ margin: "10px auto" }}
              >
                <img
                  src="https://static.cure.fit/assets/images/facebook-new.svg"
                  alt="facebook"
                />
                <h4 style={{ color: "white" }}>Sign in with Facebook</h4>
              </button>
              <button
                className={styles["login__options"]}
                style={{ color: "black", margin: "10px auto" }}
              >
                <img
                  src="https://static.cure.fit/assets/images/mail-new.svg"
                  alt="email"
                />
                <h4>Sign in with email</h4>
              </button>
              <button
                className={styles["login__options"]}
                style={{ color: "black", margin: "10px auto" }}
              >
                <img
                  src="https://static.cure.fit/assets/images/user-new.svg"
                  alt="signUp"
                />
                <h4>Create new account</h4>
              </button>
            </>
          )}
        </div>
      </LoginDiv>
      <div style={{ height: "10px" }}></div>
    </>
  );
};
