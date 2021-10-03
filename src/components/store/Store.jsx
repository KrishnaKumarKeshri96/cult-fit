import React from "react";
import styles from "./Store.module.css";
import Grid from "../../components/Grid";
import Carousel from "./Carousel";

// Image arrays
const mainCat = [
  "cat-men",
  "cat-women",
  "cat-equipment",
  "cat-accessories",
  "cat-vitamins",
];
const workoutCat = ["workout1", "workout2", "workout3", "workout4"];
const allCat1 = [
  "tshirts",
  "sweatshirts",
  "joggers",
  "sportsbra",
  "equipment2",
];
const allCat2 = ["leggings", "yoga", "accessories", "shorts", "mask"];
const spotlight = ["spotlight1", "spotlight2"];
const carousel1 = ["car1", "car2", "car3", "car4"];

//Store component
const Store = () => {
  return (
    <>
      <div className={styles.banner}>
        <img src="img/store/cult1.png" alt="banner" />
      </div>
      <div className={styles.maxWidthContainer}>
        <div className={styles.gridContainer}>
          <Grid list={mainCat.map((el) => `img/store/${el}.png`)} />
        </div>
      </div>
      <div className={styles.maxWidthContainer}>
        <div className={styles.bannerTitle}>Shop by Workout</div>
        <div style={{ gap: "2%" }} className={styles.gridContainer}>
          <Grid list={workoutCat.map((el) => `img/store/${el}.jpeg`)} />
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
          <Grid list={allCat1.map((el) => `img/store/cat-${el}.png`)} />
        </div>
      </div>
      <div className={styles.maxWidthContainer}>
        <div style={{ gap: "2%" }} className={styles.gridContainer}>
          <Grid list={allCat2.map((el) => `img/store/cat-${el}.png`)} />
        </div>
      </div>
      <div className={styles.maxWidthContainer}>
        <div className={styles.bannerTitle}>Spotlight</div>
        <div style={{ gap: "2%" }} className={styles.gridContainer}>
          <Grid list={spotlight.map((el) => `img/store/${el}.jpeg`)} />
        </div>
      </div>
    </>
  );
};

export default Store;
