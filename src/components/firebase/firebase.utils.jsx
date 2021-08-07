import firebase from 'firebase/app'

import 'firebase/firestore' // for db
import 'firebase/auth' // for auth


var config = {
    apiKey: "AIzaSyBEpH-48nsPjwUD5hXueISbrHejCQUy8Tk",
    authDomain: "firebasics-4fb04.firebaseapp.com",
    databaseURL: "https://firebasics-4fb04-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "firebasics-4fb04",
    storageBucket: "firebasics-4fb04.appspot.com",
    messagingSenderId: "176064824966",
    appId: "1:176064824966:web:2e9d6b4600181005a57307",
    measurementId: "G-FLGRQTYKXF"
};
export const createUserProfileDocument = async (userAuth, additionalData ) => {
  if (!userAuth) return;
}



 // Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider  = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;