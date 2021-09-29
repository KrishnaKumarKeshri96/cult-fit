import styles from "./login.module.css";
import { FaTimes, FaGoogle, FaFacebookF, FaEnvelope } from "react-icons/fa";

export const Login = () => {
  return (
    <div className={styles["loginContainer"]}>
      <div className={styles["login"]} id="login">
        <div className={styles["login__cross"]}>
          <button>
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
    </div>
  );
};
