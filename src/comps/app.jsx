import React from 'react';
import './app.css';

import Header from './header/header';
import Preloader from './preloader/preloader';
import Popup from './popup/popup';
import Foot from './foot/foot';
import Main from './main/main';
import {BrowserRouter} from 'react-router-dom';
import Mobmenu from './mobmenu/mobmenu';


const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Preloader />
        <Popup />
        <Mobmenu />
        <Header />
        <Main />
        <Foot />
      </div>
    </BrowserRouter>
  );
}

export default App;
