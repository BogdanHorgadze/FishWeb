import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import { product } from '../../../Interfaces/Interfaces'
import styles from "./ProductItem.module.scss";
import { buyThunk } from "../../../store/actions/actions";
import { useDispatch } from "react-redux";
import { BiPlus } from "react-icons/bi";
import { AiOutlineMinus } from "react-icons/ai";

interface Props {
  product: product,
  products: Array<product>,
}

const ProductItem: React.FC<Props> = ({ product, products }) => {
  let history = useHistory()
  const dispatch = useDispatch()
  const renderProductInfo = () => {
    history.push(`/products/${product._id}`)
  }


  // const buyHandler = (action : string) => {
  //   dispatch(buyThunk(product._id, action))
  // }
  
  return (
    <div className={styles.product}>
      <div onClick={renderProductInfo}>
        <img src={require(`../../../assets/img/${product.img}`)} alt="visual" />
      </div>
      <div className={styles.info}>
        <div>
          <div>
            <span>{product.name}</span>
          </div>
          <div>
            <span>Цена:{product.price}</span>
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
