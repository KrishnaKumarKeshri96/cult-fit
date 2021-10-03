// import { Breadcrumbs } from "@mui/material";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../Contextxts/AppContext";

import {
  BCrumbs,
  Calories,
  ContentDiv,
  DatesDiv,
  DatesWrapper,
  DayNameDiv,
  DayNumDiv,
  GreenBtn,
  PosterDiv,
  PosterImg,
  SlotDiv,
  Slots,
  SmallBanner,
  SmallBannerImg,
  WrapperDiv,
  DownArrow,
  FilterDiv,
  SelectCenters,
  Cross,
  PopDiv,
  CentersDiv,
  MapDiv,
  Loc,
  Pink,
} from "../Styled/Styles";
import cross from "../Hrx/cross.png";
import { Login } from "./Login/Login";
import { BookPopUp } from "./BookPopUP";

export const ClassBooking = () => {
  const { isLoggedIn, history } = useContext(AppContext);
  const [chooseCenter, setChooseCenter] = useState(false);
  const [hide, setHide] = useState(true);
  const [bookPop, setBookPop] = useState(true);
  const handleHide = () => {
    setHide(!hide);
  };

  const handleBookPop = () => {
    setBookPop(!bookPop);
  };
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      // onClick={handleClick}
    >
      <Calories>cult.fit</Calories>
    </Link>,
    <Calories>Cult Abids</Calories>,
  ];
  const handleBookClass = () => {
    setChooseCenter(!chooseCenter);
  };

  const handleSelectedCenter = (store) => {
    // history.push("/workout/classbooking");
    setChooseCenter(!chooseCenter);
  };
  const handleBtn = () => {
    if (isLoggedIn) {
      //redirect to thank you
      history.push("/thanks");
    } else {
      handleHide();
    }
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

  return (
    <>
      <BookPopUp
        hide={bookPop}
        handleHide={handleBookPop}
        handleBtn={handleBtn}
      ></BookPopUp>
      <Login hide={hide} handleHide={handleHide}></Login>
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
        <PosterDiv>
          <PosterImg
            alt="store"
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_485,ar_485:605,c_fit/dpr_2/v1/cult-media/v2web/centers/226_Cult_Habsiguda_PRODUCT_BNR_2020-05-17T12%25253A12%25253A12.704Z.jpeg"
          ></PosterImg>
        </PosterDiv>

        <ContentDiv>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ marginRight: "5px" }}>
              <img
                alt="loc"
                src="https://static.cure.fit/assets/images/location_icon.svg"
              />
            </div>
            <div style={{ marginRight: "5px" }}>Cult Abids</div>

            <DownArrow onClick={handleBookClass}>
              <img
                alt="opt"
                src="https://static.cure.fit/assets/images/down-arrow-icon.svg"
              ></img>
            </DownArrow>
          </div>
          {/* <BCrumbs>
            <Breadcrumbs
              // separator={<NavigateNextIcon fontSize="small" />}
              separator={<Calories> > </Calories>}
              aria-label="breadcrumb"
            >
              {breadcrumbs}
            </Breadcrumbs>
          </BCrumbs> */}

          <DatesWrapper>
            <DatesDiv>
              <DayNameDiv>F</DayNameDiv>
              <DayNumDiv>01</DayNumDiv>
            </DatesDiv>
            <DatesDiv>
              <DayNameDiv>S</DayNameDiv>
              <DayNumDiv>02</DayNumDiv>
            </DatesDiv>
            <DatesDiv>
              <DayNameDiv>S</DayNameDiv>
              <DayNumDiv>03</DayNumDiv>
            </DatesDiv>
            <DatesDiv>
              <DayNameDiv>M</DayNameDiv>
              <DayNumDiv>04</DayNumDiv>
            </DatesDiv>

            <FilterDiv>
              <img
                alt="filter"
                src="https://static.cure.fit/assets/images/filter_icon.svg"
              />
              <span style={{ marginLeft: "10px", color: "#7a7a7a" }}>
                Filter
              </span>
            </FilterDiv>
          </DatesWrapper>

          <h3 style={{ textAlign: "left", marginBottom: "20px" }}>
            Safety Guidelines
          </h3>
          <SmallBanner>
            <SmallBannerImg style={{ marginRight: "20px" }}>
              <img
                style={{ width: "100%", marginRight: "20px" }}
                alt="bnr1"
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,c_fit/dpr_2/image/icons/cult/attendance_instruction_web.png"
              />
            </SmallBannerImg>
            <SmallBannerImg>
              <img
                style={{ width: "100%" }}
                alt="bnr2"
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,c_fit/dpr_2/image/icons/cult/center_facility_banner_web.png"
              />
            </SmallBannerImg>
          </SmallBanner>
          <Slots>
            <SlotDiv>06:00 AM</SlotDiv>
            <SlotDiv>
              <GreenBtn
                onClick={() => {
                  if (!isLoggedIn) {
                    handleHide();
                  } else {
                    handleBookPop();
                  }
                }}
              >
                HRX WORKOUT
              </GreenBtn>
            </SlotDiv>
          </Slots>
          <hr></hr>
          <Slots>
            <SlotDiv>07:00 AM</SlotDiv>
            <SlotDiv>
              <GreenBtn
                onClick={() => {
                  if (!isLoggedIn) {
                    handleHide();
                  } else {
                    handleBookPop();
                  }
                }}
              >
                HRX WORKOUT
              </GreenBtn>
            </SlotDiv>
          </Slots>
          <hr></hr>
          <Slots>
            <SlotDiv>08:00 AM</SlotDiv>
            <SlotDiv>
              <GreenBtn
                onClick={() => {
                  if (!isLoggedIn) {
                    handleHide();
                  } else {
                    handleBookPop();
                  }
                }}
              >
                HRX WORKOUT
              </GreenBtn>
            </SlotDiv>
          </Slots>
          <hr></hr>
          <Slots>
            <SlotDiv>09:00 AM</SlotDiv>
            <SlotDiv>
              <GreenBtn
                onClick={() => {
                  if (!isLoggedIn) {
                    handleHide();
                  } else {
                    handleBookPop();
                  }
                }}
              >
                HRX WORKOUT
              </GreenBtn>
            </SlotDiv>
          </Slots>
          <hr></hr>
          <Slots>
            <SlotDiv>04:00 PM</SlotDiv>
            <SlotDiv>
              <GreenBtn
                onClick={() => {
                  if (!isLoggedIn) {
                    handleHide();
                  } else {
                    handleBookPop();
                  }
                }}
              >
                HRX WORKOUT
              </GreenBtn>
            </SlotDiv>
          </Slots>
          <hr></hr>
          <Slots>
            <SlotDiv>05:00 PM</SlotDiv>
            <SlotDiv>
              <GreenBtn
                onClick={() => {
                  if (!isLoggedIn) {
                    handleHide();
                  } else {
                    handleBookPop();
                  }
                }}
              >
                HRX WORKOUT
              </GreenBtn>
            </SlotDiv>
          </Slots>
          <hr></hr>
          <Slots>
            <SlotDiv>06:00 PM</SlotDiv>
            <SlotDiv>
              <GreenBtn
                onClick={() => {
                  if (!isLoggedIn) {
                    handleHide();
                  } else {
                    handleBookPop();
                  }
                }}
              >
                HRX WORKOUT
              </GreenBtn>
            </SlotDiv>
          </Slots>
          <hr></hr>
          <Slots>
            <SlotDiv>07:00 PM</SlotDiv>
            <SlotDiv>
              <GreenBtn
                onClick={() => {
                  if (!isLoggedIn) {
                    handleHide();
                  } else {
                    handleBookPop();
                  }
                }}
              >
                HRX WORKOUT
              </GreenBtn>
            </SlotDiv>
          </Slots>
          <hr></hr>
        </ContentDiv>
      </WrapperDiv>
    </>
  );
};
