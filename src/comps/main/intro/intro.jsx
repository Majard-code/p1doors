import React from 'react';
import { connect } from 'react-redux';
import './intro.css';
import { openPopup } from '../../../redux/reducers/popup';

const Intro = (props) => {
  return (
    <header className="intro">
      <div className="intro__up"></div>
      <div className="intro__div">
        <h1 className="intro__h1 animated fadeInUp">СТАЛЬНЫЕ ДВЕРИ В&nbsp;МОСКВЕ<br/>И МОСКОВСКОЙ ОБЛАСТИ<br/>ПОД КЛЮЧ ЗА 1&nbsp;ДЕНЬ</h1>
        <p className="intro__p animated fadeInUp">Цены от завода производителя ниже среднерыночных&nbsp;на&nbsp;7&nbsp;-&nbsp;12%</p>
        <div className="intro__btn animated fadeInUp" onClick={props.openPopup}>ВЫЗВАТЬ ЗАМЕРЩИКА</div>
      </div>
      <div className="intro__down"><a className="anchor-a" href="#presence"><div className="ina"></div></a></div>
    </header>
  );
}

export default connect(null, { openPopup })(Intro);
