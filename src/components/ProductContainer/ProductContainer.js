import React from 'react'
import styles from './productContainer.module.scss'
import { ProductMain } from './ProductMain/ProductMain'

export const ProductContainer = () => {
    return (
        <div className={styles['product-container']}>
            <ProductMain title={'Костюм снайпер и тд'} />
        </div>
    )
}