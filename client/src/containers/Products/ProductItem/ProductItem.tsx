import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { product } from "../../../Interfaces/Interfaces";
import styles from "./ProductItem.module.scss";
import { buyThunk } from "../../../store/actions/actions";
import { useDispatch } from "react-redux";
import { BiPlus } from "react-icons/bi";
import { AiOutlineMinus } from "react-icons/ai";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

interface Props {
  product: product;
  products: Array<product>;
}

const ProductItem: React.FC<Props> = ({ product, products }) => {
  let history = useHistory();
  const dispatch = useDispatch();
  const renderProductInfo = () => {
    history.push(`/products/${product._id}`);
  };

  // const buyHandler = (action : string) => {
  //   dispatch(buyThunk(product._id, action))
  // }

  // return (
  //   <div className={styles.product}>
  //     <div onClick={renderProductInfo}>
  //       <img src={require(`../../../assets/img/${product.img}`)} alt="visual" />
  //     </div>
  //     <div className={styles.info}>
  //       <div>
  //         <div>
  //           <span>{product.name}</span>
  //         </div>
  //         <div>
  //           <span>Цена:{product.price}</span>
  //         </div>
  //       </div>
  //       <div></div>
  //     </div>
  //   </div>
  // );
  return (
    <Card onClick={renderProductInfo}>
      <CardActionArea>
        <CardMedia
          style={{ height: "300px", backgroundSize: "contain" }}
          title="Contemplative Reptile"
          image={require("../../../assets/img/1.jpg")}
        />
        <CardContent>
          <Typography variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography>{product.descr?.substring(0, 30)}...</Typography>
          <Typography>{product.price} UAH</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductItem;
