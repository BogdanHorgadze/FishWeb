import React from 'react'

export const NavBarItem = (props) => {
    return (
        <div className="navbar-item">
            {props.children}
        </div>
    )
}