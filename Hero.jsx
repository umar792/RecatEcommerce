import React from 'react'
import "./Hero.css"
import Carousel from 'react-bootstrap/Carousel';

const Hero = () => {
  return (
    <>
       <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://binyousaf.pk/wp-content/uploads/2022/11/1-4.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        <button className='slider-btn'>SHOP NOW</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://binyousaf.pk/wp-content/uploads/2022/11/2-4.jpg"
          alt="Second slide"
        style={{height : "100%"}}
        />

        <Carousel.Caption>
        <button className='slider-btn'>SHOP NOW</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://binyousaf.pk/wp-content/uploads/2022/11/3-5.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
         <button className='slider-btn'>SHOP NOW</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default Hero
