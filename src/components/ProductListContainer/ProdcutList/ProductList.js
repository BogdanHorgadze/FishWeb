import React from 'react';
import styles from './productList.module.scss';
import { ProductItem } from '../ProductItem/ProductItem'

const productList = [
    {
        title: 'Костюм снайпер',
        price: 2134,

    },
    {
        title: 'title 4',
        price: 2134,
        
    },
    {
        title: 'title 3',
        price: 2134,
        
    },
    {
        title: 'title 2',
        price: 2134,
        
    },
    {
        title: 'Костюм снайпер',
        price: 2134,

    },
    {
        title: 'title 4',
        price: 2134,
        
    },
    {
        title: 'title 3',
        price: 2134,
        
    },
    {
        title: 'title 2',
        price: 2134,
        
    }
]

export const ProductList = () => {
    return (
        <div className={styles['product-list']}>
            {productList.map(item =>(
                <ProductItem 
                    title={item.title}
                    price={item.price}/>
            ))}
        </div>
    )
}