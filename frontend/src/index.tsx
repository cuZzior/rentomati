import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Demo from 'modules/client/pages/Demo';
import Header from 'modules/client/components/Header';

import './normalize.css';
import './global.css';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path="/">
                <Demo />
            </Route>
        </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
