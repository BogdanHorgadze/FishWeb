import React, { useEffect, useRef, useState } from 'react'
import styles from './dropdown.module.scss'

export const DropDown = (props) => {
    const [visibility, setVisibility] = useState(false)
    const dropdownRef = useRef()
    const menuRef = useRef()

    useEffect(() => {
        let display;
        visibility ? display = 'flex' : display = 'none'
        menuRef.current.style.display = display;
    }, [visibility])

    useEffect(() => {
        document.addEventListener('mouseover', (event) => {
            if (!dropdownRef.current.contains(event.target)) {
                setVisibility(false)
            }
        })
    })

    const handleOpen = () => {
        setVisibility(true)
    }

    
    return (
        <div className={styles.dropdown} ref={dropdownRef} onMouseEnter={handleOpen}>
            <div className={styles.text}>
                {props.text}
            </div>
            {React.cloneElement(
                React.Children.only(props.children),
                {ref: menuRef}
            )}
        </div>
    )

}