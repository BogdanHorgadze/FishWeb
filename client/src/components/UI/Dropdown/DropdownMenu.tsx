import React from 'react'
import styles from './Dropdown.module.scss'

const DropdownMenu : any = React.forwardRef<any>((props, ref) => {
  return (
    <div className={styles.menu} ref={ref}>
      {props.children}
    </div>
  )
})

export default DropdownMenu
