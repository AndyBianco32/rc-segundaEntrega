import React from 'react'
import ReactDOM from 'react-dom/client'
import { initializeApp } from "firebase/app";

import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'


const firebaseConfig = {
  apiKey: "AIzaSyB5FSQafPXy3VRXn1pMRdaKPyRNhuVROws",
  authDomain: "bertrand-proyecto.firebaseapp.com",
  projectId: "bertrand-proyecto",
  storageBucket: "bertrand-proyecto.appspot.com",
  messagingSenderId: "201306592674",
  appId: "1:201306592674:web:b60eff26b189c3b1888efb"
};

initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
