import "./Navbar.css";
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
    <header className="nav_section">
      <img src={logo} alt="Logo" />
      <nav>
        <span>
          <img src={cultIcon} alt="" />
          Cult
        </span>
        <span>
          <img src={liveFit} alt="" />
          Live
        </span>
        <span>
          <img src={eatIcon} alt="" />
          Eat
        </span>
        <span>
          <img src={mindIcon} alt="" />
          Mind
        </span>
        <span>
          <img src={carefit} alt="" />
          Care
        </span>
        <span>
          <img src={storeIcon} alt="" />
          Store
        </span>
      </nav>

      <div className="right_section">
        <span>Bangalore</span>
        <div>
          <img src={userImg} alt="" />
          <span>Login</span>
        </div>
        <span>
          <img src={cart} alt="Cart" />
        </span>
      </div>
    </header>
  );
};
