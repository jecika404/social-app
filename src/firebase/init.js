import firebase from 'firebase';
import 'firebase/firestore';

  var firebaseConfig = {
    apiKey: "AIzaSyDWmN2te9rcCTld2jP9YCN-pNEagKIdDFU",
    authDomain: "user-location-6cdd1.firebaseapp.com",
    databaseURL: "https://user-location-6cdd1.firebaseio.com",
    projectId: "user-location-6cdd1",
    storageBucket: "user-location-6cdd1.appspot.com",
    messagingSenderId: "72457339122",
    appId: "1:72457339122:web:f8e86d52f98d54b2e9106b",
    measurementId: "G-H4RYLCP23M"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore();
