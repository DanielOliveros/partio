import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBT2yXPC_uM5f5K6CmUZCg62_Mh58Vu50o',
  authDomain: 'cowork-97ad9.firebaseapp.com',
  projectId: 'cowork-97ad9',
  storageBucket: 'cowork-97ad9.appspot.com',
  messagingSenderId: '1045813301411',
  appId: '1:1045813301411:web:c3e90432e2819ea57cef16',
  measurementId: 'G-HXTC4YE6LQ',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth();

export default {
  firebaseConfig,
};
