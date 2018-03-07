import 'babel-polyfill'
import 'console-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';

ReactDOM.hydrate(
  <App />,
  document.getElementById('rdp_sunny__quotes')
);
