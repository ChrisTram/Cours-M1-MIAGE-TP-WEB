import * as firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyDCS8NFKKrNOSrp9wl5fNavNWkcSKvmecM",
  authDomain: "web-tp01-chat.firebaseapp.com",
  databaseURL: "https://web-tp01-chat.firebaseio.com",
  projectId: "web-tp01-chat",
  storageBucket: "web-tp01-chat.appspot.com",
  messagingSenderId: "737769664904",
  appId: "1:737769664904:web:b06bcfd87dfa6757caca3d"
};

  firebase.initializeApp(firebaseConfig);
  export default firebase;
