// main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';  // Importer le composant Provider
import dva from './utils/dva';
import AppRoutes from './routes/index';
import models from './models/index';

const app = dva({
  initialState: {},
  models: [...models],
  onError(e) {
    console.log('DVA ERROR', e);
  },
});

export const Store = app._store;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Envelopper votre application avec le composant Provider */}
    <Provider store={Store}>
      <AppRoutes />
    </Provider>
  </React.StrictMode>,
);

