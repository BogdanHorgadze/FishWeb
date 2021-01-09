import { ADDTOCART, SEARCH, SETPRODUCTS, DELETEFROMCART, SETFILTERPRODUCTS, TOTALPRICE, SETMODALCART } from "../actions/actionsTypes";
import { ActionsTypes } from "../actions/actions";
import { product } from "../../Interfaces/Interfaces";


interface IMain {
  products: Array<product>
  isSearch: boolean
  cart: Array<product>
  filterProducts: Array<product>
  totalPrice: number
}

const initialState = {
  products: [],
  isSearch: false,
  cart: [],
  filterProducts: [],
  totalPrice: 0
}

export default function mainReducer(state: IMain = initialState, action: ActionsTypes) {
  switch (action.type) {
    case SETPRODUCTS:
      return { ...state, products: [...action.products] }
    case SEARCH:
      return { ...state, isSearch: action.payload }
    case ADDTOCART:
      return { ...state, cart: [...action.products] }
    case DELETEFROMCART:
      return { ...state, cart: [...action.products] }
    case SETFILTERPRODUCTS:
      return { ...state, filterProducts: [...action.products] }
    case TOTALPRICE :
      return {...state , totalPrice : action.price}
    default:
      return state
  }
}