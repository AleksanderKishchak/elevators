import 'promise-polyfill/src/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { AppStateProvider } from './provider/AppStateProvider';
import { LangProvider } from './provider/LangProvider';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <LangProvider>
      <AppStateProvider>
        <App />
      </AppStateProvider>
    </LangProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
