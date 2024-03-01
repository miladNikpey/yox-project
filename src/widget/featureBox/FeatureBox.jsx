import React from "react";
import offerIc from "../../assets/images/featureBox/offer.svg";
import deliveryIc from "../../assets/images/featureBox/delivery.svg";
import safeIc from "../../assets/images/featureBox/safe.svg";
import approveIc from "../../assets/images/featureBox/approve.svg";
import style from "./featureBox.module.scss";

const FeatureBox = () => {
  return (
    <div className={style.featureWrapper}>
      <div className={style.featureBoxCol}>
        <div className={style.featureBoxImg}>
          <img src={offerIc} alt="offerIc " />
        </div>
        <span className={style.featureBoxTitle}>تخفیفات شگفت انگیز</span>
      </div>
      <div className={style.featureBoxCol}>
        <div className={style.featureBoxImg}>
          <img src={deliveryIc} alt="offerIc " />
        </div>
        <span className={style.featureBoxTitle}>حمل سفارشات ظرف 24 ساعت</span>
      </div>
      <div className={style.featureBoxCol}>
        <div className={style.featureBoxImg}>
          <img src={safeIc} alt="offerIc " />
        </div>
        <span className={style.featureBoxTitle}>
          سیاست بازگشت و خدمات پس از فروش
        </span>
      </div>
      <div className={style.featureBoxCol}>
        <div className={style.featureBoxImg}>
          <img src={approveIc} alt="offerIc " />
        </div>
        <span className={style.featureBoxTitle}>
          با اعتماد به نفس خریداری کنید
        </span>
      </div>
    </div>
  );
};

export default FeatureBox;
