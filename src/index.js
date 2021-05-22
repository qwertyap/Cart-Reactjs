import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import App from './App';
import firebase from "firebase/app";//change with version greater than 8
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB-T9f40lU_optNjLCguZNi8iVD_eNi_AI",
    authDomain: "cart-2cfeb.firebaseapp.com",
    projectId: "cart-2cfeb",
    storageBucket: "cart-2cfeb.appspot.com",
    messagingSenderId: "856366965177",
    appId: "1:856366965177:web:58dd7906daa34d497cd668"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

