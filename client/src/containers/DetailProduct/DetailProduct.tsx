import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from "react-router-dom";
import { product } from '../../Interfaces/Interfaces';
import { buyThunk, getProducts, orderThunk } from '../../store/actions/actions'
import { BiPlus } from "react-icons/bi";
import { AiOutlineMinus } from "react-icons/ai";
import { AppState } from '../../store/reducers/rootReducer';
import { Modal } from 'antd';

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
  const [isOrder, setIsOrder] = useState(false);
  const [isEnd, setIsEnd] = useState(false)
  const [isFooter, setIsFooter] = useState({})
  const phoneValue = useRef<any>(null)
  const regPhone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/

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

  const renderCart = () => {
    if (cart.length) {
      return cart.map((item, i) => {
        return (
          <div key={`item` + i}>
            {item.name}
            <span>{item.count} </span>
            <span>{
              item.selectedSize.map((size, i) => {
                return (
                  <span key={`size` + i}> {size} </span>
                )
              })
            }</span>
            <span>цена : {+item.count * +item.price}</span>
          </div>
        )
      })
    }
  }

  const handleOk = () => {
    if (cart.length) {
      setIsOrder(true)
    }
    if (isOrder && regPhone.test(phoneValue.current!.value) && cart.length) {
      dispatch(orderThunk(phoneValue.current?.value))
      setIsEnd(true)
    }
  };

  const handleCancel = () => {
    setIsOrder(false)
    setIsModalVisible(false);
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
      <Modal title={isOrder ? 'Оформление заказа' : 'Корзина'}
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
            : isOrder
              ? isEnd
                ? 'Cпасибо за покупку. Мы с вами свяжемся'
                : <div>
                  <input ref={phoneValue} id="form" type="text" />
                  <label htmlFor="form">Номер телефона</label>
                </div>
              : <div>
                {renderCart()}
                {totalPrice
                  ? <div>Цена :{totalPrice}</div>
                  : null
                }
              </div>
        }
      </Modal>
    </div>
  )
}

export default DetailProduct
