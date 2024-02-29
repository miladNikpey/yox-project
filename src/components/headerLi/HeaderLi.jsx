import React from "react";
import style from "./headerLi.module.scss"

const HeaderLi = ({title,image}) => {
  return (
    <div className={style.headerCol}>
      <div className={style.headerCover}>
        <img src={image} alt="HansferiIcon" width={40} />
      </div>
      <h3>{title}</h3>
    </div>
  );
};

export default HeaderLi;
