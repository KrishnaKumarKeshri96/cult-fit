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
    <div className="home_card_section container">
      <div className="top_section">
        <img src={title} alt="Cult" />
        <div className="sub_heading_section">
          <h3 className="subheading">{subTitle}</h3>
          <Link to="/">
            Explore
            <img src={arrow} alt="Arrow" />
          </Link>
        </div>
        <p>{description}</p>
      </div>

      <div className="slider_section">
        <div className="cards">
          <div className="card card1">
            <img className="card1img" src={products.img[0]} alt="" />
            <h3>{products.title[0]}</h3>
            <div className="content">
              <p>{products.description[0]}</p>
              <button className="button_style1">{products.btn[0]}</button>
            </div>
          </div>
          <div className="card card2">
            <img className="card2img" src={products.img[1]} alt="" />
            <h3>{products.title[1]}</h3>
            <div className="content">
              <p>{products.description[1]}</p>
              <button className="button_style1">{products.btn[1]}</button>
            </div>
          </div>
          <div className="card card3">
            <img className="card3img" src={products.img[2]} alt="" />
            <h3>{products.title[2]}</h3>
            <div className="content">
              <p>{products.description[2]}</p>
              <button className="button_style1">{products.btn[2]}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
