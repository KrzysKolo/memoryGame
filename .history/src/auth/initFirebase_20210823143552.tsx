import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyBfNr_EQZrHsvHeL-PHo9WA9OgUuzNb_TY",
  authDomain: "memorygame-69d42.firebaseapp.com",
  projectId: "memorygame-69d42",
  storageBucket: "memorygame-69d42.appspot.com",
  messagingSenderId: "521572128921",
  appId: "1:521572128921:web:1ba6124f510d37aef2c008"
 };

function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
};

export {};