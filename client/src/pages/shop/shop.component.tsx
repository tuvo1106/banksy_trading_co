/* modules */
import React, { useEffect, lazy, Suspense } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

/* components */
import Spinner from '../../components/spinner/spinner.component'

/* actions */
import { fetchCollectionsStart } from '../../redux/shop/shop.actions'

const CollectionsOverviewContainer = lazy(() =>
  import('../../components/collections-overview/collections-overview.container')
)
const CollectionPageContainer = lazy(() =>
  import('../collection/collection.container')
)

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
    <div className="shop-page">
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        ></Route>
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        ></Route>
      </Suspense>
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
