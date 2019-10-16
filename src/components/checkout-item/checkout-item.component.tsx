import React from "react"
import { connect } from "react-redux"

import {
  clearItemFromCart,
  addItem,
  removeItem
} from "../../redux/cart/cart.actions"

import "../../interfaces/cartItem"
import "./checkout-item.styles.scss"
import { cartItem } from "../../interfaces/cartItem"

interface CheckoutItemProps {
  cartItem: cartItem
  clearItem: (item: cartItem) => { type: string; payload: cartItem }
  addItem: (item: cartItem) => { type: string; payload: cartItem }
  removeItem: (item: cartItem) => { type: string; payload: cartItem }
}

const CheckoutItem = ({
  cartItem,
  clearItem,
  addItem,
  removeItem
}: CheckoutItemProps): JSX.Element => {
  const { name, imageUrl, price, quantity } = cartItem
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch: any) => ({
  clearItem: (item: cartItem) => dispatch(clearItemFromCart(item)),
  addItem: (item: cartItem) => dispatch(addItem(item)),
  removeItem: (item: cartItem) => dispatch(removeItem(item))
})

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem)
