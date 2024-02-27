import React from "react";
import style from "./Navbar.module.scss";
import Logo from "../assets/images/Logo.png";
import Login from "../assets/images/Login.png";
import Shop from "../assets/images/Shop.png";

const Navbar = () => {
  return (
    <div className={style.NavbarHandle}>
      <div className={style.LogoPic}>
        <img src={Logo} />
        <input
          className={style.Search}
          type="text"
          placeholder="کالای مورد نظر خود را جستجو کنید ..."
        />
        <div className={style.List}>
          <ul>
            <li>پیشخوان</li>
            <li>فروشگاه</li>
            <li>بلاگ</li>
            <li>تماس با ما</li>
          </ul>
        </div>
        <div className={style.LoginButton}>
          <button className={style.ButtonStyle}>
            <img src={Login} /> ثبت نام/ ورود{" "}
          </button>
        </div>
        <div className={style.ShopIcon}>
          <img className={style.ShopIconimg} src={Shop} />
        </div>  
      </div>
    </div>
  );
};

export default Navbar;
