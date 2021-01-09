import React, { useState, useRef , useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import styles from './Top.module.scss'
import '../../assets/scss/_settings.scss'

import { NavBar } from './NavBar/NavBar'
import { Logo } from './Logo/Logo'
import { Search } from './Search/Search'
import { FaShoppingCart } from "react-icons/fa";
import { AppState } from '../../store/reducers/rootReducer';
import { orderThunk } from '../../store/actions/actions'

import { Layout } from 'antd';
import { Row, Col, Modal } from 'antd';
const { Header } = Layout;

const Top = () => {
    const dispatch = useDispatch()
    const isSearch = useSelector((state: AppState) => state.mainReducer.isSearch)
    const cart = useSelector((state: AppState) => state.mainReducer.cart)
    const totalPrice: number = useSelector((state: AppState) => state.mainReducer.totalPrice)
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isOrder, setIsOrder] = useState(false);
    const [isEnd, setIsEnd] = useState(false)
    const [isFooter, setIsFooter] = useState({})
    const phoneValue = useRef<any>(null)
    const regPhone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/

    useEffect(() => {
        if(isEnd){
          setIsFooter({footer:null})
        }
      },[isEnd])

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        if(cart.length){
            setIsOrder(true)
        }
        if (isOrder && regPhone.test(phoneValue.current!.value)) {
            dispatch(orderThunk(phoneValue.current?.value))
            setIsEnd(true)
        }
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const renderCart = () => {
        if (cart.length) {
            return cart.map((item, i) => {
                return (
                    <div key={`item` + i}>
                        {item.name}
                        <span>{item.count} </span>
                        <span>{
                            item.selectedSize.map(size => {
                                return (
                                    <span key={`cart` + i}> {size} </span>
                                )
                            })
                        }</span>
                    </div>
                )
            })
        } else {
            return 'пусто'
        }
    }

    return (
        <Header className={styles.header}>
            <Row>
                <Col sm={4} xs={0}>
                    <Logo />
                </Col>
                <Col sm={12} xs={7}>
                    <NavBar />
                </Col>
                <Col sm={4} xs={12}>
                    <div className={styles.search}>
                        {isSearch ? <Search /> : null}
                    </div>
                </Col>
                <Col sm={4}>
                    <div className={styles.cart} onClick={showModal}  >
                        <FaShoppingCart size="30" color="white" />
                        <div>{cart.length}</div>
                    </div>
                </Col>
            </Row>
            <Modal title="Корзина"
                visible={isModalVisible}
                width={1000}
                onOk={handleOk}
                onCancel={handleCancel}
                okText='Заказать'
                {...isFooter}
            >
                {
                    isOrder
                        ? isEnd
                            ? 'Cпасибо за покупку. Мы с вами свяжемся'
                            : <div>
                                <input ref={phoneValue} id="form" type="text" />
                                <label htmlFor="form">Номер телефона</label>
                            </div>
                        : renderCart()


                }
            </Modal>
        </Header>
    )
}

export default Top