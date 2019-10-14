import { CartActionTypes } from './cart.types'
import { cartItem } from '../../interfaces/cartItem'

export interface cartAction {
  (item?: cartItem): {
    type: string
    payload?: cartItem
  }
}

export const toggleCartHidden: cartAction = () => ({
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
