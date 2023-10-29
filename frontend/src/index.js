import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//import context
import { StudyBoxContextProvider } from './Context/StudyBoxContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StudyBoxContextProvider>
      <App />
    </StudyBoxContextProvider>
  </React.StrictMode>
);
