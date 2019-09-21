import React from 'react';
import { connect } from 'react-redux';
import './how.css';
import { openPopup } from '../../../redux/reducers/popup';

const How = (props) => {
  console.log('перерисовка How');
  return (
    <section className="how">
      <h2 className="app__h2 all-columns">ЗАКАЗАТЬ У НАС ДВЕРЬ ОЧЕНЬ ПРОСТО</h2>
      <div className="how__numbers">1</div>
      <div className="how__text">
      Свяжитесь с нами удобным способом: по телефону <a target="_blank" rel="noopener noreferrer" href={`tel:${props.callPhone}`}>{props.seePhone}</a> или заполнив любую из форм на сайте. Мы перезвоним Вам в течение часа.
      </div>
      <div className="how__numbers">2</div>
      <div className="how__text">
      Мы выслушаем Ваши пожелания, расскажем о нашей продукции, ее стоимости и сроках изготовления/доставки. Если Вас всё устроит - оформляем заявку на выезд консультанта-замерщика. Наш специалист подъедет в удобное для Вас время, с Пн по Вс, с 9.00 до 21.00 (без выходных). Выезд мастера БЕСПЛАТНЫЙ (по Москве +10 км за МКАД, далее 35 руб/км).
      </div>
      <div className="how__numbers">3</div>
      <div className="how__text">
      К Вам приезжает замерщик с демонстрационными образцами, начиная от дверей в разрезе и заканчивая всеми отделочными материалами. Вы согласовываете точную комплектацию двери. Мастер делает рассчет. Далее, если Вас всё устраивает, подписывается договор, вносится предоплата. Пластиковые карты принимаем к оплате на месте. Никуда ехать не надо.
      </div>
      <div className="how__numbers">4</div>
      <div className="how__text">
      Если Вы заказали дверь со склада, то мы установим ее на следующий день или в любое другое удобное время. Срок изготовления и установки дверей на заказ - от 7 рабочих дней. Доставка по Москве +10 км за МКАД 1500 руб. Стоимость стандартного монтажа 2000 руб (установка в готовый проем + расходные материалы).
      </div>
      <div className="how__btns all-columns">
      <div className="how__btn app__button app__dark-button app__all-corner-round-button" onClick={props.openPopup}>ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</div>
      <div className="how__btn app__button app__dark-button app__all-corner-round-button" onClick={props.openPopup}>ВЫЗВАТЬ ЗАМЕРЩИКА</div>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    callPhone: state.phones.data.callPhone,
    seePhone: state.phones.data.seePhone
  }
}

export default connect(mapStateToProps, { openPopup })(How);
