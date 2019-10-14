import React from "react"
import { withRouter } from "react-router-dom"

import "./menu-item.styles.scss"

interface MenuItemProps {
  history: any
  title?: string
  imageUrl?: string
  size?: string
  linkUrl?: string
  match?: any
}

const MenuItem = ({
  title,
  imageUrl,
  size,
  history,
  linkUrl,
  match
}: MenuItemProps) => (
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
