import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import { toggleCartHidden } from "../../redux/cart/cart.actions"
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"
import { selectCartItemsCount } from "../../redux/cart/cart.selectors"

import "./cart-icon.styles.scss"

interface CartIconProps {
  toggleCartHidden: any
  itemCount: number
}

const CartIcon = ({ toggleCartHidden, itemCount }: CartIconProps) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon'></ShoppingIcon>
    <span className='item-count'>{itemCount}</span>
  </div>
)

const mapDispatchToProps = (dispatch: any) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon)
