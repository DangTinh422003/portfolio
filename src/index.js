import 'bootstrap/dist/css/bootstrap.min.css';
import Animation from '~/components/GlobalComponents/Animation';
import App from './App';
import GlobalStyles from '~/components/GlobalStyles';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Animation>
      <GlobalStyles>
        <App />
      </GlobalStyles>
    </Animation>
  </BrowserRouter>,
  // </React.StrictMode>,
);

reportWebVitals();
