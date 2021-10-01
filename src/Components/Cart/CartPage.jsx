import styled from "styled-components";
import styles from "./cartPage.module.css";

const CartPage = () => {
  const discount = { color: "#ffff", background: "#F5A623", padding: "5px" };
  const DiscountedPrice = styled.h2`
    color: #ff3278;
  `;
  const Striked = styled.p`
    color: #070707;
    & h2 {
      margin: 0;
      text-decoration: line-through;
    }
  `;
  const ChooseSizeHead = styled.p`
    & span {
      text-decoration: none;
      color: #ff3278;
    }
  `;
  const List = styled.li`
    color: #070707;
    font-weight: bold;
  `;

  return (
    <>
      <div className={styles["store"]}>
        <div className={styles["store__left"]}>
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/kh7tcNoMNv17ZfpXfU7xhpj9"
            alt="hero-1"
          />
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/gGfqpST2Jc1i29suyLsMXbkh"
            alt="hero-2"
          />
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/pqC9f4Xtkc7Bdiig7v6wXpa7"
            alt="hero-3"
          />
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/tysaNrNC7HLmguhWeK64Hf35"
            alt="hero-4"
          />
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/oKAskHYNzgsBCxpsq43qa3Ek"
            alt="hero-5"
          />
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/L9oguNRiuF92iHXGEoRwLrnj"
            alt="hero-6"
          />
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/fY142Axc219SN4SSgEnUqaEG"
            alt="hero-7"
          />
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/G41hspCXaSdSJ56DPKCEP9Qg"
            alt="hero-8"
          />
        </div>
        <div className={styles["store__right"]}>
          <h4>CULTSPORT</h4>

          <h1>Knockout Sports Vest</h1>

          <div className={styles["store__right__pricing"]}>
            <DiscountedPrice>&#8377; 269</DiscountedPrice>
            <Striked>
              <h2>&#8377; 899</h2>
            </Striked>
            <h4 style={discount}> 70% off</h4>
          </div>

          <p className={styles["store__right__desc"]}>
            For those who like to workout in style, this vest from cultsport
            promises the best of all worlds. Enjoy superior performance and
            comfort combined with our moisture-wicking Flydry tech in this vest
            that's meant to support you through workouts of all kinds.
          </p>

          <ChooseSizeHead>
            Choose Size &nbsp;
            <span>{"(Size Guide)"}</span>
          </ChooseSizeHead>

          <div className={styles["store__right__btns"]}>
            <button disabled style={{ cursor: "no - drop", border: "none" }}>
              S
            </button>
            <button>M</button>
            <button>L</button>
            <button>XL</button>
            <button>XXL</button>
          </div>

          <div className={styles["store__right__buy"]}>
            <button>Add to Cart</button>
            <button>Buy Now</button>
          </div>

          <div className={styles["store__right__productDetails"]}>
            <h4>PRODUCT DETAILS</h4>
            <ul>
              <li>Color: White</li>
              <li>Flydry Technology</li>
              <li>Anti-Microbial Finish</li>
            </ul>
          </div>

          <hr />

          <div className={styles["store__right__location"]}>
            <input type="text" placeholder="Enter your pincode" />
          </div>

          <div className={styles["store__right__delivery"]}>
            <ul>
              <li> Free delivery within 5-7 days</li>
              <li>30 day return and exchange</li>
              <List>
                To minimise contact between you and the delivery partner, Pay on
                Delivery option is temporarily disabled.
              </List>
            </ul>
          </div>

          <hr />

          <div className={styles["store__right__material"]}>
            <h4>Fabric</h4>
            <ul>
              <li>Color: 100% Polyester</li>
            </ul>
          </div>
          <hr />
          <div className={styles["store__right__material"]}>
            <h4>Material and Care</h4>
            <ul>
              <li>Color: White</li>
              <li>Flydry Technology</li>
              <li>Anti-Microbial Finish</li>
            </ul>
          </div>
          <hr />
          <div className={styles["store__right__material"]}>
            <h4>Spefications</h4>
            <p>Country of Origin : India</p>
          </div>
        </div>
      </div>
    </>
  );
};

export { CartPage };
