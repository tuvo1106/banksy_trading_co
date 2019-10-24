/* modules */
import React from 'react'

/* components */
import Directory from '../../components/directory/directory.component'
import CarouselContainer from '../../components/carousel-container/carousel-container.component'

/* styles */
import './homepage.styles.scss'

const HomePage = (): JSX.Element => (
  <div className="homepage">
    <CarouselContainer />
    <Directory />
  </div>
)

export default HomePage
