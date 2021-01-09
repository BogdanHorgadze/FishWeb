import React from 'react'
import logo from '../../../assets/img/logo.png'
import './Logo.scss'

export const Logo = () => {
    return (
        <div className='logo'>
            <img src={logo} alt="logo" width="100%" style={{maxWidth:'180px'}}/>
        </div>
    )
}