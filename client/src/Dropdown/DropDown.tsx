import React, { useEffect, useRef, useState } from 'react'
import styles from './dropdown.module.scss'

export const DropDown = (props : any) => {
    const [visibility, setVisibility] = useState(false)
    const dropdownRef = useRef()
    const menuRef = useRef()

    useEffect(() => {
        let display;
        visibility ? display = 'flex' : display = 'none'
        console.log(menuRef.current)
        //@ts-ignore
        menuRef.current.style.display = display;
    }, [visibility])

    useEffect(() => {
        document.addEventListener('mouseover', (event) => {
            //@ts-ignore
            if (!dropdownRef.current.contains(event.target)) {
                setVisibility(false)
            }
        })
        console.log(dropdownRef.current)
    })

    const handleOpen = () => {
        setVisibility(true)
    }

    console.log(props.children)
    return (
        //@ts-ignore
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