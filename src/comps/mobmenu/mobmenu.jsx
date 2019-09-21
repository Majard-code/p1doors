import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './mobmenu.css';


const Mobmenu = (props) => {
  useEffect(() => {
    const elements = document.querySelectorAll('.mob-menu__li');
    if (props.isOpen) {
      if (!document.querySelector('.mobMenu').classList.contains('mobMenu_active')) {
        document.querySelector('.mobMenu').classList.add('mobMenu_active');
      }
      if (!document.querySelector('.menuBtn').classList.contains('menuBtn_active')) {
        document.querySelector('.menuBtn').classList.add('menuBtn_active');
      }
      elements.forEach((element) => {
        if (element.classList.contains('fadeOutUp')) element.classList.remove('fadeOutUp');
        element.classList.add('fadeInDown');
      });

    } else {
      if (document.querySelector('.mobMenu').classList.contains('mobMenu_active')) {
        document.querySelector('.mobMenu').classList.remove('mobMenu_active');
      }
      if (document.querySelector('.menuBtn').classList.contains('menuBtn_active')) {
        document.querySelector('.menuBtn').classList.remove('menuBtn_active');
      }
      elements.forEach((element) => {
        if (element.classList.contains('fadeInDown')) element.classList.remove('fadeInDown');
        element.classList.add('fadeOutUp');
      });
    }
  });

  return (
    <nav className="mobMenu">
      <ul>
        <li className="mob-menu__li animated">
          <a className="anchor-a" href="#presence">Двери в наличии</a>
        </li>
        <li className="mob-menu__li animated delay100ms">
          <a className="anchor-a" href="#custom">Двери на заказ</a>
        </li>
        <li className="mob-menu__li animated delay200ms">
          <a className="anchor-a" href="#about">О компании</a>
        </li>
        <li className="mob-menu__li animated delay300ms">
          <a className="anchor-a" href="#comments">Отзывы</a>
        </li>
      </ul>
    </nav>
  );
}
const mapStateToProps = state => {
  return {
    isOpen: state.mobmenu.isOpen
  }
}
export default connect(mapStateToProps)(Mobmenu);
