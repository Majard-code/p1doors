import React from 'react';
import './carousel.css';
import CarouselUnit from './carousel-unit/carousel-unit';

const Carousel = (props) => {
  let tegCarouselUnit = [];
  for (let i = 0; i < props.state.units; i++) {
    tegCarouselUnit.push(<CarouselUnit key={i} id={`carousel-unit${i}`} dispatch={props.dispatch} state={props.state}/>)
  }
  return (
    <section className="carousel__base">
      <div className="carousel">
        {tegCarouselUnit}
      </div>
    </section>
  );
}

export default Carousel;
