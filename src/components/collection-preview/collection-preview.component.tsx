import React from 'react'
import CollectionItem from '../collection-item/collection-item.component'
import { cartItem } from '../../interfaces/cartItem'

import './collection-preview.styles.scss'

interface CollectionPreviewProps {
  title: string
  items: cartItem[]
}

const CollectionPreview = ({ title, items }: CollectionPreviewProps) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item: cartItem, index: number) => index < 4)
        .map((item: cartItem) => (
          <CollectionItem key={item.id} item={item}></CollectionItem>
        ))}
    </div>
  </div>
)

export default CollectionPreview
