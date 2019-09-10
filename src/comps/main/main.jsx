import React from 'react';
import './main.css';
import Intro from './intro/intro';
import Doors from './doors/doors';
import Calc from './calc/calc';
import About from './about/about';
import Comments from './comments/comments';
import How from './how/how';

const Main = () => {
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
      </article>
    </main>
  );
}

export default Main;
