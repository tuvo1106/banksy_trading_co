/* modules */
import React from "react"
import { connect } from "react-redux"

/* actions */
import {
  clearItemFromCart,
  addItem,
  removeItem
} from "../../redux/cart/cart.actions"

/* interfaces */
import { cartItem, cartAction } from "../../interfaces/cart"

/* styles */
import "./checkout-item.styles.scss"

interface CheckoutItemProps {
  cartItem: cartItem
  clearItem: cartAction
  addItem: cartAction
  removeItem: cartAction
}

export const CheckoutItem = ({
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
        <div className='remove-item arrow' onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='add-item arrow' onClick={() => addItem(cartItem)}>
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

const mapDispatchToProps = (dispatch: Function) => ({
  clearItem: (item: cartItem) => dispatch(clearItemFromCart(item)),
  addItem: (item: cartItem) => dispatch(addItem(item)),
  removeItem: (item: cartItem) => dispatch(removeItem(item))
})

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem)
