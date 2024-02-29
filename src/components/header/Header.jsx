import React from "react";
import hansImg from "../../assets/images/header/earphone.svg";
import wChargerImg from "../../assets/images/header/wCharger.svg";
import carChargerImg from "../../assets/images/header/carCharger.svg";
import speakerImg from "../../assets/images/header/speaker.svg";
import chargerCableImg from "../../assets/images/header/chargerCable.svg";
import earphoneBlImg from "../../assets/images/header/earphoneBl.svg";
import infoImg from "../../assets/images/header/info.svg";
import style from "./header.module.scss";
import HeaderLi from "../headerLi/HeaderLi";

const Header = () => {
  return (
    <div className={style.headerWrapper}>
      <>
        <HeaderLi title="هنزفری" image={hansImg} />
        <HeaderLi title="شارژر دیواری" image={wChargerImg} />
        <HeaderLi title="شارژر فندکی" image={carChargerImg} />
        <HeaderLi title="اسپیکر" image={speakerImg} />
        <HeaderLi title="کابل شارژر" image={chargerCableImg} />
        <HeaderLi title="هنزفری بلوتوثی" image={earphoneBlImg} />
      </>
      <div className={style.headerInfo}>
        <h3>33770574-7</h3>
        <img src={infoImg} alt="infoImg" />
      </div>
    </div>
  );
};

export default Header;
