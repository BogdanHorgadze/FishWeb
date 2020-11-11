import React from 'react';
import styles from './productItem.module.scss';
import testImg from '../../../assets/img/test.jpg'

export const ProductItem = ({title, price}) => {
    return (
        <div className={styles['product-item']}>
            <div className={styles['image-wrap']}>
                <img className={styles.img} src={testImg} />
            </div>
            <div className={styles.main}>
                <h1 className={styles.title}>{title}</h1>
                <div className={styles.price}>{price} грн</div>
            </div>
        </div>
    )
}