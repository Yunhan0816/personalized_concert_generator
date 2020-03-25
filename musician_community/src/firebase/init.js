import firebase from "firebase/app";
// const firebaseui = require("firebaseui");
// import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyD3Kb2A0JuBHKRZbj53eEQ1IraEWBqe6Ow",
  authDomain: "musician-community.firebaseapp.com",
  databaseURL: "https://musician-community.firebaseio.com",
  projectId: "musician-community",
  storageBucket: "musician-community.appspot.com",
  messagingSenderId: "415060047558",
  appId: "1:415060047558:web:fa2be6e6e86482e834c9c7",
  measurementId: "G-4N61CZSXP7"
};

const app = firebase.initializeApp(config);
// const auth = firebase.auth();
const db = app.firestore();

// const authUI = new firebaseui.auth.AuthUI(auth);

// const authUIConfig = {
//   signInSuccessUrl: "/",
//   signInOptions: [
//     {
//       provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
//     },
//     {
//       provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//       customParameters: {
//         prompt: "select_account"
//       }
//     }
//   ]
// };

export default app;
export { db };
// export { auth, db, authUI, authUIConfig };
