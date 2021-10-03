import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Thanks = () => {
  return (
    <ThanksDiv class="thank_you_section">
      <div class="container">
        <div class="thank_you">
          <img
            src="https://static.cure.fit/assets/images/curefit_login_logo.svg"
            alt=""
          />
          <h2>
            <span class="blue">Thank You</span> from team cult
            <span class="blue">.</span>
          </h2>
          <p>
            Developed by Masai: <span class="pink">Web10 batch.</span>
          </p>
          <p>
            Github:
            <span class="pink">
              <a href="https://github.com/KrishnaKumarKeshri96/cult-fit">
                Cult.fit
              </a>
            </span>
          </p>
          <p>
            Continue Shopping:
            <span class="pink">
              <Link to="/">Home</Link>
            </span>
          </p>
        </div>
      </div>
    </ThanksDiv>
  );
};

export default Thanks;

//styled components;

const ThanksDiv = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  & .container {
    max-width: 1236px;
    margin: auto;
    padding: 0px 16px;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    & .thank_you {
      width: 100%;
      height: 80vh;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 30px;
      width: 100%;
      background: url(img/image.png) no-repeat bottom center;
      background-position: -20% 125%;
      background-color: rgb(255, 255, 255);
      font-family: "Brandon Text Regular";
      overflow: hidden;
      border-radius: 20px;
      box-shadow: 0px 0px 30px rgb(221, 221, 221);
    }

    & .thank_you h2 {
      font-size: 70px;
      width: 60%;
      font-family: "Brandon Text Bold";
      text-align: center;
      line-height: 70px;
    }

    & .thank_you .blue {
      color: #00abe9;
    }
    & .thank_you a {
      color: #00abe9;
      transition: all 0.3s ease;
    }
    & .thank_you a:hover {
      color: #005675;
    }

    & .pink {
      color: #fd3472;
    }
  }
`;
