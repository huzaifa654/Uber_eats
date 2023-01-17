import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyDhR91yIsBJ4NwbLzrR0OC6Kx41aeziHds',
  authDomain: 'rn-uber-eats-clone-46972.firebaseapp.com',
  projectId: 'rn-uber-eats-clone-46972',
  storageBucket: 'rn-uber-eats-clone-46972.appspot.com',
  messagingSenderId: '1053530617693',
  appId: '1:1053530617693:web:f6b4dbc39eb82243849ab4',
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
export default firebase;
