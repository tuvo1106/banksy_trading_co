/* modules */
import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

/* components */
import CarouselContainer from './carousel-container.component'

configure({ adapter: new Adapter() })

it('should render CarouselContainer component', () => {
  expect(shallow(<CarouselContainer />)).toMatchSnapshot()
})
