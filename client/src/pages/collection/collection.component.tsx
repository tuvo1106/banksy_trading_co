/* modules */
import React from "react"
import { connect } from "react-redux"

/* components */
import CollectionItem from "../../components/collection-item/collection-item.component"

/* selectors */
import { selectCollection } from "../../redux/shop/shop.selectors"

/* interfaces */
import { subcategory } from "../../interfaces/category"

/* styles */
import "./collection.styles.scss"

interface ownProps {
  match: {
    params: {
      collectionId: string
    }
  }
}

interface CollectionPageProps extends ownProps {
  collection: {
    title: string
    items: subcategory[]
  }
}

export const CollectionPage = ({
  collection
}: CollectionPageProps): JSX.Element => {
  const { title, items } = collection
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <CollectionItem key={item.id} item={item}></CollectionItem>
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state: any, ownProps: ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)
