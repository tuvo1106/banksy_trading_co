import React from 'react'
import CollectionItem from '../collection-item/collection-item.component'
import { subcategory } from '../../interfaces/category'

import './collection-preview.styles.scss'

interface CollectionPreviewProps {
  title: string
  items: subcategory[]
}

const CollectionPreview = ({ title, items }: CollectionPreviewProps) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item: subcategory, index: number) => index < 4)
        .map((item: subcategory) => (
          <CollectionItem key={item.id} item={item}></CollectionItem>
        ))}
    </div>
  </div>
)

export default CollectionPreview
