/* modules */
import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

/* components */
import MenuItem from "../menu-item/menu-item.component"

/* selectors */
import { selectDirectorySections } from "../../redux/directory/directory.selector"

/* interfaces */
import { menuItem } from "../../interfaces/menuItem"

/* styles */
import "./directory.styles.scss"

interface DirectoryProps {
  sections: menuItem[]
}

export const Directory = ({ sections }: DirectoryProps): JSX.Element => (
  <div className='directory-menu'>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps}></MenuItem>
    ))}
  </div>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)
