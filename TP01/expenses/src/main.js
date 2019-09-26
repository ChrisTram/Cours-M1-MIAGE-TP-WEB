import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'
import 'firebase/firestore'
import VueFirestore from 'vue-firestore'

firebase.initializeApp({
    databaseURL: "https://xxxxxxxxxx.firebaseio.com",
    projectId: "xxxxxxxxxx",
});
export const db = firebase.firestore();
Vue.use(VueFirestore)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')