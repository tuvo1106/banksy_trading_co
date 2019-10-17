import React, { Component } from "react"
import { Route } from "react-router-dom"
import { connect } from "react-redux"

import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container"
import CollectionPageContainer from "../collection/collection.container"
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions"

interface ShopPageProps {
  match: {
    path: string
  }
  isCollectionFetching: boolean
  isCollectionLoaded: boolean
  fetchCollectionsStartAsync: Function
}

class ShopPage extends Component<ShopPageProps, {}> {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props
    fetchCollectionsStartAsync()
  }

  render() {
    const { match } = this.props
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}></Route>
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}></Route>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch: Function) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(
  null,
  mapDispatchToProps
)(ShopPage)
