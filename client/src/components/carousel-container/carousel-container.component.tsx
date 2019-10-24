/* modules */
import React from 'react'

/* components */
import { Carousel } from 'react-bootstrap/'

/* styles */
import './carousel-container.styles.scss'

const CarouselContainer = (): JSX.Element => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80"
          alt="First slide"
        />
        <Carousel.Caption>
          <h2>Simple and elegant.</h2>
          <p>Being a true gentleman never goes out of style</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>Featuring the latest in men's fashions.</h3>
          <p>Dressing well is a form of good manners. - Tom Ford</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1481608726045-7407244fb7b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80"
          alt="First slide"
        />
        <Carousel.Caption>
          <h2>Suit up.</h2>
          <p>People will stare. Make it worth their while.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselContainer
