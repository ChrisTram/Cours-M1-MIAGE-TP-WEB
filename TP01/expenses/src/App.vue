<template>
    <div id="app">
        <Restaurants/>
    </div>
    
</template>
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.0.0/firebase-app.js">
// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCbEYUz8wVcFquBUOtItbccvMru9sN-aYA",
    authDomain: "web-tp01.firebaseapp.com",
    databaseURL: "https://web-tp01.firebaseio.com",
    projectId: "web-tp01",
    storageBucket: "web-tp01.appspot.com",
    messagingSenderId: "539313047550",
    appId: "1:539313047550:web:77db35628491131ad2e2af"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);</script>
<script>
import Restaurants from './components/Restaurants.vue'

export default {
    name: 'app',
    components: {
        Restaurants
    }
}
  
</script>