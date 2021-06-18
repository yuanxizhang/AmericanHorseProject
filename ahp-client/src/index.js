import React from 'react';
import ReactDOM from 'react-dom';
import { AppContextProvider } from './context/AppContext';
import App from './App';

import './index.css';

ReactDOM.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>,
  document.getElementById('root')
);
