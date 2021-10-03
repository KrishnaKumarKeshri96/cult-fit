import React, { useState, useContext } from "react";
// import { Link } from "react-router-dom";
import styles from "./CultPacks.module.css";
import DateSelector from "./DateSelector";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import { AppContext } from "../../Contextxts/AppContext";
import { Login } from "../Login/Login";

const workouts = ["Yoga", "Boxing", "S&C", "HRX Workout", "Dance Fitness"];
// const isAuth = true;

const CultPacks = () => {
  const { isLoggedIn, history } = useContext(AppContext);
  const [selectedDate, setSelectedDate] = useState(null);
  const [hide, setHide] = useState(true);

  const handleGetPack = () => {
    if (!isLoggedIn) {
      setHide(false);
    } else if (selectedDate) {
      history.push("/packcheckout");
    } else {
      alert("Please select a starting date");
    }
    // !isLoggedIn ? setHide( false ) : selectedDate ? history.push( "/packcheckout" ) :
  };

  const handleHide = () => {
    setHide(true);
  };

  return (
    <>
      <Login hide={hide} handleHide={handleHide} />
      <Navbar />
      <div>
        <div className={styles.leftContainer}>
          <img src="img/cultPacks/pack1.png" alt="pack" />
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.breadCrumb}>
            <span>Home {" > "}</span>
            <span>cult.fit {" > "}</span>
            <span>cult.fit packs</span>
          </div>
          <div className={styles.topContainer}>
            <h1>3 Months cultpass BLACK</h1>
            <div className={styles.price}>
              <div className={styles.new}>₹ 6490 </div>
              <div className={styles.old}>₹ 11970</div>
            </div>
          </div>

          <div className={styles.optionContainer}>
            {isLoggedIn ? (
              <>
                <div className={styles.center}>
                  <p>Preferred centre: </p>
                  <div>
                    <img src="img/cultPacks/location.svg" alt="locate" />
                    <div className={styles.dropDownLocation}>
                      <p>Cult Satellite</p>
                      {/* <img src="img/cultPacks/down-arrow.svg" alt="arrow" /> */}
                    </div>
                  </div>
                </div>
                <div className={styles.date}>
                  <p>Starts on </p>
                  <div>
                    <img src="img/cultPacks/day.svg" alt="locate" />
                    <div className={styles.dropDownLocation}>
                      {/* <p>Pick a Start Date</p> */}
                      <p>
                        <DateSelector
                          selectedDate={selectedDate}
                          setSelectedDate={setSelectedDate}
                        />
                        {/* <input type="text" placeholder="Pick a Start Date" /> */}
                      </p>
                      <img src="img/cultPacks/down-arrow.svg" alt="arrow" />
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div></div>
            )}
          </div>
          {/* <Link to={selectedDate ? "/packcheckout" : "/cultpacks"}> */}
          <div onClick={handleGetPack} className={styles.button}>
            {!isLoggedIn
              ? "Get Pack"
              : selectedDate
              ? "Get Pack"
              : "Pick a start date"}
          </div>
          {/* </Link> */}
          <hr />

          <div className={styles.contentWrapper}>
            <div className={styles.title}>Offer</div>
            <div className={styles.subtitle}>
              <div className={styles.tag}>
                <img src="img/cultPacks/tag.svg" alt="tag" />
              </div>
              <div className={styles.tnc}>
                Ends Tonight I Get FREE 2 Month Extension
                <span> T&C</span>
              </div>
            </div>
            <div className={styles.subtitle}>
              <div className={styles.tag}>
                <img src="img/cultPacks/tag.svg" alt="tag" />
              </div>
              <div className={styles.tnc}>
                Ends Tonight I Offer Applied I Extra Rs.1000 OFF
                <span> T&C</span>
              </div>
            </div>
            <div className={styles.subtitle}>
              <div className={styles.tag}>
                <img src="img/cultPacks/tag.svg" alt="tag" />
              </div>
              <div className={styles.tnc}>
                Only Today I Get additional Rs.500 OFF
                <span> T&C</span>
              </div>
            </div>
            <div className={styles.subtitle}>
              <div className={styles.tag}>
                <img src="img/cultPacks/tag.svg" alt="tag" />
              </div>
              <div className={styles.tnc}>
                Get FREE complementary cultpass LIVE.
                <span> T&C</span>
              </div>
            </div>
            <div className={styles.subtitle}>
              <div className={styles.tag}>
                <img src="img/cultPacks/tag.svg" alt="tag" />
              </div>
              <div className={styles.tnc}>
                No Cost EMI Available
                <span> T&C</span>
              </div>
            </div>
          </div>

          <div className={styles.contentWrapper}>
            <div className={styles.title}>About this pack</div>
            <div className={styles.subtitle}>
              Book unlimited Classes anytime at any centre in your city for 3
              months Every Cult centre offers a plethora of group workout
              formats designed and run by highly qualified fitness experts.
              These workouts are great for newbies and fitness veterans alike,
              and are guaranteed to show results.
            </div>
          </div>

          <div className={styles.contentWrapper}>
            <div className={styles.title}>Cancellation & No Shows</div>
            <div className={styles.subtitle}>
              <img src="img/cultPacks/cancellation.svg" alt="tag" />
              <p>Cancellation of your booked slots</p>
            </div>
          </div>
          <hr />

          <div className={styles.contentWrapper}>
            <div className={styles.title}>How it works</div>
            <div className={styles.subtitle}>
              <img src="img/cultPacks/group.svg" alt="group" />
              <p>
                Cult centers: Book a class that you like. Reach the center on
                time and enjoy your workout
              </p>
            </div>
            <div className={styles.subtitle}>
              <img src="img/cultPacks/gym.svg" alt="gym" />
              <p>
                Gyms: Visit a cult gym at any time, check-in via your phone and
                start your workout
              </p>
            </div>
            <div className={styles.subtitle}>
              <img src="img/cultPacks/live.svg" alt="live" />
              <p>
                Live workouts: Choose from the wide variety of online workouts
                and join in from anywhere
              </p>
            </div>
          </div>
          <hr />

          <div className={styles.contentWrapper}>
            <div className={styles.title}>Workouts</div>
            <div className={styles.grid}>
              {workouts.map((el, i) => (
                <div key={i}>
                  <img src={`img/cultPacks/w${i + 1}.jpg`} alt={el} />
                  <p>{el}</p>
                </div>
              ))}
            </div>
          </div>
          <hr />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CultPacks;
