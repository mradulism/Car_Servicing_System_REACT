import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAWphrUploDnq03iTAGxHQAfzku1knK7B4",
  authDomain: "carserviceapp-858a4.firebaseapp.com",
  projectId: "carserviceapp-858a4",
  storageBucket: "carserviceapp-858a4.appspot.com",
  messagingSenderId: "436706149894",
  appId: "1:436706149894:web:783255fba330050486e587"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;