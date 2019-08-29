import React from 'react';
import './carousel-unit.css';
import { lookCarousel } from '../../../../../../libs/actions1';

const CarouselUnit = (props) => {
  return (
    <section className="carousel-unit" id={props.id} onClick={e => {const myself = e.currentTarget; props.dispatch(lookCarousel(myself)) }}>
      <div className="carousel-unit__init-btn carousel-unit__btn_look"></div>
    </section>
  );
}

export default CarouselUnit;
