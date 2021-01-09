import React from 'react'
import { product } from '../../../Interfaces/Interfaces'
import ProductItem from '../ProductItem/ProductItem'

interface Props {
  products: Array<product>
  filterProducts : Array<product>
}


const ProductList: React.FC<Props> = ({ products , filterProducts }) => {

  const renderProducts = () => {
    if (products.length && !filterProducts.length) {
      return products.map((item, i) => {
        return (
             <ProductItem key={i} product={item} products={products}/>
        )
      })
    } else {
      return filterProducts.map((item, i) => {
        return (
             <ProductItem key={i} product={item} products={products}/>
        )
      })
    }
  }

  return (
    <>
      {renderProducts()}
    </>
  )
}

export default ProductList
