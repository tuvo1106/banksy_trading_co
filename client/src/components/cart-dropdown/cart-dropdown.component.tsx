/* modules */
import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'

/* components */
import CartItem from '../cart-item/cart-item.component'
import CustomButton from '../custom-button/custom-button.component'

/* selectors */
import { selectCartItems } from '../../redux/cart/cart.selectors'

/* actions */
import { toggleCartHidden } from '../../redux/cart/cart.actions'

/* interfaces */
import { cartItem } from '../../interfaces/cart'

/* styling */
import './cart-dropdown.scss'

interface CartDropdownProps {
  cartItems: cartItem[]
  history: {
    push: Function
  }
  dispatch: Function
}

export const CartDropdown = ({
  cartItems,
  history,
  dispatch
}: CartDropdownProps): JSX.Element => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem: cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push('/checkout')
        dispatch(toggleCartHidden())
      }}
    >
      Checkout
    </CustomButton>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
