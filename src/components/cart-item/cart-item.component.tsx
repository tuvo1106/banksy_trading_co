import React from 'react'

import { cartItem } from '../../interfaces/cartItem'

import './cart-item.styles.scss'

interface CartItemProps {
  item: cartItem
}

const CartItem = ({
  item: { imageUrl, price, name, quantity }
}: CartItemProps): JSX.Element => (
  <div className="cart-item">
    <img src={imageUrl} alt="item"></img>
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x {price}
      </span>
    </div>
  </div>
)

export default CartItem
