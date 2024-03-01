import React from 'react'
import { Card} from 'antd';
import style from "./card.module.scss"


const ProductCard = ({img}) => {
  return (
    <Card className={style.cardBox} style={{ width: 300 , height:340 , backgroundColor:"#EDEFF3" }}>
        <div className={style.cardImgBox}>
            <img src={img} alt="productImg" />
        </div>

    <p className={style.cardBoxTitle}>هندزفری بلوتوثی یوکس </p>
    <p>Card content</p>
  </Card>
  )
}

export default ProductCard