import React from 'react';
import './preloader.css';



const Preloader = React.memo(() => {
  console.log('перерисовка Preloader');
  return (
    <div className="preloader animated">
      <div className="preloader__center animated fadeIn">
        <img className="preloader__img animated infinite rotateAnim slow10 constancy " src={require('./preloader.svg')} alt="Двери Армада"/>
        <div>ЗАГРУЗКА</div>
      </div>
    </div>
  );
});

export default Preloader;
