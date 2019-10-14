import React from "react"

import "./cart-item.styles.scss"

interface CartItemProps {
  item: {
    imageUrl: string
    price: number
    name: string
    quantity: number
  }
}

const CartItem = ({
  item: { imageUrl, price, name, quantity }
}: CartItemProps) => (
  <div className='cart-item'>
    <img src={imageUrl} alt='item'></img>
    <div className='item-details'>
      <span className='name'>{name}</span>
      <span className='price'>
        {quantity} x {price}
      </span>
    </div>
  </div>
)

export default CartItem
