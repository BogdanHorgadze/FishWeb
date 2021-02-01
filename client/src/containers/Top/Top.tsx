import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import styles from './Top.module.scss'
import '../../assets/scss/_settings.scss'

import { NavBar } from './NavBar/NavBar'
import { Logo } from './Logo/Logo'
import { Search } from './Search/Search'
import { FaShoppingCart } from "react-icons/fa";
import { AppState } from '../../store/reducers/rootReducer';
import { orderThunk, getProducts, setCorrectNumber, setIsEnd, refresh, deleteFullItemThunk } from '../../store/actions/actions'
import { CloseCircleOutlined, ArrowLeftOutlined } from '@ant-design/icons';

import { Layout } from 'antd';
import { Row, Col, Modal } from 'antd';
const { Header } = Layout;

const Top = () => {
    const dispatch = useDispatch()
    const isSearch = useSelector((state: AppState) => state.mainReducer.isSearch)
    const cart = useSelector((state: AppState) => state.mainReducer.cart)
    const totalPrice: number = useSelector((state: AppState) => state.mainReducer.totalPrice)
    const isCorrectPhone = useSelector((state: AppState) => state.mainReducer.isCorrectPhone)
    const isEnd = useSelector((state: AppState) => state.mainReducer.isEnd)
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isFooter, setIsFooter] = useState({})
    const phoneValue = useRef<any>(null)
    const regPhone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/

    useEffect(() => {
        if (isEnd) {
            setIsFooter({ footer: null })
        } else {
            setIsFooter({})
        }
    }, [isEnd])

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        if (cart.length) {
            dispatch(setCorrectNumber(true))
        }
        if (isCorrectPhone && regPhone.test(phoneValue.current!.value)) {
            dispatch(orderThunk(phoneValue.current?.value))
            dispatch(setIsEnd(true))
        }
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        if (isEnd) {
            dispatch(getProducts())
            dispatch(refresh(false))
        }
    };

    const clearCart = (id: string) => {
        dispatch(deleteFullItemThunk(id))
    }

    const renderCart = () => {
        if (cart.length) {
            return (
                <div>
                    <Row>
                        <Col xs={4} sm={6}>
                            Название
                     </Col>
                        <Col xs={4} sm={6}>
                            Количество
                      </Col>
                        <Col xs={6} sm={6}>
                            Размеры
                       </Col>
                        <Col xs={2} sm={6}>
                            Цена
                      </Col>
                    </Row>
                    {cart.map((item, i) => {
                        return (
                            <div key={`item` + i} style={{ marginTop: '10px' }}>
                                <Row>
                                    <Col sm={6}>
                                        <div>{item.name}</div>
                                    </Col>
                                    <Col sm={6}>
                                        <span style={{ marginLeft: '30px' }}>{item.count} </span>
                                    </Col>
                                    <Col sm={6}>
                                        <span>{
                                            item.selectedSize.map((size, i) => {
                                                return (
                                                    <div style={{ marginLeft: '10px' }} key={`cart` + i}> {size} </div>
                                                )
                                            })
                                        }</span>
                                    </Col>
                                    <Col sm={4}>
                                        <span>{+item.count * +item.price}грн</span>
                                    </Col>
                                    <Col sm={2}>
                                        <span onClick={() => clearCart(item._id)} style={{ cursor: 'pointer' }}>
                                            <CloseCircleOutlined />
                                        </span>
                                    </Col>
                                </Row>
                            </div>
                        )
                    })}
                </div>
            )
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
                        <div style={{ marginLeft: '10px' }}>{cart.length}</div>
                    </div>
                </Col>
            </Row>
            <Modal title="Корзина"
                visible={isModalVisible}
                width={1000}
                onOk={handleOk}
                onCancel={handleCancel}
                okText='Заказать'
                cancelText='Продолжить'
                {...isFooter}
            >
                {
                    isCorrectPhone
                        ? isEnd
                            ? <div style={{ paddingBottom: '20px' }}>Cпасибо за покупку. Мы с вами свяжемся</div>
                            : <div>
                                <div >
                                    <ArrowLeftOutlined onClick={() => dispatch(setCorrectNumber(false))} style={{ cursor: 'pointer', paddingBottom: '30px' }} />
                                </div>
                                <input ref={phoneValue} id="form" type="text" />
                                <label htmlFor="form">Номер телефона</label>
                            </div>
                        : <div>
                            {renderCart()}
                            <div style={{ marginTop: '30px', fontWeight: 'bold' }}>
                                {totalPrice
                                    ? <div>Общая цена :{totalPrice}грн</div>
                                    : null
                                }
                            </div>
                        </div>
                }
            </Modal>
        </Header>
    )
}

export default Top