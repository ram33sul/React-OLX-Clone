import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Context,{ firebaseContext } from './store/firebase_context';
import { Firebase } from './firebase/config';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <firebaseContext.Provider value={{Firebase}}>
        <Context>
          <App />
        </Context>
      </firebaseContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);
