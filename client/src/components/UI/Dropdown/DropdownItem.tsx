import React from 'react'
import styles from './Dropdown.module.scss'

const DropdownItem: React.FC = (props) => {
  return (
    <div className={styles.item}>
      {props.children}
    </div>
  )
}

export default DropdownItem
