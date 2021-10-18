import { Link, useHistory } from "react-router-dom";
import arrow from "../../images/back-arrow-pink.svg";
import "./sliding.css";
import { useState, useEffect, useRef } from "react";

// identify if element is in viewport function
function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = new IntersectionObserver(
    ([entry]) => setIntersecting(entry.isIntersecting),
    { rootMargin: "0px" }
  );

  useEffect(() => {
    observer.observe(ref.current);
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  return isIntersecting;
}

// for getting window width
function getWindowDimensions() {
  const { innerWidth: width } = window;
  return {
    width,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export const SliderCardHomePAge = ({
  products,
  title,
  subTitle,
  description,
}) => {
  const { width } = useWindowDimensions();
  const ref = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const isVisible = useOnScreen(ref); // Trigger if 200px is visible from the element
  const isVisible2 = useOnScreen(ref2); // Trigger if 200px is visible from the element
  const isVisible3 = useOnScreen(ref3); // Trigger if 200px is visible from the element

  if (isVisible) {
    ref.current.style.opacity = 1;
    ref.current.style.transform = "translateY(0px)";
    // console.log("1");
  }
  if (isVisible2) {
    ref2.current.style.opacity = 1;
    ref2.current.style.transform = "translateY(0px)";
    // console.log("2");
  }
  if (isVisible3) {
    ref3.current.style.opacity = 1;
    ref3.current.style.transform = "translateY(0px)";
    // console.log("3");
  }

  const history = useHistory();
  const handleCard1 = (e) => {
    if (width > 768) {
      e.target.parentElement.parentElement.style.gridTemplateColumns =
        "3fr 1fr 1fr";

      const [card1, card2, card3] =
        e.target.parentElement.parentElement.childNodes;
      card1.lastChild.style.transform = "translateX(0px)";
      card1.lastChild.style.opacity = "1";
      card2.lastChild.style.opacity = "0";
      card3.lastChild.style.opacity = "0";
    } else {
      e.target.parentElement.parentElement.style.gridTemplateRows =
        "3.3fr 1fr 1fr";

      const [card1, card2, card3] =
        e.target.parentElement.parentElement.childNodes;
      card1.lastChild.style.transform = "translateY(0px)";
      card1.lastChild.style.opacity = "1";
      card2.lastChild.style.opacity = "0";
      card3.lastChild.style.opacity = "0";
    }
  };

  const handleCard2 = (e) => {
    if (width > 768) {
      e.target.parentElement.parentElement.style.gridTemplateColumns =
        "1fr 3fr 1fr";

      const [card1, card2, card3] =
        e.target.parentElement.parentElement.childNodes;
      card2.lastChild.style.transform = "translateX(0px)";
      card2.lastChild.style.opacity = "1";
      card1.lastChild.style.opacity = "0";
      card3.lastChild.style.opacity = "0";
    } else {
      e.target.parentElement.parentElement.style.gridTemplateRows =
        "1fr 3.3fr 1fr";

      const [card1, card2, card3] =
        e.target.parentElement.parentElement.childNodes;
      card2.lastChild.style.transform = "translateY(0px)";
      card2.lastChild.style.opacity = "1";
      card1.lastChild.style.opacity = "0";
      card3.lastChild.style.opacity = "0";
    }
  };

  const handleCard3 = (e) => {
    if (width > 768) {
      e.target.parentElement.parentElement.style.gridTemplateColumns =
        "1fr 1fr 3fr";

      const [card1, card2, card3] =
        e.target.parentElement.parentElement.childNodes;
      card3.lastChild.style.transform = "translateX(0px)";
      card3.lastChild.style.opacity = "1";
      card1.lastChild.style.opacity = "0";
      card2.lastChild.style.opacity = "0";
    } else {
      e.target.parentElement.parentElement.style.gridTemplateRows =
        "1fr 1fr 3.3fr";

      const [card1, card2, card3] =
        e.target.parentElement.parentElement.childNodes;
      card3.lastChild.style.transform = "translateY(0px)";
      card3.lastChild.style.opacity = "1";
      card1.lastChild.style.opacity = "0";
      card2.lastChild.style.opacity = "0";
    }
  };

  return (
    <div className="home_card_section container">
      <div className="top_section">
        <img src={title} alt="Cult" />
        <div className="sub_heading_section">
          <h3 className="subheading">{subTitle}</h3>
          <Link to="/">
            <span>Explore</span>
            <img src={arrow} alt="Arrow" />
          </Link>
        </div>
        <p>{description}</p>
      </div>

      <div className="slider_section">
        <div className="cards">
          <div ref={ref} className="card card1 show_on_scroll">
            <img
              className="card1img"
              src={products.img[0]}
              alt=""
              onMouseOver={(e) => {
                handleCard1(e);
              }}
            />
            <h3>{products.title[0]}</h3>
            <div class="content">
              <p>{products.description[0]}</p>
              <button
                onClick={() => {
                  history.push("/cult");
                }}
                className="button_style1"
              >
                {products.btn[0]}
              </button>
            </div>
          </div>

          <div ref={ref2} className="card card2 show_on_scroll">
            <img
              src={products.img[1]}
              alt=""
              onMouseOver={(e) => {
                handleCard2(e);
              }}
            />
            <h3>{products.title[1]}</h3>
            <div className="content">
              <p>{products.description[1]}</p>
              <button className="button_style1">{products.btn[1]}</button>
            </div>
          </div>

          <div ref={ref3} className="card card3 show_on_scroll">
            <img
              src={products.img[2]}
              alt=""
              onMouseOver={(e) => {
                handleCard3(e);
              }}
            />
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
