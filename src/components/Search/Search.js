import React from 'react'
import styles from './search.module.scss'
import search from '../../assets/img/search.svg'

export const Search = () => {
    return (
        <div className={styles.search}>
            <button className={styles['search-btn']}>
                <img src={search} />
            </button>
            <input className={styles.input} placeholder='Поиск...' />
        </div>
    )
}