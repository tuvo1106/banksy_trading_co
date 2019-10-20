/* modules */
import React from "react"
import { withRouter, RouteComponentProps } from "react-router-dom"

/* styles */
import "./menu-item.styles.scss"

interface MenuItemProps extends RouteComponentProps {
  title: string
  imageUrl: string
  linkUrl: string
  size?: string
}

export const MenuItem = ({
  title,
  imageUrl,
  linkUrl,
  size,
  history,
  match
}: MenuItemProps): JSX.Element => (
  <div
    className={`${size} menu-item`}
    onClick={() => {
      history.push(`${match.url}${linkUrl}`)
    }}>
    <div
      className='background-image'
      style={{ backgroundImage: `url(${imageUrl})` }}></div>
    <div className='content'>
      <h1 className='title'>{title ? title.toUpperCase() : null}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
)

export default withRouter(MenuItem)
