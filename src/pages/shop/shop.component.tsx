import React, { Component } from "react"
import { Route } from "react-router-dom"
import { connect } from "react-redux"

import CollectionsOverview from "../../components/collections-overview/collections-overview.component"
import CollectionPage from "../collection/collection.component"
import { updateCollections } from "../../redux/shop/shop.actions"
import WithSpinner from "../../components/with-spinner/with-spinner.component"

import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils"

interface ShopPageProps {
  match: {
    path: string
  }
  updateCollections: Function
}

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends Component<ShopPageProps, {}> {
  state = {
    loading: true
  }
  unsubscribeFromSnapshot: any = null

  componentDidMount() {
    const { updateCollections } = this.props
    const collectionRef = firestore.collection("collections")
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot: any) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
        updateCollections(collectionsMap)
        this.setState({ loading: false })
      }
    )
  }

  render() {
    const { match } = this.props
    const { loading } = this.state
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}></Route>
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}></Route>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch: Function) => ({
  updateCollections: (collectionsMap: any) =>
    dispatch(updateCollections(collectionsMap))
})

export default connect(
  null,
  mapDispatchToProps
)(ShopPage)
