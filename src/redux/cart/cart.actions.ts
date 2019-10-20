import { CartActionTypes } from "./cart.types"
import { cartAction } from "../../interfaces/cart"

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem: cartAction = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
})

export const clearItemFromCart: cartAction = item => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
})

export const removeItem: cartAction = item => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
})

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART
})
