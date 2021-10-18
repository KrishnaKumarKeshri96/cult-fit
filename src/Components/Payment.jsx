import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Payment = ({ hide, setHide, total, item }) => {
  // console.log("hide:", hide);
  return (
    <PaymentDiv display={hide ? "none" : "block"}>
      <img src="Screenshot.png" alt="" className="backimg" />
      <div className="payment_option_section">
        <div className="payment_option_main">
          <div
            onClick={() => {
              setHide(true);
            }}
            className="close"
          >
            X
          </div>
          <h3>Payment Option</h3>
          <div className="amount_section">
            <div>
              <h4>{item}</h4>
              <p>Incl. of all taxes</p>
            </div>
            <h3>₹ {total}</h3>
          </div>
          <div className="options">
            <div>
              <img
                src="https://static.cure.fit/assets/images/card-pay.svg"
                alt=""
              />
              <div>
                <h3>No Cost Credit Card EMI0</h3>
                <p>
                  Click here to avail No Cost EMI on HDFC, Axis, ICICI, Yes
                  Bank, American Express, SBI, Kotak Mahindra, Standard
                  Chartered credit cards
                </p>
              </div>
            </div>

            <div>
              <Link to="/thanks">
                <img
                  src="https://static.cure.fit/assets/images/paytm_v1.svg"
                  alt=""
                />
                <h4>Link Account</h4>
              </Link>
            </div>

            <div>
              <Link to="/thanks">
                <img
                  src="https://static.cure.fit/assets/images/paytm_v1.svg"
                  alt=""
                />
                <h4>Credit / Debit Card</h4>
              </Link>
            </div>

            <div>
              <Link to="/thanks">
                <img
                  src="https://static.cure.fit/assets/images/paytm_v1.svg"
                  alt=""
                />
                <h4>Credit Card EMI</h4>
              </Link>
            </div>

            <div>
              <Link to="/thanks">
                <img
                  src="https://static.cure.fit/assets/images/paytm_v1.svg"
                  alt=""
                />
                <h4>UPI</h4>
              </Link>
            </div>

            <div>
              <Link to="/thanks">
                <img
                  src="https://static.cure.fit/assets/images/paytm_v1.svg"
                  alt=""
                />
                <h4>PhonePe/Bhim UPI</h4>
              </Link>
            </div>

            <div>
              <Link to="/thanks">
                <img
                  src="https://static.cure.fit/assets/images/paytm_v1.svg"
                  alt=""
                />
                <h4>Credit Card EMI</h4>
              </Link>
            </div>

            <div>
              <Link to="/thanks">
                <img
                  src="https://static.cure.fit/assets/images/paytm_v1.svg"
                  alt=""
                />
                <h4>Credit Card EMI</h4>
              </Link>
            </div>

            <div>
              <Link to="/thanks">
                <img
                  src="https://static.cure.fit/assets/images/paytm_v1.svg"
                  alt=""
                />
                <h4>Credit Card EMI</h4>
              </Link>
            </div>

            <div>
              <img
                src="https://static.cure.fit/assets/images/paytm_v1.svg"
                alt=""
              />
              <h4>Credit Card EMI</h4>
            </div>

            <div>
              <img
                src="https://static.cure.fit/assets/images/paytm_v1.svg"
                alt=""
              />
              <h4>Credit Card EMI</h4>
            </div>
          </div>
        </div>
      </div>
    </PaymentDiv>
  );
};

export default Payment;

//Styled components;
const PaymentDiv = styled.div`
  display: ${({ display }) => display};
  & .close {
    font-size: 20px;
    color: grey;
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 10px;
    cursor: pointer;
  }

  & .backimg {
    width: 100%;
    filter: blur(2.5px);
  }

  & .payment_option_section {
    width: 100%;
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.13);
    z-index: 101;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px;
    font-family: "Brandon Text Medium";
  }

  & .payment_option_main {
    max-width: 450px;
    height: 90vh;
    background-color: white;
    margin: auto;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: white;
    font-size: 16px;
    overflow-y: scroll;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  & .payment_option_main img {
    height: 50px;
  }

  & .payment_option_main > h3 {
    text-align: center;
    margin-bottom: 50px;
  }

  & .payment_option_main .amount_section {
    padding: 20px 20px;
    background-color: #ececec;
    border-radius: 10px;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & .payment_option_main .amount_section p {
    color: grey;
    font-size: 13px;
  }

  & .payment_option_main .options {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  & .payment_option_main .options > div {
    display: flex;
    align-items: center;
    padding: 3px 10px;
    gap: 15px;
    min-height: 30px;
  }

  & .payment_option_main .options > div:nth-child(1) {
    padding: 15px 10px;
    border-radius: 10px;
  }

  & .payment_option_main .options > div p {
    font-size: 12px;
    color: rgb(85, 83, 206);
    margin-top: 5px;
  }

  & .payment_option_main .options > div:hover {
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.09);
    cursor: pointer;
  }

  //   /* For 1000px and lower */
  @media only screen and (max-width: 768px) {
    & .payment_option_section {
      padding: 10px;
    }

    & .payment_option_main {
      max-width: 100%;
    }
  }
`;
