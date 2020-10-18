import React from 'react';
import {NavLink} from 'react-router-dom';

export const NavigationBar = () => {
    return (
        <nav className="navigation-bar">
            <NavLink className='navigation-bar_link' to='/'>Главная</NavLink>
            <NavLink className='navigation-bar_link' to='/products-list'>Товары и услуги</NavLink>
            <NavLink className='navigation-bar_link' to='/about'>О нас</NavLink>
            <NavLink className='navigation-bar_link' to='/contacts'>Контакты</NavLink>
        </nav>
    )
}