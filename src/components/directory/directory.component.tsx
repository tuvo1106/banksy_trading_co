import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import { selectDirectorySections } from "../../redux/directory/directory.selector"
import { directoryItem } from "../../interfaces/directoryItem"
import MenuItem from "../menu-item/menu-item.component"

import "./directory.styles.scss"

interface DirectoryProps {
  sections: directoryItem[]
}

const Directory = ({ sections }: DirectoryProps): JSX.Element => (
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
