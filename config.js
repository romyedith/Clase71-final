import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDtiEkSC-4fG-TUKHvBpdsDjNKYMHh0Ap8",
  authDomain: "biblioteca-dac11.firebaseapp.com",
  projectId: "biblioteca-dac11",
  storageBucket: "biblioteca-dac11.appspot.com",
  messagingSenderId: "483876881689",
  appId: "1:483876881689:web:24a4ab2c2048cbbb0ef188"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
