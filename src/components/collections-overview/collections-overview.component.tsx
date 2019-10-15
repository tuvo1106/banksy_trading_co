import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollections } from '../../redux/shop/shop.selectors'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import { category } from '../../interfaces/category'

import './collections-overview.styles.scss'

interface CollectionsOverviewProps {
  collections: category[]
}

const CollectionsOverview = ({
  collections
}: CollectionsOverviewProps): JSX.Element => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }: category) => (
      <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
    ))}
  </div>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview)
