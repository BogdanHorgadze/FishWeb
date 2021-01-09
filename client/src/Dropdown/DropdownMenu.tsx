import React, { forwardRef } from 'react'
import styles from './dropdown.module.scss'

export const DropDownMenu : any = forwardRef<any>((props, ref) => {
    return (
        <div className={styles.menu} ref={ref}>
            {props.children}
        </div>
    )
})