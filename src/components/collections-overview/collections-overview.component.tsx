/* modules */
import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

/* components */
import CollectionPreview from "../../components/collection-preview/collection-preview.component"

/* selectors */
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors"

/* interfaces */
import { category } from "../../interfaces/category"

/* styles */
import "./collections-overview.styles.scss"

interface CollectionsOverviewProps {
  collections: category[]
}

export const CollectionsOverview = ({
  collections
}: CollectionsOverviewProps): JSX.Element => (
  <div className='collections-overview'>
    {collections.map(({ id, ...otherCollectionProps }: category) => (
      <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
    ))}
  </div>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)
