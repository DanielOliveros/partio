// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app';
// If you are using v7 or any earlier version of the JS SDK,
// you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import 'firebase/analytics';

// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseApp = {
  apiKey: 'AIzaSyBT2yXPC_uM5f5K6CmUZCg62_Mh58Vu50o',
  authDomain: 'cowork-97ad9.firebaseapp.com',
  projectId: 'cowork-97ad9',
  storageBucket: 'cowork-97ad9.appspot.com',
  messagingSenderId: '1045813301411',
  appId: '1:1045813301411:web:c3e90432e2819ea57cef16',
  measurementId: 'G-HXTC4YE6LQ',
};
firebase.initializeApp(firebaseApp);
export const auth = firebase.auth();
