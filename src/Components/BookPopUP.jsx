import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../Contextxts/AppContext";

export const BookPopUp = ({ hide, handleHide, handleBtn }) => {
  const { isLoggedIn, history } = useContext(AppContext);

  const PopDiv = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap");
    visibility: ${hide ? "hidden" : "visible"};
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 2000;
    background-color: rgba(128, 128, 128, 0.555);
    font-family: "Josefin Sans", sans-serif;
  `;

  const Btn = styled.button`
    margin-left: 30%;
    margin-top: 20%;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    background-image: linear-gradient(
      99deg,
      rgb(247, 69, 48),
      rgb(255, 50, 120)
    );
    border: 1px solid transparent;
    padding: 6px 24px;
    font-size: 16px;
    line-height: 1.42857;
    transition: all 0.15s ease 0s;
    border-radius: 30px;
    color: rgb(255, 255, 255);
    box-shadow: none;
    opacity: 1;
  `;

  return (
    <>
      <PopDiv>
        <div
          style={{
            background: "white",
            marginTop: "5%",
            marginBottom: "5%",
            width: "400px",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <div
            style={{ cursor: "pointer", float: "right" }}
            onClick={handleHide}
          >
            X
          </div>
          <h2>Class Booking</h2>

          <div
            style={{
              marginTop: "20px",
              marginBottom: "20px",
              fontWeight: "16px",
            }}
          >
            HRX Workout <br />
            <br />
            <br />
            Sun 3rd Oct 1st floor,
            <br /> above samsung,sagar plaza, koti, abids, hyderabad
          </div>
          <hr></hr>
          <h2 style={{ marginTop: "20px" }}>Bring your own kit</h2>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginBottom: "10px",
              marginTop: "10px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ width: "50px" }}>
                <img
                  style={{ width: "100%" }}
                  alt=""
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_100,ar_1,fl_progressive,f_auto,q_auto:eco/dpr_2/image/icons/cult/shoes@3x.png"
                />
              </div>
              <div>Workout Shoes</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ width: "50px" }}>
                <img
                  style={{ width: "100%" }}
                  alt=""
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_100,ar_1,fl_progressive,f_auto,q_auto:eco/dpr_2/image/icons/cult/mobile@3x.png"
                />
              </div>
              <div>Mobile Phone</div>
            </div>{" "}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ width: "50px" }}>
                <img
                  style={{ width: "100%" }}
                  alt=""
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_100,ar_1,fl_progressive,f_auto,q_auto:eco/dpr_2/image/icons/cult/bottle@3x.png"
                />
              </div>
              <div>Water bottle</div>
            </div>{" "}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ width: "50px" }}>
                <img
                  style={{ width: "100%" }}
                  alt=""
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_100,ar_1,fl_progressive,f_auto,q_auto:eco/dpr_2/image/icons/cult/mask@3x.png"
                />
              </div>
              <div>Face Mask</div>
            </div>
          </div>
          <Btn onClick={handleBtn}>Book for free</Btn>
        </div>
      </PopDiv>
    </>
  );
};
