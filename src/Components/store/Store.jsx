import React from "react";
import styles from "./store.module.css";
import Grid from "./Grid";
import Carousel from "./Carousel";
import ProductCard from "./ProductCard";

import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Image arrays
const mainCat = [
  {
    img: "cat-men",
    category: "MEN",
  },
  {
    img: "cat-women",
    category: "WOMEN",
  },
  {
    img: "cat-equipment",
    category: "EQUIPMENT",
  },
  {
    img: "cat-accessories",
    category: "ACCESSORIES",
  },
  {
    img: "cat-vitamins",
    category: "VITAMINS",
  },
];
const workoutCat = [
  {
    img: "workout1",
    category: "YOGA",
  },
  {
    img: "workout2",
    category: "EQUIPMENT",
  },
  {
    img: "workout3",
    category: "EQUIPMENT",
  },
  {
    img: "workout4",
    category: "WOMEN",
  },
];
const allCat1 = [
  {
    img: "tshirts",
    category: "T-SHIRTS",
  },
  {
    img: "sweatshirts",
    category: "SWEATSHIRTS",
  },
  {
    img: "joggers",
    category: "JOGGERS",
  },
  {
    img: "sportsbra",
    category: "SPORTS BRA",
  },
  {
    img: "equipment2",
    category: "EQUIPMENT",
  },
];
const allCat2 = [
  {
    img: "leggings",
    category: "LEGGINGS",
  },
  {
    img: "yoga",
    category: "YOGA",
  },
  {
    img: "accessories",
    category: "ACCESSORIES",
  },
  {
    img: "shorts",
    category: "SHORTS",
  },
  {
    img: "mask",
    category: "MASK",
  },
];
const spotlight = ["spotlight1", "spotlight2"];
const carousel1 = ["car1", "car2", "car3", "car4"];

//Store component
const Store = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://secure-plateau-49386.herokuapp.com/product/productMain")
      .then((items) => {
        console.log(items);
        setItems(items.data);
      });
  }, []);
  return (
    <>
      <Navbar />
      <div className={styles.banner}>
        <img src="img/store/cult1.png" alt="banner" />
      </div>
      <div className={styles.maxWidthContainer}>
        <div className={styles.gridContainer}>
          <Grid
            list={mainCat.map((el) => [`img/store/${el.img}.png`, el.category])}
          />
        </div>
      </div>
      <div className={styles.maxWidthContainer}>
        <div className={styles.bannerTitle}>Shop by Workout</div>
        <div style={{ gap: "2%" }} className={styles.gridContainer}>
          <Grid
            list={workoutCat.map((el) => [
              `img/store/${el.img}.jpeg`,
              el.category,
            ])}
          />
        </div>
      </div>
      <div className={styles.maxWidthContainer}>
        <div
          style={{
            padding: "25px 0px 15px",
          }}
          className={styles.bannerTitle}
        >
          Shop by Collection
        </div>
      </div>
      <div className={styles.carousel}>
        <Carousel list={carousel1.map((el) => `img/store/${el}.jpeg`)} />
      </div>
      <div className={styles.maxWidthContainer}>
        <div className={styles.bannerTitle}>Shop by Category</div>
        <div style={{ gap: "2%" }} className={styles.gridContainer}>
          <Grid
            list={allCat1.map((el) => [
              `img/store/cat-${el.img}.png`,
              el.category,
            ])}
          />
        </div>
      </div>
      <div className={styles.maxWidthContainer}>
        <div style={{ gap: "2%" }} className={styles.gridContainer}>
          <Grid
            list={allCat2.map((el) => [
              `img/store/cat-${el.img}.png`,
              el.category,
            ])}
          />
        </div>
      </div>
      <div className={styles.maxWidthContainer}>
        <div className={styles.bannerTitle}>Spotlight</div>
        <div style={{ gap: "2%" }} className={styles.gridContainer}>
          <Grid list={spotlight.map((el) => [`img/store/${el}.jpeg`, ""])} />
        </div>
      </div>
      <h2 className={styles.bestseller}>Best Seller</h2>
      <div className={styles.maxWidthContainer}>
        <div className={styles.productListHeader}>
          <div className="spaceBetween"></div>
        </div>
        <div style={{ gap: "1%" }} className={styles.gridContainer}>
          {items?.map((e) => (
            <Link key={e._id} to={`/landing/${e._id}`}>
              <ProductCard {...e} />
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Store;
