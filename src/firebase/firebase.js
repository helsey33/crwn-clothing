import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB20yajdhMwnY6YPVSDBNDOwhs-wNLY-pc",
  authDomain: "crwn-db-8a69b.firebaseapp.com",
  databaseURL: "https://crwn-db-8a69b.firebaseio.com",
  projectId: "crwn-db-8a69b",
  storageBucket: "",
  messagingSenderId: "340943794754",
  appId: "1:340943794754:web:0b7d5683b17dc166"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
