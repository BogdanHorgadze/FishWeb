import React from 'react'
import styles from './navBar.module.scss'

export const NavBarItem = (props) => {
    return (
        <div className={styles.item}>
            {props.children}
        </div>
    )
}