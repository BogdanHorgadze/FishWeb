import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from "react-router-dom";
import { product } from '../../Interfaces/Interfaces';
import { buyThunk, deleteFullItemThunk, getProducts, orderThunk, setIsEnd, setCorrectNumber, refresh, setFilterProducts } from '../../store/actions/actions'
import { BiPlus } from "react-icons/bi";
import { AiOutlineMinus } from "react-icons/ai";
import { AppState } from '../../store/reducers/rootReducer';
import { Modal, Row, Col } from 'antd';
import { CloseCircleOutlined, ArrowLeftOutlined } from '@ant-design/icons';

type Params = {
  productId: string
}

const DetailProduct: React.FC = () => {
  const dispatch = useDispatch()
  const { productId } = useParams<Params>();
  const products: Array<product> = useSelector((state: AppState) => state.mainReducer.products)
  const cart: Array<product> = useSelector((state: AppState) => state.mainReducer.cart)
  const totalPrice: number = useSelector((state: AppState) => state.mainReducer.totalPrice)
  const [product, setProduct] = useState<product>()
  const [size, setSize] = useState<string>('')
  const [isModalVisible, setIsModalVisible] = useState(false);
  const isCorrectPhone = useSelector((state: AppState) => state.mainReducer.isCorrectPhone)
  const isEnd = useSelector((state: AppState) => state.mainReducer.isEnd)
  const [isFooter, setIsFooter] = useState({})
  const phoneValue = useRef<any>(null)
  const regPhone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/

  useEffect(() => {
    dispatch(setFilterProducts([]))
  }, [])

  useEffect(() => {
    const product = products.filter(item => item._id === productId)
    setProduct(product[0])
    if (!products.length) {
      dispatch(getProducts())
    }
  }, [products])

  useEffect(() => {
    if (isEnd) {
      setIsFooter({ footer: null })
    } else {
      setIsFooter({})
    }
  }, [isEnd])

  const buyHandler = (action: string) => {
    if (size) {
      dispatch(buyThunk(product?._id, action, size))
      setIsModalVisible(true)
    } else {
      setIsModalVisible(true)
    }
  }

  const renderSizeHandler = () => {
    return product?.size?.split(',').map((item, i) => {
      return (
        <div key={item + i}>
          <input onClick={() => setSize(item)} type="radio" id={item + i} value={item} name='size'></input>
          <label htmlFor={item + i}>{item}</label>
        </div>
      )
    })
  }

  const clearCart = (id: string) => {
    dispatch(deleteFullItemThunk(id))
  }

  const renderCart = () => {
    if (cart.length) {
      return cart.map((item, i) => {
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
                      <div style={{ marginLeft: '10px' }} key={`size` + i}> {size} </div>
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
      })
    }
  }

  const handleOk = () => {
    if (cart.length) {
      dispatch(setCorrectNumber(true))
    }
    if (isCorrectPhone && regPhone.test(phoneValue.current!.value) && cart.length) {
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

  return (
    <div>
      <div>{product?.name}</div>
      <div>
        <form action="">
          <p>Выберите размер</p>
          {renderSizeHandler()}
        </form>
      </div>
      {product?.count == 0
        ? <button onClick={() => buyHandler('add')}>buy</button>
        : <div>
          <span onClick={() => buyHandler('delete')}><AiOutlineMinus /></span>
          <input type="text" width='50px' readOnly value={String(product?.count)} />
          <span onClick={() => buyHandler('add')}><BiPlus /></span>
        </div>
      }
      <Modal title={isCorrectPhone ? 'Оформление заказа' : 'Корзина'}
        width={1000}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelText='Продолжить'
        okText='Заказать'
        {...isFooter}
      >
        {
          !size
            ? 'выберите размер'
            : isCorrectPhone
              ? isEnd
                ? <div style={{ paddingBottom: '20px' }}>Cпасибо за покупку. Мы с вами свяжемся</div>
                : <div>
                  <div>
                    <ArrowLeftOutlined onClick={()=> dispatch(setCorrectNumber(false))} style={{ cursor: 'pointer', paddingBottom:'30px' }} />
                  </div>
                  <label style={{ marginRight: '5px' }} htmlFor="form">Номер телефона :</label>
                  <input ref={phoneValue} id="form" type="text" />
                </div>
              : <div>
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
    </div>
  )
}

export default DetailProduct
