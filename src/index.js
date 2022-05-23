import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './i18next';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
ReactDOM.render(
  <Suspense fallback={<div>Loading...</div>}>
    <App />
  </Suspense>,
  document.getElementById('root')
);

// ReactDOM.render(
//   // extensies aanpassen naar JSX op het einde zou deze strict mode moeten werken
//   // <React.StrictMode>
//   // <BrowserRouter>
//   <App />,
//   // </BrowserRouter>
//   // </React.StrictMode>
//   document.getElementById('root')
// );
