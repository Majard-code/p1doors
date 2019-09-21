import React from 'react';
import './about.css';
import Slider from './slider/slider';
import Four from './four/four';
import Serts from './serts/serts';

const About = () => {
  return (
    <section className="about" id="about">
        <h2 className="app__h2">ИНФОРМАЦИЯ О КОМПАНИИ</h2>
        <p className="app__sub-h2">ЕСЛИ ВЫ ИЩЕТЕ КАЧЕСТВЕННЫЕ ДВЕРИ, ТО ДВЕРИ АРМАДА ПО ПРАВУ МОГУТ ПРЕТЕНДОВАТЬ НА ЭТУ РОЛЬ, А МЫ ПОМОЖЕМ С ВЫБОРОМ, ДОСТАВИМ, УСТАНОВИМ И ВОЗЬМЕМ ИХ НА КРУГЛОСУТОЧНОЕ ГАРАНТИЙНОЕ И СЕРВИСНОЕ ОБСЛУЖИВАНИЕ.</p>
        <Slider />
        <Four />
        <Serts />
    </section>
  );
}

export default About;
