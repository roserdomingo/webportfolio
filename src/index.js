import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/index.css';
import { hydrateRoot, createRoot } from 'react-dom/client';
import Main from './Main';

// import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');



if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, <Main/>);
} else {
  //renderRoot(rootElement, <Main/>);
  let root = createRoot(rootElement);
  root.render(<Main />);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
