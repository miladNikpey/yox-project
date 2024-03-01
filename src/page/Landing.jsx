import React from "react";
import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
import HeadSlider from "../widget/headSlider/HeadSlider";
import FeatureBox from "../widget/featureBox/FeatureBox";
import coverF from "../assets/images/banFirst.svg";
import coverS from "../assets/images/banSecond.svg";
import style from "./landing.module.scss"

const Landing = () => {
  return (
    <div className={style.landingWrapper}>
      <Navbar />
      <Header />
      <HeadSlider />
      <FeatureBox />
      <div className={style.coverNews}>
        <div>
          <img className={style.coverNewsImg} src={coverF} alt="" />
        </div>
        <div>
          <img className={style.coverNewsImg} src={coverS} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
