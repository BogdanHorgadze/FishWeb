import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './main.scss'
import {BrowserRouter} from 'react-router-dom'
import App from './components/Main/App';

const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

ReactDOM.render(
  app,
  document.getElementById('root')
);

serviceWorker.unregister();
