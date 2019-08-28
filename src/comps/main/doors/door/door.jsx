import React from 'react';
import './door.css';

const Door = (props) => {
  return (
    <section className="door">
      <img className="door__img1" src={`http://armada.bestdoorshop.ru/pics/pic${props.door.id}1.jpg`} alt="Дверь снаружи"></img>
      <img className="door__img2" src={`http://armada.bestdoorshop.ru/pics/pic${props.door.id}2.jpg`} alt="Дверь внутри"></img>
      <h3 className="door__name">{`Дверь ${props.door.compn}`}<br />{`${props.door.name}`}</h3>
      <div className="door__info">
        <span className="door__info_discount">{`СКИДКА\u00A0${props.door.discount}%`}</span>
        <span className="door__info_span_title">Замки: </span>
        <span className="door__info_span_text">{props.door.locker}<br /></span>
        <span className="door__info_span_title">Внешняя отделка: </span>
        <span className="door__info_span_text">{props.door.outface}<br /></span>
        <span className="door__info_span_title">Вутренняя отделка: </span>
        <span className="door__info_span_text">{props.door.inface}<br /></span>
        <span className="door__info_span_title">В цену включены: </span>
        <span className="door__info_span_text">{props.door.incost}<br /></span>
      </div>
      <div className="door__cost">
        <span className="door__info_span_title">Цена: </span>
        <span className="door__info_span_cost">{props.door.cost}</span>
        <span className="door__info_span_dcost">{props.door.dcost}</span>
        <span className="door__info_span_text"> руб.<br /></span>
      </div>
      <span className="door__btn">Заказать</span>

    </section>
  );
}

export default Door;
