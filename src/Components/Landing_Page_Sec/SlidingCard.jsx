import { Link } from "react-router-dom";
import arrow from "../../images/back-arrow-pink.svg";
import "./sliding.css";

export const SliderCardHomePAge = ({
  products,
  title,
  subTitle,
  description,
}) => {
  return (
    <div class="home_card_section container">
      <div class="top_section">
        <img src={title} alt="Cult" />
        <div class="sub_heading_section">
          <h3 class="subheading">{subTitle}</h3>
          <Link to="/">
            Explore
            <img src={arrow} alt="Arrow" />
          </Link>
        </div>
        <p>{description}</p>
      </div>

      <div class="slider_section">
        <div class="cards">
          <div class="card card1">
            <img class="card1img" src={products.img[0]} alt="" />
            <h3>{products.title[0]}</h3>
            <div class="content">
              <p>{products.description[0]}</p>
              <button class="button_style1">{products.btn[0]}</button>
            </div>
          </div>
          <div class="card card2">
            <img class="card2img" src={products.img[1]} alt="" />
            <h3>{products.title[1]}</h3>
            <div class="content">
              <p>{products.description[1]}</p>
              <button class="button_style1">{products.btn[1]}</button>
            </div>
          </div>
          <div class="card card3">
            <img class="card3img" src={products.img[2]} alt="" />
            <h3>{products.title[2]}</h3>
            <div class="content">
              <p>{products.description[2]}</p>
              <button class="button_style1">{products.btn[2]}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
