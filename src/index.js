import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App, serviceWorker } from './app';
import * as firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/auth'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDiollfdabNDVAkS15p6i9rl-7svpoVi20",
    authDomain: "fir-tuto-3bbc1.firebaseapp.com",
    databaseURL: "https://fir-tuto-3bbc1.firebaseio.com",
    projectId: "fir-tuto-3bbc1",
    storageBucket: "fir-tuto-3bbc1.appspot.com",
    messagingSenderId: "295787145965",
    appId: "1:295787145965:web:896e765e18eec87414fae4",
    measurementId: "G-3HFQ8H4QCX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// This is where the magic happens. React renders our App component
// inside the div with the id "root"
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
