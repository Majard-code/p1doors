import React from 'react';
import { connect } from 'react-redux';
import './main.css';
import Intro from './intro/intro';
import Doors from './doors/doors';
import Calc from './calc/calc';
import About from './about/about';
import Comments from './comments/comments';
import How from './how/how';

const Main = (props) => {
  console.log('перерисовка Main');
  return (
    <main className="main1">
      <article className="main">
        <Intro />
        <Doors />
        <Calc />
        <About />
        <Comments />
        <How />
        <a className="how__phone app__dark-text app__h2" target="_blank" rel="noopener noreferrer" href={`tel:${props.callPhone}`}>{props.seePhone}</a>
        <p className="app__sub-h2">МЫ ВСЕГДА РАДЫ ВАШЕМУ ЗВОНКУ!</p>
      </article>
    </main>
  );
}
const mapStateToProps = (state) => {
  return {
    seePhone: state.phones.data.seePhone,
    callPhone: state.phones.data.callPhone
  }
}

export default connect(mapStateToProps)(Main);
