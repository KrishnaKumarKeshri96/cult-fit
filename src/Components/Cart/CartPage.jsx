import styled from "styled-components";
import styles from "./cartPage.module.css";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CartPage = () => {
  const { id } = useParams();
  console.log("id:", id);

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
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8080/product/${id}`).then((data) => {
      setProduct(data.data);
    });
  }, [id]);

  return (
    <>
      <Navbar />
      <div className={styles["store"]}>
        <div className={styles["store__left"]}>
          {product.img?.map((e) => (
            <img src={e} alt="" />
          ))}
        </div>
        <div className={styles["store__right"]}>
          <h4>CULTSPORT</h4>

          <h1>{product.name}</h1>

          <div className={styles["store__right__pricing"]}>
            <DiscountedPrice>&#8377; {product.actualPrice}</DiscountedPrice>
            <Striked>
              <h2>&#8377; {product.price}</h2>
            </Striked>
            <h4 style={discount}> {product.disc}% off</h4>
          </div>

          <p className={styles["store__right__desc"]}>{product.desc}</p>

          <ChooseSizeHead>
            Choose Size &nbsp;
            <span>{"(Size Guide)"}</span>
          </ChooseSizeHead>

          <div className={styles["store__right__btns"]}>
            {product.size?.map((e) => (
              <button>{e.toUpperCase()}</button>
            ))}
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
      <Footer />
    </>
  );
};

export { CartPage };
