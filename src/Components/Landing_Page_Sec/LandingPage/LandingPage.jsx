import { Navbar } from "../../Navbar/Navbar";
import { HeroSec } from "../HeroSec";
import { SliderCardHomePAge } from "../SlidingCard";
import { StaicLanding } from "../StaticData";
import { Footer } from "../../Footer/Footer";
// import axios from "axios";
import { useState, useEffect } from "react";

export const LandingPage = () => {
  const [sliding, setSliding] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/brand")
      .then((data) => {
        console.log(data);
        return data.json();
      })
      .then((data) => {
        console.log(data);
        setSliding(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />
      <HeroSec />
      {sliding?.map((e) => (
        <SliderCardHomePAge key={e._id} {...e} />
      ))}

      <StaicLanding />
      <Footer />
    </>
  );
};
