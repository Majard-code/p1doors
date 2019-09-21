import React from 'react';
import './serts.css';
import Carousel from './carousel/carousel';
import { useCarousel } from '../../../../libs/useCarousel';
import { prevCarousel, nextCarousel } from '../../../../libs/actions1';

const Serts = () => {
  const [state, dispatch] = useCarousel(14, 200, 20, 'carousel__base', 'carousel', 'carousel-unit');
  return (
    <section className="serts">
        <h2 className="app__h2">СЕРТИФИКАТЫ СООТВЕТСТВИЯ</h2>
        <p className="app__sub-h2">ТОЛЬКО КАЧЕСТВЕННЫЕ ЗАМКИ И ФУРНИТУРА ОТ ВЕДУЩИХ ПРОИЗВОДИТЕЛЕЙ</p>
        <Carousel dispatch={dispatch} state={state} />
        <div className="serts__btns">
          <button className="serts__prev-btn serts__btn" onClick={() => dispatch(prevCarousel())}>&#10148;</button>
          <button className="serts__next-btn serts__btn" onClick={() => dispatch(nextCarousel())}>&#10148;</button>
        </div>
    </section>
  );
}

export default Serts;
