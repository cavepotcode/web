import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import i18next from 'i18next';
import es from './i18n/es.json';
import en from './i18n/en.json';
import { I18nextProvider } from 'react-i18next';
import { HashRouter } from 'react-router-dom';

i18next.init({
  interpolation: { escapeValue: false },
  lng: navigator.language.substring(0,2),
  resources: {
    es: {
      global: es
    },
    en: {
      global: en
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
    </HashRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
