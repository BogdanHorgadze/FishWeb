import React from 'react';
import styles from './navBar.module.scss'
import { NavLink } from 'react-router-dom';
import { NavBarItem } from './NavBarItem';
import { DropDown } from '../UI/Dropdown/DropDown';
import { DropDownMenu } from '../UI/Dropdown/DropdownMenu'
import { DropDownItem } from '../UI/Dropdown/DropDownItem';

export const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <NavBarItem>
                <NavLink className={styles['link']} to='/'>Главная</NavLink>
            </NavBarItem>
            <NavBarItem>
                <DropDown text={<NavLink className={styles['link']} to='/product-list'>Товары и услуги</NavLink>}>
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
                <NavLink className={styles['link']} to='/about'>О нас</NavLink>
            </NavBarItem>
            <NavBarItem>
                <NavLink className={styles['link']} to='/contacts'>Контакты</NavLink>
            </NavBarItem>
        </nav>
    )
}