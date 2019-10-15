import React from "react"
import { connect } from "react-redux"
import { selectCollection } from "../../redux/shop/shop.selectors"
import CollectionItem from "../../components/collection-item/collection-item.component"

import "./collection.styles.scss"

interface ownProps {
  match: {
    params: {
      collectionId: string
    }
  }
}

interface CollectionPageProps extends ownProps {
  collection: any
}

const CollectionPage = ({ collection }: CollectionPageProps): JSX.Element => (
  <div className='collection-page'>
    <h2>Category Page</h2>
  </div>
)

const mapStateToProps = (state: any, ownProps: ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)
