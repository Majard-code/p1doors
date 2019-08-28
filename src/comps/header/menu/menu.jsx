import React from 'react';
import {NavLink} from 'react-router-dom';
import './menu.css';


const Menu = () => {
  return (
    <div className="menu">
      <nav className="deskMenu">
        <ul>
          <li>
            <a href="#cmainfootID">Двери в наличии</a>
          </li>
          <li><p>&mdash;</p></li>
          <li>
            <a href="#cmainfootID">Двери на заказ</a>
          </li>
          <li><p>&mdash;</p></li>
          <li>
            <a href="#cmainfootID">О компании</a>
          </li>
          <li><p>&mdash;</p></li>
          <li>
            <a href="#cmainfootID">Отзывы</a>
          </li>
        </ul>
      </nav>
      <NavLink to="#" className="menuBtn">
        <span></span>
      </NavLink>
    </div>
  );
}

export default Menu;
