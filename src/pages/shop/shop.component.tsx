import React from "react"
import { Route } from "react-router-dom"

import CollectionsOverview from "../../components/collections-overview/collections-overview.component"
import CollectionPage from "../collection/collection.component"

interface ShopPageProps {
  match: {
    path: string
  }
}

const ShopPage = ({ match }: ShopPageProps): JSX.Element => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview}></Route>
    <Route
      path={`${match.path}/:collectionId`}
      component={CollectionPage}></Route>
  </div>
)

export default ShopPage
