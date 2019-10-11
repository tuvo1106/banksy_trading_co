import React from 'react'

import CustomButton from './../custom-button/custom-button.component'

import './cart-dropdown.scss'

const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items' />
    <CustomButton>Checkout</CustomButton>
  </div>
)

export default CartDropdown
