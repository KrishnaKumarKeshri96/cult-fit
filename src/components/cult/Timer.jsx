import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Timer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  let interval;
  const startTimer = () => {
    const targetDate = new Date("October 6,2021").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const day = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hour = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minute = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const second = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        clearInterval(interval);
      } else {
        setDays(day);
        setHours(hour);
        setMinutes(minute);
        setSeconds(second);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <TimerContainer>
      <div className="timer">
        <div className="time">{days}</div>
        <div className="unit">Day</div>
      </div>
      <Seperator>&nbsp;&nbsp;:&nbsp;&nbsp;</Seperator>
      <div className="timer">
        <div className="time">{hours}</div>
        <div className="unit">Hr</div>
      </div>
      <Seperator>&nbsp;&nbsp;:&nbsp;&nbsp;</Seperator>
      <div className="timer">
        <div className="time">{minutes}</div>
        <div className="unit">Min</div>
      </div>
      <Seperator>&nbsp;&nbsp;:&nbsp;&nbsp;</Seperator>
      <div className="timer">
        <div className="time">{seconds}</div>
        <div className="unit">Sec</div>
      </div>
      <img src="img/cult/Vector.svg" alt="Go" />
    </TimerContainer>
  );
};

export default Timer;

//styled components;
const TimerContainer = styled.div`
  background-color: #ececec;
  display: flex;
  justify-content: center;
  padding: 5px;
  position: relative;

  & .time {
    display: flex;
    font-family: BrandonTextWeb-Bold, Helvetica Neue, Helvetica, Roboto, Arial,
      sans-serif;
    font-size: 24px;
    color: #000;
    min-width: 30px;
    justify-content: center;
  }

  & .unit {
    font-family: BrandonTextWeb-Medium, Helvetica Neue, Helvetica, Roboto, Arial,
      sans-serif;
    font-size: 12px;
    color: #989898;
    text-align: center;
    margin-top: -5px;
  }

  & img {
    width: 1%;
    position: absolute;
    transform: rotate(180deg);
    top: 15px;
    right: 15px;
  }
`;

const Seperator = styled.span`
  font-family: BrandonTextWeb-Bold, Helvetica Neue, Helvetica, Roboto, Arial,
    sans-serif;
  font-size: 24px;
  color: #999;
`;
