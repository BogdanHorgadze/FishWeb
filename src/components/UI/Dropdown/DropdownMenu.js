import React, { forwardRef } from 'react'
import styles from './dropdown.module.scss'

export const DropDownMenu = forwardRef((props, ref) => {
    return (
        <div className={styles.menu} ref={ref}>
            {props.children}
        </div>
    )
})