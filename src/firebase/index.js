import  firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyDVPK1MgMzg-1tt3Hg2-cKHWbGPXDEHMhg",
  authDomain: "fir-react-upload-db0b1.firebaseapp.com",
  projectId: "fir-react-upload-db0b1",
  storageBucket: "fir-react-upload-db0b1.appspot.com",
  messagingSenderId: "580351777209",
  appId: "1:580351777209:web:5ea30a8f90a95f7a037e68",
  measurementId: "G-BWTQ1R0RY3"
  };

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };