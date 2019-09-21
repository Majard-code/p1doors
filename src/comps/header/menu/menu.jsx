import React from 'react';
import { connect } from 'react-redux';
import './menu.css';
import { mobmenuToggle } from '../../../redux/reducers/mobmenu';


const Menu = (props) => {
  return (
    <div className="menu">
      <nav className="deskMenu">
        <ul>
          <li>
            <a className="anchor-a" href="#presence">Двери в наличии</a>
          </li>
          <li><p>&mdash;</p></li>
          <li>
            <a className="anchor-a" href="#custom">Двери на заказ</a>
          </li>
          <li><p>&mdash;</p></li>
          <li>
            <a className="anchor-a" href="#about">О компании</a>
          </li>
          <li><p>&mdash;</p></li>
          <li>
            <a className="anchor-a" href="#comments">Отзывы</a>
          </li>
        </ul>
      </nav>
      <div className="menuBtn" onClick={props.mobmenuToggle}>
        <span></span>
      </div>
    </div>
  );
}
export default connect(null, { mobmenuToggle })(Menu);
