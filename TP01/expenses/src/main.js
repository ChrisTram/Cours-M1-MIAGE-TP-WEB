import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'
import 'firebase/firestore'
import VueFirestore from 'vue-firestore'

firebase.initializeApp({
    databaseURL: "https://web-tp01.firebaseio.com",
    projectId: "web-tp01",
});
export const db = firebase.firestore();
Vue.use(VueFirestore)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')