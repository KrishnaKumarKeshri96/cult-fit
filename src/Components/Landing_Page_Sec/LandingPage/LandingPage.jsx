import { Navbar } from "../../Navbar/Navbar";
import { HeroSec } from "../HeroSec";
import { SliderCardHomePAge } from "../SlidingCard";
import { StaicLanding } from "../StaticData";
import { Footer } from "../../Footer/Footer";
import axios from "axios";
import { useState, useEffect } from "react";

export const LandingPage = () => {
  const [sliding, setSliding] = useState([]);

  useEffect(() => {
    axios
      .get("https://secure-plateau-49386.herokuapp.com/brand")
      .then((data) => {
        setSliding(data.data);
      });
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
