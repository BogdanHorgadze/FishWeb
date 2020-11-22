import React from 'react'
import styles from './productMain.module.scss'

export const ProductMain = ({ title, price, description }) => {
    return (
        <div className={styles['product-main']}>
            <h1 className={styles['product-title']}>{title}</h1>
            <div className={styles['product-price']}>{price}</div>
            <div className={styles['product-description']}>{description}</div>
            <div className={styles['product-options']}></div>
        </div>
    )
}