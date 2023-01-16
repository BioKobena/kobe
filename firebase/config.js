import firebase from 'firebase/compat/app'
import {getDatabase} from 'firebase/database'


const firebaseConfig = {
    apiKey: "AIzaSyBxv7xE10_iOZ4dn84Df2qbtS0fqT_4e6I",
    authDomain: "kobe-b4d9b.firebaseapp.com",
    databaseURL: "https://kobe-b4d9b-default-rtdb.firebaseio.com",
    projectId: "kobe-b4d9b",
    storageBucket: "kobe-b4d9b.appspot.com",
    messagingSenderId: "1059302046426",
    appId: "1:1059302046426:web:6cc48a3be1315fc2d283e3"
  };
 
firebase.initializeApp(firebaseConfig)
const db = getDatabase()

  export {db}