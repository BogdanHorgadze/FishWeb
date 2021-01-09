import React, { useEffect, useRef, useState } from 'react'
import styles from './Dropdown.module.scss'


interface Props {
  title: string | JSX.Element,
  children: JSX.Element[] | JSX.Element
}

const Dropdown: React.FC<Props> = (props) => {
  const [visible, setVisible] = useState<boolean>(false)
  const dropRef = useRef<HTMLDivElement | null>(null)
  const menuRef: any = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let display
    visible ? display = 'flex' : display = 'none'
    menuRef.current.style.display = display
    menuRef.current.style.zIndex = 1000
  }, [visible])

  return (
    <div className={styles.dropdown} ref={dropRef}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}>
      <div className="title" >
        {props.title}
      </div>
      {React.cloneElement(
        React.Children.only(props.children),
        { ref: menuRef }
      )}
    </div>
  )
}

export default Dropdown
