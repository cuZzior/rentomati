import React from 'react';
import ReactDOM from 'react-dom';

import Demo from 'modules/client/components/Demo';

import './normalize.css';
import './global.css';


ReactDOM.render(
  <React.StrictMode>
    <Demo />
  </React.StrictMode>,
  document.getElementById('root')
);
