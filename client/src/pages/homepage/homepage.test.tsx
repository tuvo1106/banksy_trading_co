/* modules */
import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

/* components */
import Homepage from './homepage.component'

configure({ adapter: new Adapter() })

it('should render Homepage component', () => {
  expect(shallow(<Homepage />)).toMatchSnapshot()
})
