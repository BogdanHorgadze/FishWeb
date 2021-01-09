import React from 'react';
import styles from './dropdown.module.scss'

export const DropDownItem = (props : any) => {
    return(
        <div className={styles.item}>
            {props.children}
        </div>
    )
}