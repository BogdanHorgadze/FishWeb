import React from 'react';
import styles from './header.module.scss'
import { NavBar } from '../NavBar/NavBar'
import { Logo } from '../Logo/Logo'

export const Header = () => {
    console.log(styles)
    return (
        <header className={styles.header}>
            <div className={`${styles['header-wrap']} content`}>
                <Logo />
                <NavBar />
                <div className={styles['cart-img']}>
                </div>
                <div className={styles.search}>
                    
                </div>
            </div>
        </header>
    )
}