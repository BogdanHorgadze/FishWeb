import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavBarItem } from './NavBarItem';
import { DropDown } from '../Dropdown/DropDown';
import { DropDownMenu } from '../Dropdown/DropdownMenu'
import { DropDownItem } from '../Dropdown/DropDownItem';

export const NavBar = () => {
    return (
        <nav className="navbar">
            <NavBarItem>
                <NavLink className="navbar-link" to='/'>Главная</NavLink>
            </NavBarItem>
            <NavBarItem>
                <DropDown text={<NavLink className="navbar-link" to='/product-list'>Товары и услуги</NavLink>}>
                    <DropDownMenu>
                        <DropDownItem>
                            <DropDown text='Костюмы'>
                                <DropDownMenu>
                                    <DropDownItem>Зимние</DropDownItem>
                                    <DropDownItem>Демисезонное</DropDownItem>
                                    <DropDownItem>Летние</DropDownItem>
                                </DropDownMenu>
                            </DropDown>
                        </DropDownItem>
                    </DropDownMenu>
                </DropDown>
            </NavBarItem>
            <NavBarItem>
                <NavLink className="navbar-link" to='/about'>О нас</NavLink>
            </NavBarItem>
            <NavBarItem>
                <NavLink className="navbar-link" to='/contacts'>Контакты</NavLink>
            </NavBarItem>
        </nav>
    )
}