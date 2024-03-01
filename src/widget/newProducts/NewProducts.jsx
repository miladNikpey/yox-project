import React from 'react'
import { DoubleLeftOutlined } from '@ant-design/icons';
import style from "./newProducts.module.scss"
import ProductCard from '../../components/card/Card';
import productImg from "../../assets/images/product/headset.svg"
import earPrImg from "../../assets/images/product/earPr.svg"
import cablePrImg from "../../assets/images/product/cablePr.svg"
import box from "../../assets/images/box.svg"



const NewProducts = () => {
  return (
    <div className={style.newProductWrapper}>
        <div className={style.newProductHeader}>
            <div className={style.productTitle}>
                <img src={box} alt="" />
                <h3>جدید ترین محصولات</h3>
            </div>
            <div className={style.newProductMore}>
                <span>مشاهده همه</span>
                <div className={style.newProductMoreTitle}>
                <DoubleLeftOutlined className={style.newProductMoreIc} />
                </div>
            </div>
        </div>
        <div className={style.newProductMore}>
            <ProductCard img={productImg} />
            <ProductCard img={earPrImg}/>
            <ProductCard img={cablePrImg}/>
            <ProductCard img={earPrImg}/>
            <ProductCard img={productImg}/>
        </div>

    </div>
  )
}

export default NewProducts