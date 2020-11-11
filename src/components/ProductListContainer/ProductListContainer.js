import React from 'react';
import styles from './productListContainer.module.scss';
import { ProductList } from './ProdcutList/ProductList'


export const ProductListContainer = () => {
    return (
        <div className={styles['product-list-container']}>
            <ProductList />
        </div>
    )
}