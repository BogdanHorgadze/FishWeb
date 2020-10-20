import React, { useEffect, useRef, useState } from 'react'

export const DropDown = (props) => {
    const dropdownRef = useRef(null)
    const dropdownItemRef = useRef(null)

    const [visibility, setVisibility] = useState(false)
    useEffect(() => {
        dropdownRef.current.querySelector('.dropdown-menu').classList.toggle('visible', visibility);
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
        <div className='dropdown' ref={dropdownRef} onMouseEnter={handleOpen}>
            <div className='dropdown-text' ref={dropdownItemRef}>
                {props.text}
            </div>
            {props.children}
        </div>
    )

}