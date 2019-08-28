import React from 'react';
import './slider.css';
import { useSlider } from '../../../../libs/useSlider';
import { autoSlide, prevSlide, nextSlide, wantSlide } from '../../../../libs/actions1';

const Slider = () => {
  const dispatch = useSlider();
  let timeoutHandle = window.setTimeout(() => { dispatch(autoSlide()) }, 5000);

  return (
    <section className="slider">
      <div className="slider__slide slider__slide1 slider__slide_active animated fadeIn">
        <div></div>
        <div className="slider__text animated fadeInUp">Двери Армада выпускаются с 2007 года. За прошедшее время компания выросла от небольшого цеха по производству входных дверей до крупного завода, выпускающего более 1000 единиц продукции ежемесячно.</div>
        <div className="slider__text animated fadeInUp"></div>
      </div>
      <div className="slider__slide slider__slide2 animated fadeIn">
        <div></div>
        <div className="slider__text animated fadeInUp">Грамотное руководство, штат первоклассных сотрудников, современное оборудование – все это позволяет выпускать продукцию неизменно высокого качества, которая по праву пользуется спросом у населения.</div>
        <div className="slider__text animated fadeInUp"></div>
      </div>
      <div className="slider__slide slider__slide3 animated fadeIn">
        <div></div>
        <div className="slider__text animated fadeInUp">Цель нашей работы – предлагать только лучшее. С этой целью на предприятии происходит постоянное освоение передовых технологий металлообработки и внедрение новинок в сфере строительства, безопасности и дизайна.</div>
        <div className="slider__text animated fadeInUp"></div>
      </div>
      <div className="slider__slide slider__slide4 animated fadeIn">
        <div></div>
        <div className="slider__text animated fadeInUp">При изготовление дверей на заказ возможна реализация любых пожеланий клиента без увеличения сроков производства дверей.</div>
        <div className="slider__text animated fadeInUp"></div>
      </div>
      <div className="slider__slide slider__slide5 animated fadeIn">
        <div></div>
        <div className="slider__text animated fadeInUp">Мы всегда рады предложить Вам качественные входные металлические двери широкого ценового диапазона, оборудованные современными замками и фурнитурой от ведущих производителей: APEX, BORDER, CISA, CRIT, KALE, MOTTURA, REZIDENT, ГАРДИАН и др.</div>
        <div className="slider__text animated fadeInUp"></div>
      </div>
      <div className="slider__slide slider__slide6 animated fadeIn">
        <div></div>
        <div className="slider__text animated fadeInUp">Работаем по принципу "демонстрационный зал с доставкой на дом". Комплект образцов позволяет заказчику представить не только внешний вид будущей двери, но и в деталях разобраться в конструкции.</div>
        <div className="slider__text animated fadeInUp"></div>
      </div>
      <div className="slider__slide slider__slide7 animated fadeIn">
        <div></div>
        <div className="slider__text animated fadeInUp">Мы максимально упростили процедуру заказа: договор заключается на объекте, сразу вносится предоплата, в том числе с использованием пластиковых карт.</div>
        <div className="slider__text animated fadeInUp"></div>
      </div>
      <div className="slider__dots">
        <span className="slider__dot slider__dot_active" onClick={() => dispatch(wantSlide(1, timeoutHandle))}></span>
        <span className="slider__dot" onClick={() => dispatch(wantSlide(2, timeoutHandle))}></span>
        <span className="slider__dot" onClick={() => dispatch(wantSlide(3, timeoutHandle))}></span>
        <span className="slider__dot" onClick={() => dispatch(wantSlide(4, timeoutHandle))}></span>
        <span className="slider__dot" onClick={() => dispatch(wantSlide(5, timeoutHandle))}></span>
        <span className="slider__dot" onClick={() => dispatch(wantSlide(6, timeoutHandle))}></span>
        <span className="slider__dot" onClick={() => dispatch(wantSlide(7, timeoutHandle))}></span>
      </div>
      <button className="slider__btn slider__btn-prev" onClick={() => dispatch(prevSlide(timeoutHandle))}>&#10094;</button>
      <button className="slider__btn slider__btn-next" onClick={() => dispatch(nextSlide(timeoutHandle))}>&#10095;</button>
    </section>
  );
}

export default Slider;
