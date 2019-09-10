import React from 'react';
import './app.css';

import Header from './header/header';
import Preloader from './preloader/preloader';
import Popup from './popup/popup';
import Foot from './foot/foot';
import Main from './main/main';
import Mobmenu from './mobmenu/mobmenu';
import useGlobal from '../store';

const App = () => {
  console.log('перерисовка App');
  const [gState, gActions] = useGlobal();
  console.log(gState);
  setTimeout(() => gActions.initial.getAll(), 300);
  if (gState.phones.status === 'SUCCESS' && gState.doors.status === 'SUCCESS' && gState.calc.status === 'SUCCESS' && gState.comments.status === 'SUCCESS') {
    setTimeout(() => document.querySelector('.app__veil').style.display = 'none', 1000);
    return (
        <div className="app">
          <div className="app__veil animated fast500 fadeOut"></div>
          <Popup />
          <Mobmenu />
          <Header />
          <Main />
          <Foot />
        </div>
    );
  } else {
    return (
      <div className="app">
      <Preloader />
      </div>
    );
  }
};

export default App;
