import "./herosec.css";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

export const HeroSec = () => {
  const SpanD = styled.span`
    display: inline-block;

    color: #00abe9;
  `;

  return (
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
  );
};
