import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/messaging';
import 'firebase/analytics';

const config = {
  apiKey: 'AIzaSyAdC20B1dnaerOkV7gNvmcdjvQOCtfqOyI',
  authDomain: 'jumga-76137.firebaseapp.com',
  projectId: 'jumga-76137',
  storageBucket: 'jumga-76137.appspot.com',
  messagingSenderId: '292002246863',
  appId: '1:292002246863:web:cda45b47c9268c568107ba',
  measurementId: 'G-VT3GRNC9FW',
};

firebase.initializeApp(config);

const database = firebase.firestore();
const storage = firebase.storage();

export { firebase, storage, config, database as default };
