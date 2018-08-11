import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter, BrowserRouter } from 'react-router-dom';


import AppComponent from './components/App.jsx';
import './style.scss';

ReactDom.render((
  <AppComponent />
), document.getElementById('app'));