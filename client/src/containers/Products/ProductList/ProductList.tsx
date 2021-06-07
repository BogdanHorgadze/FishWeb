import { Grid } from "@material-ui/core";
import React from "react";
import { product } from "../../../Interfaces/Interfaces";
import ProductItem from "../ProductItem/ProductItem";

interface Props {
  products: Array<product>;
}

const ProductList: React.FC<Props> = ({ products }: Props) => {
  // const renderProducts = () => {
  //   if (products.length && !filterProducts.length) {
  //     return products.map((item, i) => {
  //       return <ProductItem key={i} product={item} products={products} />;
  //     });
  //   } else {
  //     return filterProducts.map((item, i) => {
  //       return <ProductItem key={i} product={item} products={products} />;
  //     });
  //   }
  // };

  // return (
  //   <>
  //     {renderProducts()}
  //   </>
  // )
  return (
    <Grid container spacing={2}>
      {products && products.length ? (
        products.map((item) => (
          <Grid item xs>
            <ProductItem key={item._id} product={item} products={products} />
          </Grid>
        ))
      ) : (
        <div>Sorry, we don`t have products now</div>
      )}
    </Grid>
  );
};

export default ProductList;
