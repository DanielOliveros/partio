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
// import * as admin from 'firebase-admin'; TODO remove or use library

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

// admin.initializeApp({
//   credential: {
//     type: 'service_account',
//     project_id: 'cowork-97ad9',
//     private_key_id: '3f340076bdae653759ca1dc54a962a59eab634cf',
//     private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCotUPHc8gztLCK\nDMrcKAOyr29+kTQA7PIc4ED3VTCayQSVzJGFM3J2otpdMPrVXYoaHYEd3zWTVX0B\nQHmeAR/cqQTOUO7XEL2chRh+FjGrdzpR9D3dxyKM+a/D7crorHehR+xOUE+jDzDQ\nsqLnYwfTyaqXrTdb7G6N15+COgswVldYud7TlW+UCJ8Pi9GfdqO8LyLmBHdzCRNW\n8hbqq49MG5t1RVGO+gXch5Z/jkwUFBGC00e0+gxAVbLfBLM5FPO3CZR7Q8Qdu8ov\nQnoJeH7SyY5OMDOePZ8378wH4Gre63oUUJGNJPXDHZlNIF2grCLB6pMwFoxItv8t\ncDgd8kuDAgMBAAECggEADw/X1Ee++PbJyBlqRwt/gQVuo9Mc3HRLDU7sHejKJReL\nREB2QXkdYAAcFLPZwRDP0pMNwvf5lYTNWz5BXVzmVlH0ruLE4AiLlRzA2gjrOE61\nszlmCJXNvN5R1eE1+13idFCyhS9gXMNvbUJ1jsjlmv/nLhF13swV9q3ofLzn4NG/\ncM2OpRVxpKOyMDc3soZO0QpaidCZzady+SVYmv3g1eEIBEEG613yIpz3LSiyzFCX\n9lMbi/PGZmflX7LrIM8qH9M6PeN+dHU+oNsfKT5Lp8eai7Kw1GgBIE5FXQru5+O3\nN34O8EuEuGuAn+Vw5kmBDxIakTLaFQalTIhGM5y+uQKBgQDQ8H4VQ+syCiyYEFUK\n2lTOdNsPbWit7V+LVBTyUOO8qoKPRKGX4td6Zr+iaUGh/2xFXjTlztjZSjX31Tr+\nwStzTnNh+z+hsgIEMA3kye6YWPu7pnilYIzoM+FpZ0QGtrInwHsbAnQPXEhEDVWg\ncjvarQpqZS/gbhYtBGktomGZzwKBgQDOtQVAUraA08mdYWwSV9YgCaEDOzd6UVKF\nwPUhb4mdABxP0el11nM/WUsXTZCz1ko9r6nOwRmzrOlxSb4HyVLzIUDrWi5ikKqh\ni8ueSgT7hI5Snry9OkjotLbZfboDsGaDlaBqUbRP5LOY6v7Qcdg5WvYNQjKdVVL4\nQvK1FNXEDQKBgHCiBEXwbBx4kZuTylRkaC03n1OMtk50VPol5HjQFESDYohbBgV7\n2o74Trv9o8zxhWtLopZz0EAqmjc0sm3cslChbN/X8nB3JlEdmo/IL5/e8C0zS3xT\nNQKD3TLV4T0BRb7aK0LfKrORGr/ctFke25dBiwjZ7Vo93iR8aTqZe6XPAoGARJJ+\nvHjz/EbF8oS4IlmrOhOXq4fAfr5tntuFNmNXBpNb0Qr05NeQgepwY7mikFY9aLtW\nnLUofpeVFbT96n1aHDfi3nCbRK1zPYYvtUIe5wVxZW0tdaTZPQF+SyZPSBwD1hEU\nF1ElfP+EqO0EPUgXD+fiCkH0oocEsEEdXP8dbx0CgYAg7DKOS7o2PTxcwoAGbmNn\nxIxWdLW21P7yoYGuKFhql5g1b/s0wkqlIbUDjdpyN1Q4fwamJGbt1cOn8+yeWsLo\noAFfnAcP5m8Kevwy3dLigGKPsNM+lRyonqrJx7Wr0tFU63deXC55Pji7Tj9qbyH0\nJ5X/HMaFjrLgjGEswgj/yw==\n-----END PRIVATE KEY-----\n',
//     client_email: 'firebase-adminsdk-jnff3@cowork-97ad9.iam.gserviceaccount.com',
//     client_id: '101615593643999450035',
//     auth_uri: 'https://accounts.google.com/o/oauth2/auth',
//     token_uri: 'https://oauth2.googleapis.com/token',
//     auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
//     client_x509_cert_url: 'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-jnff3%40cowork-97ad9.iam.gserviceaccount.com',
//   },
// }); TODO remove or use library

export const auth = firebase.auth();
