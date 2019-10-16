import React, { Component } from "react"
import { Route } from "react-router-dom"
import { connect } from "react-redux"

import CollectionsOverview from "../../components/collections-overview/collections-overview.component"
import CollectionPage from "../collection/collection.component"
import { updateCollections } from "../../redux/shop/shop.actions"

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

class ShopPage extends Component<ShopPageProps, {}> {
  unsubscribeFromSnapshot: any = null

  componentDidMount() {
    const { updateCollections } = this.props
    const collectionRef = firestore.collection("collections")
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot: any) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
        updateCollections(collectionsMap)
      }
    )
  }

  render() {
    const { match } = this.props
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverview}></Route>
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}></Route>
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
