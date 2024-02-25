import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

import { store } from './redux/store';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/rental-car-app">
        <App />
        <Toaster position="top-center" reverseOrder={false} />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
