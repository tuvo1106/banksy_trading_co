import React from "react"
import CollectionItem from "../collection-item/collection-item.component"

import "./collection-preview.styles.scss"

interface CollectionPreviewProps {
  title: string
  items: any[]
}

const CollectionPreview = ({ title, items }: CollectionPreviewProps) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((item: any, index: number) => index < 4)
        .map((item: any) => (
          <CollectionItem key={item.id} item={item}></CollectionItem>
        ))}
    </div>
  </div>
)

export default CollectionPreview
