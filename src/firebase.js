import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const configData = require('./configs/firebase-config.json');

const firebaseConfig = firebase.initializeApp(configData);

export { firebaseConfig as firebase };
