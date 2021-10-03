import React, { useState } from "react";
// import styles from "./PackCheckout.module.css";
import styled from "styled-components";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import Payment from "../Payment";

const PackCheckout = () => {
  const [hide, setHide] = useState(true);
  return (
    <>
      <Navbar />
      <Container>
        <div className="lp">
          <h4 className="title">Order Summary</h4>
          <div>
            <div>
              <p className="np">3 Months cultpass BLACK</p>
              <p className="regular">₹ 6490</p>
            </div>
            <img className="pack" src="img/cultPacks/pack1.png" alt="pack" />
          </div>
        </div>
      </Container>
      <Container>
        <div className="rp">
          <Grid>
            <div className="center">
              <img src="img/cultPacks/checkout-location.svg" alt="location" />
            </div>
            <div className="breaker">
              <h4>Preferred Center</h4>
              <p className="grey">Cult Satellite</p>
            </div>
            <div className="center">
              <img src="img/cultPacks/checkout-date.svg" alt="location" />
            </div>
            <div className="breaker">
              <h4>Starting 30th September 2021</h4>
              <p className="grey">
                Book Unlimited Classes From 30th September 2021 Onwards
              </p>
            </div>
            <div className="center">
              <img src="img/cultPacks/checkout-tag.svg" alt="location" />
            </div>
            <div className="breaker">
              <h4>What Else You Get</h4>
              <p className="grey">
                <li>Ends Tonight I Get FREE 2 Month Extension</li>
                <li>No Cost EMI Available</li>
                <li>Ends Tonight I Offer Applied I Extra Rs.1000 OFF</li>
                <li>Only Today I Get Additional Rs.500 OFF</li>
                <li>Get FREE Complementary Cultpass LIVE</li>
              </p>
            </div>
            <div className="empty"></div>
            <div className="summary">
              <p className="grey flex">
                <p>MRP</p>
                <p>₹ 11970.00</p>
              </p>
              <p className="grey flex">
                <p>Price Discount</p>
                <p>₹ 5480.00</p>
              </p>
              <br />
              <p className="regular flex">
                <p>Total Payable</p>
                <p>₹ 6490.00</p>
              </p>
              <br />
              <Button
                onClick={() => {
                  setHide(false);
                }}
              >
                Proceed to pay
              </Button>
            </div>
          </Grid>
        </div>
      </Container>
      <Footer />
      <Payment
        hide={hide}
        setHide={setHide}
        total={6490.0}
        item={"3 Months cultpass BLACK"}
      />
    </>
  );
};

export default PackCheckout;

//Styled components;
const Container = styled.div`
  width: 50%;
  display: inline-block;
  clear: "both";
  margin-top: 55px;

  & .pack {
    width: 75%;
    float: left;
    margin: 15px 0;
  }

  & h4 {
    font-size: 18px;
    padding-bottom: 0.5rem;
  }

  & p.grey {
    font-size: 15px;
    color: #787878;
    line-height: 1.56;
    margin-bottom: 1rem;
  }

  & p.flex {
    display: flex;
    justify-content: space-between;
  }

  & p.regular {
    font-size: 16px;
    line-height: 1.56;
    font-size: 16px;
    color: rgb(33, 33, 33);
  }

  & .lp {
    padding-left: 30%;
  }

  & .rp {
    padding-right: 30%;
  }

  & .np {
    font-size: 15px;
    color: #787878;
    line-height: 1.56;
  }

  & .title {
    width: fit-content;
    border-bottom: 1px solid rgba(178, 178, 178, 0.8);
    margin: 35px 0 10px;
  }

  @media (max-width: 900px) {
    .rp {
      padding-right: 20%;
    }
    .lp {
      padding-left: 20%;
    }
  }

  @media (max-width: 700px) {
    width: 100%;
    margin: auto;

    & .rp {
      padding: 2%;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  column-gap: 20px;

  & img {
    width: 80%;
    text-align: center;
  }

  & div.breaker {
    border-bottom: 1px solid rgba(178, 178, 178, 0.8);
    padding: 10px 0;
  }

  & div.center {
    padding-top: 10px;
  }
`;

const Button = styled.div`
  background: linear-gradient(87.72deg, #fc733c 2.19%, #ff0f67 99.49%);
  border-radius: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 17px;
  width: fit-content;
  margin: 5px 0 5px auto;
  color: #ffffff;
  cursor: pointer;
`;
