import React, { useContext } from "react";
import styles from "./Cult.module.css";
import Timer from "./Timer";
import SubscriptionCard from "./SubscriptionCard";
import WorkoutGrid from "./WorkoutGrid";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import { AppContext } from "../../Contextxts/AppContext";

const Cult = () => {
  const { history } = useContext(AppContext);
  return (
    <>
      <Navbar />
      <div className={`${styles.maxWidthContainer} ${styles.mt}`}>
        <img src="img/cult/cult1.png" alt="Ad" />
      </div>
      <div className={`${styles.fixWidthContainer} ${styles.tbPadding}`}>
        <img src="img/cult/cult2.png" alt="Ad" />
        <Timer />
      </div>

      <div className={styles.fixWidthContainer}>
        <div className={styles.tbPadding}>
          <div className={styles.title}>Two Free Trials</div>
          <p className={styles.subtitle}>Experience Cult classes for free</p>
          <div className={styles.tickets}>
            <div>
              <h3>01</h3>
              <button
                onClick={() => {
                  history.push("/hrx");
                }}
              >
                Try for free
              </button>
            </div>
            <div>
              <h3>02</h3>
              <button
                onClick={() => {
                  history.push("/hrx");
                }}
              >
                Try for free
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.maxWidthContainer}>
        <div className={styles.fixWidthContainer}>
          <div style={{ padding: "25px 0" }} className={styles.title}>
            See why we are the safest gym in town
          </div>
        </div>
        <img src="img/cult/cult3.png" alt="Best GYMs" />
      </div>

      {/*<------------------ Blue Wrapper -------------->*/}
      <div className={styles.maxWidthContainer}>
        <div className={styles.blueWrapper}>
          <div className={styles.fixWidthContainer}>
            <div className={styles.insideTitle}>cultpass BLACK</div>
            <div className={styles.insideSubitle}>
              Unlimited access to all cult centers, gyms and live workouts
            </div>
            <h3>
              <span className={styles.line}>
                <div></div>
              </span>
              <span>ENJOY THE BENEFITS OF</span>
              <span className={styles.line}>
                <div></div>
              </span>
            </h3>
            <div className={styles.benifits}>
              <div>
                <p>Buy Now</p>
                <span>start anytime</span>
              </div>
              <div>
                <p>Pause</p>
                <span>pack anytime</span>
              </div>
              <div>
                <p>Safest</p>
                <span>gyms In Town</span>
              </div>
              <div>
                <p>No-Cost</p>
                <span>EMI available</span>
              </div>
            </div>
            <div className={styles.heading}>Choose Your Subscription</div>
            <SubscriptionCard />
          </div>
        </div>
      </div>

      <div className={`${styles.fixWidthContainer} ${styles.tbPadding}`}>
        <div className={styles.gridTitle}>WORKOUTS</div>
        <WorkoutGrid />
      </div>

      <div className={`${styles.fixWidthContainer} ${styles.tbPadding}`}>
        <div className={styles.gridTitle}>Quick Links</div>
        <div className={styles.quickLink}>Help & Support</div>
        <hr />
        <div className={styles.quickLink}>Terms and Conditions</div>
        <hr />
      </div>

      <div className={`${styles.fixWidthContainer} ${styles.tbPadding}`}>
        <div className={styles.quote1}>BE SPIRITED</div>
        <div className={styles.quote2}>FEARLESS</div>
        <div className={styles.quote3}>AN EVERYDAY ATHLETE</div>
      </div>
      <Footer />
    </>
  );
};

export default Cult;
