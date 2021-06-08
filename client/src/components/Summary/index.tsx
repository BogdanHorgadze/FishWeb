import React, { memo } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import { useSelector } from "react-redux";

import { product } from "../../Interfaces/Interfaces";
import { AppState } from "../../store/reducers/rootReducer";
import styles from "./styles.module.scss";

const Summary = () => {
  const cart: Array<product> = useSelector(
    (state: AppState) => state.mainReducer.cart
  );
  const totalPrice: number = useSelector(
    (state: AppState) => state.mainReducer.totalPrice
  );
  console.log("🚀 ~ file: index.tsx ~ line 9 ~ Summary ~ cart", cart);
  return (
    <div className={styles.root}>
      <TableContainer>
        <Table aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold" }}>Product Name</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Amount</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.map((item) => (
              <TableRow>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.count}</TableCell>
                <TableCell>{item.price} UAH</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {totalPrice !== 0 && <div>Total price: {totalPrice} UAH</div>}
    </div>
  );
};

export default memo(Summary);
