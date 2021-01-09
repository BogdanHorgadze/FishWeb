import axios from 'axios'
import { Dispatch } from 'react'
import { product } from '../../Interfaces/Interfaces'
import { AppState } from '../reducers/rootReducer'
import { SETPRODUCTS, SEARCH, ADDTOCART, DELETEFROMCART, SETFILTERPRODUCTS, TOTALPRICE, SETMODALCART } from './actionsTypes'

type dispatchType = Dispatch<ActionsTypes>

export const getProducts = () => {
  return async (dispatch: dispatchType) => {
    const res = await axios.get('http://localhost:5000/api/products')
    dispatch(setProducts(res.data))
  }
}

export const filterThunk = (product: string) => {
  return async (dispatch: dispatchType, getState: () => AppState) => {
    const products = getState().mainReducer.products
    const filteredProducts = products.filter(item => item.name.slice(0, product.length).toLowerCase() === product.toLowerCase())
    dispatch(setFilterProducts(filteredProducts))
  }
}

export const buyThunk =
  (productId: string | any, action: string, size: string) => {
    return (dispatch: dispatchType, getState: () => AppState) => {
      const products = getState().mainReducer.products
      if (action === 'add') {
        products.forEach(item => {
          if (item._id === productId) {
            item.count = +item.count + 1
            item.selectedSize.push(size)
          }
        })

        const cart = products.filter(item => item.count > 0)

        const initialValue = 0;
        const totalPrice = cart.reduce(
          (accumulator, currentValue) => accumulator + +currentValue.count * +currentValue.price,
          initialValue
        );

       
        dispatch(setTotalPrice(totalPrice))
        dispatch(setProducts(products))
        dispatch(addToCart(cart))
      } else {
        products.forEach(item => {
          if (item._id === productId) {
            item.count = +item.count - 1
            item.selectedSize.pop()
          }
        })

        const cart = products.filter(item => item.count > 0)

        const initialValue = 0;
        const totalPrice = cart.reduce(
          (accumulator, currentValue) => accumulator + +currentValue.count * +currentValue.price,
          initialValue
        );

        
        dispatch(setTotalPrice(totalPrice))
        dispatch(deleteFromCart(cart))
        dispatch(setProducts(products))
      }
    }
  }

export const orderThunk = (phoneNumber: string) => {
  return async (dispatch: dispatchType, getState: () => AppState) => {
    const cart = getState().mainReducer.cart
    const totalPrice = getState().mainReducer.totalPrice
    await axios.post('http://localhost:5000/api/order', { phoneNumber, cart , totalPrice })
  }
}

type setTotalPriceType = {
  type: typeof TOTALPRICE,
  price: number
}

const setTotalPrice = (price: number): setTotalPriceType => {
  return {
    type: TOTALPRICE,
    price
  }
}


type setProductsType = {
  type: typeof SETPRODUCTS,
  products: Array<product>
}

export const setProducts = (products: Array<product>): setProductsType => {
  return {
    type: SETPRODUCTS,
    products
  }
}

type searchType = {
  type: typeof SEARCH,
  payload: boolean
}

export const setSearch = (payload: boolean): searchType => {
  return {
    type: SEARCH,
    payload
  }
}

type addToCartType = {
  type: typeof ADDTOCART,
  products: Array<product>
}

export const addToCart = (products: Array<product>): addToCartType => {
  return {
    type: ADDTOCART,
    products
  }
}

type deleteFromCartType = {
  type: typeof DELETEFROMCART,
  products: Array<product>
}

export const deleteFromCart = (products: Array<product>): deleteFromCartType => {
  return {
    type: DELETEFROMCART,
    products
  }
}

type setFilterProductsType = {
  type: typeof SETFILTERPRODUCTS,
  products: Array<product>
}

export const setFilterProducts = (products: Array<product>): setFilterProductsType => {
  return {
    type: SETFILTERPRODUCTS,
    products
  }
}


export type ActionsTypes =
  setProductsType |
  searchType |
  addToCartType |
  deleteFromCartType |
  setFilterProductsType |
  setTotalPriceType 