import { Link } from "react-router-dom";
import "./static.css";

import appStore from "../../images/app-store.svg";

import playStore from "../../images/play-store.svg";
import getTheCult from "../../images/phone get the cult.webp";
import business from "../../images/business-cult.webp";
import career from "../../images/careers-cult.webp";

export const StaicLanding = () => {
  return (
    <>
      <div class="get_the_app_section">
        <div class="container">
          <div class="left_section">
            <h3>Get the cult.fit app for your mobile device</h3>
            <p>Be better everyday with cult.fit app</p>
            <div>
              <Link to="/">
                <img src={appStore} alt="App store" />
              </Link>
              <Link to="/">
                <img src={playStore} alt="Play store" />
              </Link>
            </div>
          </div>
          <div class="right_section">
            <img src={getTheCult} alt="" />
          </div>
        </div>
      </div>

      <div class="cult_business_section">
        <img src={business} alt={`Introducing cult for business`} />
      </div>

      <div class="cult_career_section">
        <img src={career} alt="Careers at cult" />
      </div>

      <div class="be_better_section">
        <div class="container">
          <h2>
            Be better <span>everyday</span>
          </h2>
        </div>
      </div>
    </>
  );
};
