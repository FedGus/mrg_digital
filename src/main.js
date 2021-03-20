import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import firebase from 'firebase/app';



// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDFRSlCFW_LBPVyQq9rDb5HUZJqVppfEfg",
  authDomain: "digital-3a85a.firebaseapp.com",
  databaseURL: "https://digital-3a85a.firebaseio.com",
  projectId: "digital-3a85a",
  storageBucket: "digital-3a85a.appspot.com",
  messagingSenderId: "821648971317",
  appId: "1:821648971317:web:ae08135bee10a4587d037c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig); 

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
