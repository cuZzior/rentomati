import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Header from 'modules/client/components/Header';
import Items from 'modules/client/pages/Items';
import Item from 'modules/client/pages/Item';

import './normalize.css';
import './global.css';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path="/">
                <Redirect to="/items" />
            </Route>
            <Route path="/items/:itemId">
                <Item />
            </Route>
            <Route path="/items">
                <Items />
            </Route>
        </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
