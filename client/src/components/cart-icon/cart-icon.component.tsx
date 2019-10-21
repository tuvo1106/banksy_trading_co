/* modules */
import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

/* components */
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"

/* selectors */
import { selectCartItemsCount } from "../../redux/cart/cart.selectors"

/* actions */
import { toggleCartHidden } from "../../redux/cart/cart.actions"

/* styles */
import "./cart-icon.styles.scss"

interface CartIconProps {
  toggleCartHidden: (event: any) => void
  itemCount: number
}

export const CartIcon = ({
  toggleCartHidden,
  itemCount
}: CartIconProps): JSX.Element => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon'></ShoppingIcon>
    <span className='item-count'>{itemCount}</span>
  </div>
)

const mapDispatchToProps = (dispatch: Function) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon)
