import firebase from 'firebase/app';
// eslint-disable-next-line no-unused-vars
import firebaseconfig from './firebaseIndex';

export const authMethods = {
  signUp: (email, password, setErrors) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(async (res) => {
        console.log('user successfully registered', res);
      })
      .catch((err) => {
        setErrors((prev) => ([...prev, err.message]));
      });
  },
  signIn: (email, password, setErrors, setToken) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(async (res) => {
        const token = await Object.entries(res.user)[5][1].b;
        await localStorage.setItem('token', token);
        setToken(window.localStorage.token);
      })
      .catch((err) => {
        setErrors((prev) => ([...prev, err.message]));
      });
  },
  signOut: (setErrors, setToken) => {
    firebase.auth().signOut().then(() => {
      localStorage.removeItem('token');
      setToken(null);
    })
      .catch((err) => {
        setErrors((prev) => ([...prev, err.message]));
        localStorage.removeItem('token');
        setToken(null);
      });
  },
};
