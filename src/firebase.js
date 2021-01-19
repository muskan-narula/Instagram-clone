import firebase from "firebase";


const firebaseApp =firebase.initializeApp({

    apiKey: "AIzaSyB_cnw8QACSF8LaMP3Ku07TwZuyO2EkdqE",
    authDomain: "instagram-clone-react-212b8.firebaseapp.com",
    projectId: "instagram-clone-react-212b8",
    storageBucket: "instagram-clone-react-212b8.appspot.com",
    messagingSenderId: "896734070462",
    appId: "1:896734070462:web:0068b1fe0e32a2b2be00ef",
    measurementId: "G-TQK6MR3M9Z"
  });
  const db = firebaseApp.firestore();

  const auth=firebase.auth();
  const storage=firebase.storage();
  export {db,auth,storage};
