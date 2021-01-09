import React, { useEffect } from 'react'
import { useDispatch , useSelector } from 'react-redux';
import { product } from '../../Interfaces/Interfaces';
import { getProducts, setSearch } from '../../store/actions/actions'
import { AppState } from "../../store/reducers/rootReducer";
import ProductList from './ProductList/ProductList';
import styles from "./Products.module.scss";

const Products: React.FC = () => {
  const dispatch = useDispatch()

  const products : Array<product> | null = useSelector((state : AppState) => state.mainReducer.products)
  const filterProducts : Array<product> | null = useSelector((state : AppState) => state.mainReducer.filterProducts)

  useEffect(() => {
    if(!products.length){
      dispatch(getProducts())
    }
    dispatch(setSearch(true))
    return () => {
      dispatch(setSearch(false))
    }
  }, [])

  return (
    <div className={styles.products}>
      <ProductList products={products} filterProducts={filterProducts}/>
    </div>
  )
}

export default Products 
