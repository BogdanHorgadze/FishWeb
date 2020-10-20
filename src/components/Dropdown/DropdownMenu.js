import React from 'react'

export const DropDownMenu = (props) => {
    return (
        <div className='dropdown-menu'>
            {props.children}
        </div>
    )
}