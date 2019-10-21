/* modules */
import React from "react"
import { connect } from "react-redux"

/* components */
import CustomButton from "../custom-button/custom-button.component"

/* actions */
import { addItem } from "../../redux/cart/cart.actions"

/* interfaces */
import { cartItem, cartAction } from "../../interfaces/cart"

/* styles */
import "./collection-item.styles.scss"

interface CollectionItemProps {
  item: any
  addItem: cartAction
}

export const CollectionItem = ({
  item,
  addItem
}: CollectionItemProps): JSX.Element => {
  const { name, price, imageUrl } = item
  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  )
}

const mapDispatchtoProps = (dispatch: Function) => ({
  addItem: (item: cartItem) => dispatch(addItem(item))
})

export default connect(
  null,
  mapDispatchtoProps
)(CollectionItem)
