import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors'
import { cartItem } from '../../interfaces/cartItem'

import CheckoutItem from '../../components/checkout-item/checkout-item'

import './checkout.styles.scss'

interface CheckoutPageProps {
  cartItems: cartItem[]
  total: number
}

const CheckoutPage = ({ cartItems, total }: CheckoutPageProps): JSX.Element => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quanitity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">
      <span>Total: ${total}</span>
    </div>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)
