import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter } from 'react-router-dom';


import AppComponent from './components/App.jsx';
import './style.scss';

ReactDom.render((
  <HashRouter>
    <AppComponent />
  </HashRouter>
), document.getElementById('app'));