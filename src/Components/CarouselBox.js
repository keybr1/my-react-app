import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import grasswaterImg from '../assets/grasswater.jpg';
import houseImg from '../assets/house.jpg';
import dolphinsImg from '../assets/dolphins.jpg';

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ dolphinsImg }
            alt="Dolphins"
          />
          <Carousel.Caption>
            <h3>Dolphins Image</h3>
            <p> 
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum
               alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus! 
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ houseImg }
            alt="House"
          />
          <Carousel.Caption>
            <h3>House Image</h3>
            <p> 
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum
               alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus! 
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ grasswaterImg }
            alt="GrassWater"
          />
          <Carousel.Caption>
            <h3>GrassWater Image</h3>
            <p> 
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum
               alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus! 
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}
