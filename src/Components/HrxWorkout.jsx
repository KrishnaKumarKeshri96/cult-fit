import {
  ContentDiv,
  PosterDiv,
  PosterImg,
  WrapperDiv,
  Calories,
  PurpleButton,
  ColorBar,
  Bars,
  BookClass,
  MCard,
  BCrumbs,
  SelectCenters,
  Cross,
  CentersDiv,
  MapDiv,
  PopDiv,
  Loc,
  Pink,
} from "../Styled/Styles";

// import { Map } from "react-store-locator";

import banner from "../Hrx/PRODUCT_BNR_2020-03-04T11_36_46.png";
import cross from "../Hrx/cross.png";
import { Link, useHistory } from "react-router-dom";

// import { Breadcrumbs } from "@mui/material";
import { useContext, useState } from "react";
// import { AppContext } from "../Contexts/AppContext";

export const HrxWorkout = () => {
  const history = useHistory();
  // const { chooseCenter, setChooseCenter } = useContext(AppContext);
  const [chooseCenter, setChooseCenter] = useState(false);
  const handleSelectedCenter = (store) => {
    history.push("/classbooking");
  };

  const locations = [
    {
      store_name: "Cult Abids",
      address:
        "1st Floor, Above Samsung, Sagar Plaza, Koti, Abids, Hyderabad, Hyderabad",
      long: "17.387270",
      lat: "78.478058",
    },
    {
      store_name: "Cult Abids",
      address:
        "1st Floor, Above Samsung, Sagar Plaza, Koti, Abids, Hyderabad, Hyderabad",
      long: "17.387270",
      lat: "78.478058",
    },
    {
      store_name: "Cult Abids",
      address:
        "1st Floor, Above Samsung, Sagar Plaza, Koti, Abids, Hyderabad, Hyderabad",
      long: "17.387270",
      lat: "78.478058",
    },
    {
      store_name: "Cult Abids",
      address:
        "1st Floor, Above Samsung, Sagar Plaza, Koti, Abids, Hyderabad, Hyderabad",
      long: "17.387270",
      lat: "78.478058",
    },
    {
      store_name: "Cult Abids",
      address:
        "1st Floor, Above Samsung, Sagar Plaza, Koti, Abids, Hyderabad, Hyderabad",
      long: "17.387270",
      lat: "78.478058",
    },
    {
      store_name: "Cult Abids",
      address:
        "1st Floor, Above Samsung, Sagar Plaza, Koti, Abids, Hyderabad, Hyderabad",
      long: "17.387270",
      lat: "78.478058",
    },
    {
      store_name: "Cult Abids",
      address:
        "1st Floor, Above Samsung, Sagar Plaza, Koti, Abids, Hyderabad, Hyderabad",
      long: "17.387270",
      lat: "78.478058",
    },
    {
      store_name: "Cult Abids",
      address:
        "1st Floor, Above Samsung, Sagar Plaza, Koti, Abids, Hyderabad, Hyderabad",
      long: "17.387270",
      lat: "78.478058",
    },
  ];

  const handleBookClass = () => {
    setChooseCenter(!chooseCenter);
  };

  const handleClick = () => {};
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      //   onClick={handleClick}
    >
      <Calories> Home</Calories>
    </Link>,

    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/cult"
      //   onClick={handleClick}
    >
      <Calories> Cult</Calories>
    </Link>,
    <Link
      underline="hover"
      key="3"
      color="inherit"
      href="/atcenter"
      //   onClick={handleClick}
    >
      <Calories> At Center</Calories>
    </Link>,
    <Calories>HRX Workout</Calories>,
  ];
  return (
    <>
      {chooseCenter && (
        <>
          <SelectCenters>
            <Cross onClick={handleBookClass} alt="cross" src={cross}></Cross>

            <PopDiv>
              <CentersDiv style={{ overflow: "scroll" }}>
                {locations.map((location) => (
                  <Loc>
                    <h3
                      style={{
                        textAlign: "left",
                        marginBottom: "20px",
                        marginTop: "10px",
                      }}
                    >
                      {location.store_name}{" "}
                      <Pink
                        onClick={() =>
                          handleSelectedCenter(location.store_name)
                        }
                      >
                        SELECT
                      </Pink>
                    </h3>

                    <p style={{ textAlign: "left", marginBottom: "10px" }}>
                      {location.address}
                    </p>
                  </Loc>
                ))}
              </CentersDiv>
              <MapDiv>
                {/* <Map
                  locations={locations}
                  googleApiKey="AIzaSyAXtbGLynY_L4A5FWUx6cY6859BjMvVYeM"
                ></Map> */}
                <code>
                  <iframe
                    title="s"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.5109355979366!2d78.47585641418758!3d17.387250907387152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb999576599015%3A0x555db77e57b70678!2sCult%20Abids!5e0!3m2!1sen!2sin!4v1633005771850!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    style={{ border: "0" }}
                    allowfullscreen=""
                    loading="lazy"
                  ></iframe>
                </code>
              </MapDiv>
            </PopDiv>
          </SelectCenters>
        </>
      )}
      <WrapperDiv>
        {/* Poster Div */}
        <PosterDiv>
          <PosterImg alt="poster" src={banner}></PosterImg>
        </PosterDiv>

        {/* ===================== */}

        <ContentDiv>
          {/* <BCrumbs>
            <Breadcrumbs
              // separator={<NavigateNextIcon fontSize="small" />}
              separator={<Calories> > </Calories>}
              aria-label="breadcrumb"
            >
              {breadcrumbs}
            </Breadcrumbs>
          </BCrumbs> */}
          {/* <SubHead>Hrx Workout</SubHead> */}
          {/* here starts card */}

          <MCard>
            <h2 style={{ textAlign: "left", marginBottom: "20px" }}>
              HRX Workout
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                clear: "both",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Calories>CALORES</Calories>
                <div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <img
                      style={{ width: "20px", height: "26px" }}
                      alt="fire"
                      src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_20,ar_0.78,c_fit/dpr_2/image/icons/cult/calorie.png"
                    />
                    <div style={{ padding: "5px" }}>400</div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "70px",
                }}
              >
                <Calories>INTENSITY</Calories>
                <div
                  style={{
                    height: "7px",
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "12px",
                  }}
                >
                  <div
                    style={{
                      background: "black",
                      borderRadius: "100px 0px 0px 100px",
                      marginRight: "3px",
                      height: "7px",
                      width: "70px",
                    }}
                  ></div>
                  <div
                    style={{
                      background: "black",
                      borderRadius: "0px 0px 0px 0px",
                      marginRight: "3px",
                      height: "7px",
                      width: "70px",
                    }}
                  ></div>
                  <div
                    style={{
                      background: "grey",
                      borderRadius: "0px 100px 100px 0px",
                      marginRight: "3px",
                      height: "7px",
                      width: "70px",
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <h3
              style={{
                textAlign: "left",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              BENIFIT
            </h3>
            <p style={{ textAlign: "left", marginBottom: "20px" }}>
              Core Strength | Full body strength | Muscle Gain | Mobility{" "}
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginBottom: "30px",
              }}
            >
              <PurpleButton>Strength</PurpleButton>
              <PurpleButton style={{ marginLeft: "30px" }}>
                Athletic Performance
              </PurpleButton>
            </div>
          </MCard>
          {/* here ends card */}
          <h4 style={{ textAlign: "left", marginBottom: "20px" }}>
            A typical HRX WORKOUT Session
          </h4>

          <div style={{ display: "flex", flexDirection: "row" }}>
            <Calories>Begin</Calories>
            <ColorBar
              style={{
                marginTop: "15px",
                paddingLeft: "5px",
                paddingRight: "5px",
              }}
            >
              <Bars
                style={{
                  width: "18.1818%",
                  background: "#ff8a8c",
                  height: "10px",
                  borderRadius: "5px 0px 0px 5px",
                }}
              ></Bars>
              <Bars
                style={{
                  width: "15.9090%",
                  background: "#ffdc18",
                  height: "10px",
                }}
              ></Bars>
              <Bars
                style={{
                  width: "45.4545%",
                  background: "#00e5ff",
                  height: "10px",
                }}
              ></Bars>
              <Bars
                style={{
                  width: "9.09%",
                  background: "#e7b6fe",
                  height: "10px",
                }}
              ></Bars>
              <Bars
                style={{
                  width: "11.36%",
                  background: "#ff8a8c",
                  height: "10px",
                  borderRadius: "0px 5px 5px 0px",
                }}
              ></Bars>
            </ColorBar>
            <Calories>44 Min</Calories>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Bars
                style={{
                  width: "30px",
                  background: "#ff8a8c",
                  height: "10px",
                  borderRadius: "5px 5px 5px 5px",
                  marginRight: "20px",
                  marginTop: "25px",
                }}
              ></Bars>
              <Calories style={{ marginTop: "15px", marginRight: "25px" }}>
                8 Mins
              </Calories>

              <div style={{ marginTop: "23px" }}>Warm Up</div>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Bars
                style={{
                  width: "30px",
                  background: "#ffdc18",
                  height: "10px",
                  borderRadius: "5px 5px 5px 5px",
                  marginRight: "20px",
                  marginTop: "25px",
                }}
              ></Bars>
              <Calories style={{ marginTop: "15px", marginRight: "25px" }}>
                7 Mins
              </Calories>

              <div style={{ marginTop: "23px" }}>Workout Intro</div>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Bars
                style={{
                  width: "30px",
                  background: "#00e5ff",
                  height: "10px",
                  borderRadius: "5px 5px 5px 5px",
                  marginRight: "20px",
                  marginTop: "25px",
                }}
              ></Bars>
              <Calories style={{ marginTop: "15px", marginRight: "25px" }}>
                20 Min
              </Calories>

              <div style={{ marginTop: "23px" }}>
                Workout 1 focused on a muscle group
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Bars
                style={{
                  width: "30px",
                  background: "#e7b6fe",
                  height: "10px",
                  borderRadius: "5px 5px 5px 5px",
                  marginRight: "20px",
                  marginTop: "25px",
                }}
              ></Bars>
              <Calories style={{ marginTop: "15px", marginRight: "25px" }}>
                4 Mins
              </Calories>

              <div style={{ marginTop: "23px" }}>
                Workout 2 focused on core strength
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Bars
                style={{
                  width: "30px",
                  background: "#ff8a8c",
                  height: "10px",
                  borderRadius: "5px 5px 5px 5px",
                  marginRight: "20px",
                  marginTop: "25px",
                }}
              ></Bars>
              <Calories style={{ marginTop: "15px", marginRight: "25px" }}>
                5 Mins
              </Calories>

              <div style={{ marginTop: "23px" }}>Cool Down</div>
            </div>
          </div>
          {/* <div style={{ float: "right", marginRight: "70px" }}> */}
          {/* <button>BOOK CLASS</button> */}
          <BookClass onClick={handleBookClass}>BOOK CLASS</BookClass>
          {/* </div> */}
          <div style={{ clear: "both" }}>
            <br />
            <hr></hr>
            <div style={{ textAlign: "left" }}>
              A combination of primal movements, zero momentum reps &
              conditioning routines designed to improve muscle endurance and
              building lasting fitness.
            </div>
            <br />
          </div>
        </ContentDiv>
      </WrapperDiv>
    </>
  );
};
