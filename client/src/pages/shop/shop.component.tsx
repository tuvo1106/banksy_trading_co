/* modules */
import React, { useEffect } from "react"
import { Route } from "react-router-dom"
import { connect } from "react-redux"

/* components */
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container"
import CollectionPageContainer from "../collection/collection.container"

/* actions */
import { fetchCollectionsStart } from "../../redux/shop/shop.actions"

interface ShopPageProps {
  match: {
    path: string
  }
  fetchCollectionsStart: Function
}

export const ShopPage = ({
  match,
  fetchCollectionsStart
}: ShopPageProps): JSX.Element => {
  useEffect(() => {
    fetchCollectionsStart()
  }, [fetchCollectionsStart])

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

const mapDispatchToProps = (dispatch: Function) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(
  null,
  mapDispatchToProps
)(ShopPage)
