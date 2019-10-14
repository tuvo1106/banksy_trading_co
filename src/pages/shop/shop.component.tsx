import React, { Component } from 'react'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

import SHOP_DATA from './shop.data'

// interface subcategory {
//   id: number
//   name: string
//   imageUrl: string
//   price: number
// }

// interface category {
//   id: number
//   title: string
//   routeName: string
//   items: subcategory[]
// }

interface ShopPageState {
  collections: any[]
}

class ShopPage extends Component<any, ShopPageState> {
  constructor(props: any) {
    super(props)

    this.state = {
      collections: SHOP_DATA
    }
  }

  render() {
    const { collections } = this.state
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview
            key={id}
            {...otherCollectionProps}
          ></CollectionPreview>
        ))}
      </div>
    )
  }
}

export default ShopPage
