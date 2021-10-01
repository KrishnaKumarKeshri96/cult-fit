import "./herosec.css";
import styled from "styled-components";
// import { useEffect, useState } from "react";
// import { CSSTransition } from "react-transition-group";

import { Link, useHistory } from "react-router-dom";

export const HeroSec = () => {
  const history = useHistory();

  const SpanD = styled.span`
    display: inline-block;

    color: #00abe9;
  `;

  return (
    <>
      <div className="hero_section container">
        <div className="left_section">
          <h2>
            For the <SpanD>love</SpanD>
            of fit.
          </h2>
          <p>
            {`At cult.fit, we strive to keep you fit & healthy through a range of
            holistic offerings that include fitness and yoga, healthy meals,
            mental wellbeing and primary care. Now anyone can now stay healthy
            from the safety of their homes with just a single app that helps you
            to #BeBetterEveryDay`}
          </p>
        </div>
        <div className="right_section">
          <video
            autoPlay
            muted
            loop
            src="https://cdn-images.cure.fit/www-curefit-com/video/upload/w_800,q_auto:eco/vc_auto/video/vm/32b91e40-0e2c-477b-a2ad-88d437d0f07f.mp4"
          ></video>
        </div>
      </div>
      <div class="banner_section container">
        <Link to="/">
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_1360:400/dpr_2/image/vm/d60601b2-00c4-4f7d-8245-457dc376ad3b.png"
            alt="Sale banner"
          />
        </Link>
      </div>

      <div class="home_card_section container">
        <div class="top_section">
          <img src="images/cult-brand.svg" alt="Cult" />
          <div class="sub_heading_section">
            <h3 class="subheading">Makes fitness fun and easy</h3>
            <a href="">
              Explore
              <img src="images/back-arrow-pink.svg" alt="Arrow" />
            </a>
          </div>
          <p>
            Try our fun group classes at our cult centers or work out at
            best-in-class gyms
          </p>
        </div>

        <div class="slider_section">
          <div class="cards">
            <div class="card card1">
              <img
                class="card1img"
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_600,h_470,fl_progressive,f_auto,q_auto:eco/dpr_2/image/vm/6285c073-5e3d-4abf-9189-21403628a1f4.png"
                alt=""
              />
              <h3>Find a cult center near you</h3>
              <div class="content">
                <p>
                  Work out at our world class cult centers with the safest
                  measures. From ample workout space to ensure social distancing
                  to frequent sanitisation, cult is playing it safe so you don't
                  have to.
                </p>
                <button
                  onClick={() => {
                    history.push("/cult");
                  }}
                  class="button_style1"
                >
                  Explore
                </button>
              </div>
            </div>
            <div class="card card2">
              <img
                class="card2img"
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_600,h_470,fl_progressive,f_auto,q_auto:eco/dpr_2/image/vm/f66c717a-bcb9-4d64-b227-115d1010b610.jpeg"
                alt=""
              />
              <h3>Introducing Gyms by cult</h3>
              <div class="content">
                <p>
                  Get unlimited access to the best gyms in town with a cultpass.
                  Carefully handpicked by cult, these select gyms boast of cult
                  certified trainers, best-in-class safety and equipment
                  standards.
                </p>
                <button class="button_style1">Explore</button>
              </div>
            </div>
            <div class="card card3">
              <img
                class="card3img"
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_600,h_470,fl_progressive,f_auto,q_auto:eco/dpr_2/image/vm/aedcb538-777e-4564-b422-30eb8dc220d2.png"
                alt=""
              />
              <h3>Online PT</h3>
              <div class="content">
                <p>
                  Personalised workout sessions with the best of cult trainers
                  to help you achieve your fitness goals from the comfort of
                  home.
                </p>
                <button class="button_style1">Know more</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="home_card_section container">
        <div class="top_section">
          <img src="images/live-brand.svg" alt="Cult" />
          <div class="sub_heading_section">
            <h3 class="subheading">{"At-home health & fitness made easy"}</h3>
            <a href="">
              Explore
              <img src="images/back-arrow-pink.svg" alt="Arrow" />
            </a>
          </div>
          <p>
            Get fit and stay healthy from the comfort of your home with live
            workouts
          </p>
        </div>

        <div class="slider_section">
          <div class="cards">
            <div class="card card1">
              <img
                class="card1img"
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_600,h_470,fl_progressive,f_auto,q_auto:eco/dpr_2/image/vm/d2ceda2f-0362-43f6-9a5a-d1c57f54e7f9.png"
                alt=""
              />
              <h3>Mindfulness</h3>
              <div class="content">
                <p>
                  {` Relax your mind, body and soul with guided meditation & reach
                  your full potential.`}
                </p>
                <button class="button_style1">Explore</button>
              </div>
            </div>
            <div class="card card2">
              <img
                class="card2img"
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_600,h_470,fl_progressive,f_auto,q_auto:eco/dpr_2/image/vm/0fedd809-8ebf-4c79-8306-0207522155fe.png"
                alt=""
              />
              <h3>Recipes</h3>
              <div class="content">
                <p>
                  Easy-to-follow healthy recipes designed by our in-house
                  experts and nutritionists.
                </p>
                <button class="button_style1">Explore</button>
              </div>
            </div>
            <div class="card card3">
              <img
                class="card3img"
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_600,h_470,fl_progressive,f_auto,q_auto:eco/dpr_2/image/vm/4041957e-947a-4cba-b9ac-940316910888.png"
                alt=""
              />
              <h3>Online PT</h3>
              <div class="content">
                <p>
                  Personalised workout sessions with the best of cult trainers
                  to help you achieve your fitness goals from the comfort of
                  home.
                </p>
                <button class="button_style1">Know more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
