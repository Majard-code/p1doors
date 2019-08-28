import React from 'react';
import './carousel.css';
import { openCarousel } from '../../../../../libs/actions1';

const Carousel = (props) => {
  return (
    <section className="carousel__base">
      <div className="carousel">
        <div className="carousel__unit carousel__unit__btn" onClick={e => { const myself = e.currentTarget; props.dispatch(openCarousel(myself)) }}>
          <div className="carousel__unit__btn_look"></div>
        </div>
        <div className="carousel__unit carousel__unit__btn" onClick={e => { const myself = e.currentTarget; props.dispatch(openCarousel(myself)) }}>
          <div className="carousel__unit__btn_look"></div>
        </div>
        <div className="carousel__unit carousel__unit__btn" onClick={e => { const myself = e.currentTarget; props.dispatch(openCarousel(myself)) }}>
          <div className="carousel__unit__btn_look"></div>
        </div>
        <div className="carousel__unit carousel__unit__btn" onClick={e => { const myself = e.currentTarget; props.dispatch(openCarousel(myself)) }}>
          <div className="carousel__unit__btn_look"></div>
        </div>
        <div className="carousel__unit carousel__unit__btn" onClick={e => { const myself = e.currentTarget; props.dispatch(openCarousel(myself)) }}>
          <div className="carousel__unit__btn_look"></div>
        </div>
        <div className="carousel__unit carousel__unit__btn" onClick={e => { const myself = e.currentTarget; props.dispatch(openCarousel(myself)) }}>
          <div className="carousel__unit__btn_look"></div>
        </div>
        <div className="carousel__unit carousel__unit__btn" onClick={e => { const myself = e.currentTarget; props.dispatch(openCarousel(myself)) }}>
          <div className="carousel__unit__btn_look"></div>
        </div>
        <div className="carousel__unit carousel__unit__btn" onClick={e => { const myself = e.currentTarget; props.dispatch(openCarousel(myself)) }}>
          <div className="carousel__unit__btn_look"></div>
        </div>
        <div className="carousel__unit carousel__unit__btn" onClick={e => { const myself = e.currentTarget; props.dispatch(openCarousel(myself)) }}>
          <div className="carousel__unit__btn_look"></div>
        </div>
        <div className="carousel__unit carousel__unit__btn" onClick={e => { const myself = e.currentTarget; props.dispatch(openCarousel(myself)) }}>
          <div className="carousel__unit__btn_look"></div>
        </div>
        <div className="carousel__unit carousel__unit__btn" onClick={e => { const myself = e.currentTarget; props.dispatch(openCarousel(myself)) }}>
          <div className="carousel__unit__btn_look"></div>
        </div>
        <div className="carousel__unit carousel__unit__btn" onClick={e => { const myself = e.currentTarget; props.dispatch(openCarousel(myself)) }}>
          <div className="carousel__unit__btn_look"></div>
        </div>
        <div className="carousel__unit carousel__unit__btn" onClick={e => { const myself = e.currentTarget; props.dispatch(openCarousel(myself)) }}>
          <div className="carousel__unit__btn_look"></div>
        </div>
        <div className="carousel__unit carousel__unit__btn" onClick={e => { const myself = e.currentTarget; props.dispatch(openCarousel(myself)) }}>
          <div className="carousel__unit__btn_look"></div>
        </div>
        <div className="carousel__unit carousel__unit__btn" onClick={e => { const myself = e.currentTarget; props.dispatch(openCarousel(myself)) }}>
          <div className="carousel__unit__btn_look"></div>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
