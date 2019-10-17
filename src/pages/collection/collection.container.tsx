import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors"
import WithSpinner from "../../components/with-spinner/with-spinner.component"
import CollectionPage from "./collection.component"

const mapStateToProps = createStructuredSelector({
  isloading: state => !selectIsCollectionsLoaded(state)
})

const CollectionPageContainer = connect(mapStateToProps)(
  WithSpinner(CollectionPage)
)

export default CollectionPageContainer
