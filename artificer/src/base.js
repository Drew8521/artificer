import * as firebase from 'firebase';
import "firebase/auth";

const firebaseConfig = firebase.initializeApp({
  // apiKey: 'AIzaSyALKHTz_Lv92B1EZvTEjqvIKnNDrQVQNgw',
  // storageBucket: 'gs://artificer-f8573.appspot.com/'
     apiKey: process.env.REACT_APP_FIREBASE_KEY,
     authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
     databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
     messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID
});

export default firebaseConfig;
