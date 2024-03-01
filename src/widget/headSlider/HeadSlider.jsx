import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Col, Row } from "antd";
import coverVoc from "../../assets/images/SlideLanding/slide1.svg"
import coverVocSec from "../../assets/images/SlideLanding/slide2.svg"
import coverVocThird from "../../assets/images/SlideLanding/slide3.svg"
import productImg from "../../assets/images/product/headset.svg"

import style from "./headSlider.module.scss"
import ProductCard from "../../components/card/Card";


const HeadSlider = () => {
  return (
    <div>
      <Row>
        <Col span={20}>
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
                <img className={style.coverSlider} src={coverVoc} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className={style.coverSlider} src={coverVocSec} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className={style.coverSlider} src={coverVocThird} alt="" />
            </SwiperSlide>
          </Swiper>
        </Col>
        <Col span={4}>
          <div className={style.productBox}  >
            <ProductCard img={productImg} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HeadSlider;
