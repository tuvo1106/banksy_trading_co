/* modules */
import React from "react"
import { withRouter, RouteComponentProps } from "react-router-dom"

/* components */
import CollectionItem from "../collection-item/collection-item.component"

/* interfaces */
import { subcategory } from "../../interfaces/category"

/* styles */
import "./collection-preview.styles.scss"

interface CollectionPreviewProps extends RouteComponentProps {
  title: string
  routeName: string
  items: subcategory[]
}

export const CollectionPreview = ({
  title,
  routeName,
  items,
  history,
  match
}: CollectionPreviewProps) => (
  <div className='collection-preview'>
    <h1
      className='title'
      onClick={() => history.push(`${match.path}/${routeName}`)}>
      {title.toUpperCase()}
    </h1>
    <div className='preview'>
      {items
        .filter((item: subcategory, index: number) => item && index < 4)
        .map((item: subcategory) => (
          <CollectionItem key={item.id} item={item}></CollectionItem>
        ))}
    </div>
  </div>
)

export default withRouter(CollectionPreview)
