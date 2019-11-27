import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/analytics'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyAVdLEd_EnvuB0omCICA4STQCrt8772UX0",
    authDomain: "react-contact-manager-c99ea.firebaseapp.com",
    databaseURL: "https://react-contact-manager-c99ea.firebaseio.com",
    projectId: "react-contact-manager-c99ea",
    storageBucket: "react-contact-manager-c99ea.appspot.com",
    messagingSenderId: "259830933391",
    appId: "1:259830933391:web:fe4af7d150ac96021b8dfa",
    measurementId: "G-4KFVTLXMQ0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase;