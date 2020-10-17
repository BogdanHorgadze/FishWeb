import React from 'react';
import {NavLink} from 'react-router-dom';

export const NavigationBar = () => {
    return (
        <nav className="navigation-bar">
            <NavLink to='/'>Logo</NavLink>
            <NavLink to='/about'>О нас</NavLink>
            <NavLink to='/contacts'>Контакты</NavLink>
        </nav>
    )
}