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

export const Navbar = () => {
  return (
    <header className={styles.nav_section}>
      <img src={logo} alt="Logo" />
      <nav>
        <Link>
          <img src={cultIcon} alt="" />
          Cult
        </Link>
        <Link>
          <img src={liveFit} alt="" />
          Live
        </Link>
        <Link>
          <img src={eatIcon} alt="" />
          Eat
        </Link>
        <Link>
          <img src={mindIcon} alt="" />
          Mind
        </Link>
        <Link>
          <img src={carefit} alt="" />
          Care
        </Link>
        <Link to="/cultstore">
          <img src={storeIcon} alt="" />
          Store
        </Link>
      </nav>

      <div className={styles.right_section}>
        <Link>Bangalore</Link>
        <div>
          <img src={userImg} alt="" />
          <Link to="/login">Login</Link>
        </div>
        <Link>
          <img src={cart} alt="Cart" />
        </Link>
      </div>
    </header>
  );
};
