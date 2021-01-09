import React from 'react';
import styles from './navBar.module.scss'
import { Link } from 'react-router-dom'

import DropDown from '../../../components/UI/Dropdown/Dropdown'
import DropDownMenu from '../../../components/UI/Dropdown/DropdownMenu'
import DropdownItem from '../../../components/UI/Dropdown/DropdownItem'

import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


export const NavBar = () => {
    return (
        <nav>
            <Menu mode="horizontal" className={styles.navbar}>
                <Menu.Item><Link to="/">Главная</Link></Menu.Item>
                <Menu.Item>
                    <DropDown title={<Link to='/products'>Товары</Link>}>
                        <DropDownMenu>
                            <DropdownItem>
                                <DropDown title='Костюмы'>
                                    <DropDownMenu>
                                        <DropdownItem>Зимние</DropdownItem>
                                        <DropdownItem>Демисезонное</DropdownItem>
                                        <DropdownItem>Летние</DropdownItem>
                                    </DropDownMenu>
                                </DropDown>
                            </DropdownItem>
                        </DropDownMenu>
                    </DropDown>
                </Menu.Item>
                <Menu.Item><Link to="/about">О нас</Link></Menu.Item>
                <Menu.Item><Link to="/contacts">Контакты</Link></Menu.Item>
            </Menu>
        </nav>
    )
}