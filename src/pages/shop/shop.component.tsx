import React, { Component } from "react"
import { Route } from "react-router-dom"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import {
  selectIsCollectionFetching,
  selectIsCollectionsLoaded
} from "../../redux/shop/shop.selectors"

import CollectionsOverview from "../../components/collections-overview/collections-overview.component"
import CollectionPage from "../collection/collection.component"
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions"
import WithSpinner from "../../components/with-spinner/with-spinner.component"

interface ShopPageProps {
  match: {
    path: string
  }
  isCollectionFetching: boolean
  isCollectionLoaded: boolean
  fetchCollectionsStartAsync: Function
}

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends Component<ShopPageProps, {}> {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props
    fetchCollectionsStartAsync()
  }

  render() {
    const { match, isCollectionFetching, isCollectionLoaded } = this.props
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}></Route>
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner
              isLoading={!isCollectionLoaded}
              {...props}
            />
          )}></Route>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionLoaded: selectIsCollectionsLoaded
})

const mapDispatchToProps = (dispatch: Function) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopPage)
