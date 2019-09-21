import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import './app.css';

import Header from './header/header';
import Preloader from './preloader/preloader';
import Popup from './popup/popup';
import Foot from './foot/foot';
import Main from './main/main';
import Mobmenu from './mobmenu/mobmenu';

import store from '../redux/store';
import { fetchAll } from '../redux/reducers/app';
import { mobmenuClose } from '../redux/reducers/mobmenu';
import { trottleScroll } from '../libs/lib1';

const App = (props) => {
debugger;
  useEffect(() => {
    let didCancel = false;
    if (!props.isReady) {
      setTimeout(() => props.fetchAll(didCancel), 500);
    } else {
      document.querySelector('.preloader').classList.add('fadeOut');
      setTimeout(() => document.querySelector('.preloader').classList.add('preloader__off'), 1000);

      $('.anchor-a').on('click', function () {
        props.mobmenuClose();

        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top - 70 + "px"
        }, {
            duration: 300,
            easing: "swing"
        });
        return false;
    });
    window.addEventListener("scroll", trottleScroll, false);

    window.addEventListener('resize', () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });



    }
    return () => { didCancel = true; };
  }, [props]);

  if (!props.isReady) {
    return (
      <div className="app">
        <Preloader />
      </div>
    )
  } else {
    return (
      <div className="app">
        <Preloader />
        <Popup />
        <Mobmenu />
        <Header />
        <Main />
        <Foot />
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    isReady: state.app.isReady,
  };
};

export default connect(mapStateToProps, { fetchAll, mobmenuClose })(App);
