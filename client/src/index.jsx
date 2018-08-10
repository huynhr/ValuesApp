import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';


import AppComponent from './components/App.jsx';
import './style.scss';

ReactDom.render((
  <BrowserRouter>
    <AppComponent />
  </BrowserRouter>
), document.getElementById('app'));