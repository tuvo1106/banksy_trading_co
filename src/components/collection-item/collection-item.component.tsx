import React from "react"
import { connect } from "react-redux"

import CustomButton from "../custom-button/custom-button.component"
import { addItem } from "../../redux/cart/cart.actions"
import { subcategory } from "../../interfaces/category"
import { cartItem } from "../../interfaces/cart"

import "./collection-item.styles.scss"

interface CollectionItemProps {
  item: subcategory
  addItem: (item: any) => { type: string; payload: cartItem }
}

const CollectionItem = ({
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
