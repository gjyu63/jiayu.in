import React from 'react';
import {Route,BrowserRouter} from 'react-router-dom';
import Belief from './Belief'


function main() {
  return (
    <div style={{margin: '18px',}}>
      <h1>Jiayu Guo</h1>
      <ul>
        <li>A software engineering craftsman</li>
        See <a href='http://manifesto.softwarecraftsmanship.org/' target="_blank">Manifesto for Software Craftsmanship</a>
        <li>A baptist</li>
        <a href='/belief'>Why Christianity, why baptism</a>
      </ul>
      <h2>Find me at (or won't)</h2>
      <a href='http://linkedin.com/in/gjyu63' target="_blank">Linkedin</a>
      <br></br>
      <a href='http://github.com/gjyu63' target="_blank">Github</a>
      <br></br>
      <a href='http://facebook.com/guojcb63' target="_blank">Facebook</a>
      <p>pot plu s -at- live -dot- com</p>
      <h2>You may be also curious...(or not)</h2>
      <p>Trust me, this simple-a-f website is written in React (and was compiled to a static website)</p>
      <a href="https://youglish.com/search/guo?" target="_blank">How to pronounce my last name</a>
      <br></br>
      <a href="https://youglish.com/search/jiayu?" target="_blank">How to pronounce my first name</a>
      <p>Why this (jiayu.in and guo.jiayu.in) domain? Because India is most promising country on this planet in the 21th century</p>
      <hr></hr>
      <p> © 2019 Jiayu Guo </p>
      <p>This program may be redistributed under the terms of the 
        <a href="http://www.gnu.org/licenses/gpl.html" target="_blank"> GNU General Public License (GPL)</a></p>
    </div>
  );
}

export default main;