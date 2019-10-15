import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCollections } from '../../redux/shop/shop.selectors'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import { category, subcategory } from '../../interfaces/category'

interface ShopDataProps {
  collections: category[]
}

const ShopPage = ({ collections }: ShopDataProps) => (
  <div className="shop-page">
    {collections.map(({ id, ...otherCollectionProps }: category) => (
      <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
    ))}
  </div>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})

export default connect(mapStateToProps)(ShopPage)
