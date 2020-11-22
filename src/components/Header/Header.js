import React from 'react';
import styles from './header.module.scss'
import { NavBar } from './NavBar/NavBar'
import { Logo } from './Logo/Logo'
import { Search } from './Search/Search'

export const Header = () => {
    console.log(styles)
    return (
        <header className={styles.header}>
            <div className={`${styles['header-wrap']} content`}>
                <Logo />
                <NavBar />
                <div className={styles['left-side']}>
                <Search />
                <div className={styles['cart-img']}>
                </div>
                </div>
            </div>
        </header>
    )
}